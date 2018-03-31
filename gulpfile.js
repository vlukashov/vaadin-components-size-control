"use strict";

const { exec } = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const mdTable = require("markdown-table");
const formatDate = require("date-fns/format");
const gulp = require("gulp");
const replace = require("gulp-replace");
const rename = require("gulp-rename");

const BUILDS_DIR = path.resolve(__dirname, "./builds");
const BUNDLES_DIR = path.resolve(__dirname, "./bundles");
const SHELLS_DIR = path.resolve(__dirname, "./shells");
const KNOWN_REPOS = {
  "vaadin-board": "https://github.com/vaadin/vaadin-board",
  "vaadin-button": "https://github.com/vaadin/vaadin-button",
  "vaadin-charts": "https://github.com/vaadin/vaadin-charts",
  "vaadin-checkbox": "https://github.com/vaadin/vaadin-checkbox",
  "vaadin-combo-box": "https://github.com/vaadin/vaadin-combo-box",
  "vaadin-context-menu": "https://github.com/vaadin/vaadin-context-menu",
  "vaadin-date-picker": "https://github.com/vaadin/vaadin-date-picker",
  "vaadin-dialog": "https://github.com/vaadin/vaadin-dialog",
  "vaadin-dropdown-menu": "https://github.com/vaadin/vaadin-dropdown-menu",
  "vaadin-form-layout": "https://github.com/vaadin/vaadin-form-layout",
  "vaadin-grid": "https://github.com/vaadin/vaadin-grid",
  "vaadin-icons": "https://github.com/vaadin/vaadin-icons",
  "vaadin-item": "https://github.com/vaadin/vaadin-item",
  "vaadin-list-box": "https://github.com/vaadin/vaadin-list-box",
  "vaadin-notification": "https://github.com/vaadin/vaadin-notification",
  "vaadin-ordered-layout": "https://github.com/vaadin/vaadin-ordered-layout",
  "vaadin-progress-bar": "https://github.com/vaadin/vaadin-progress-bar",
  "vaadin-radio-button": "https://github.com/vaadin/vaadin-radio-button",
  "vaadin-split-layout": "https://github.com/vaadin/vaadin-split-layout",
  "vaadin-tabs": "https://github.com/vaadin/vaadin-tabs",
  "vaadin-text-field": "https://github.com/vaadin/vaadin-text-field",
  "vaadin-upload": "https://github.com/vaadin/vaadin-upload",
  "vaadin-core": "https://github.com/vaadin/vaadin-core"
};

const bundles = fs.readdirSync(BUNDLES_DIR).filter(filename => {
  return fs.statSync(path.join(BUNDLES_DIR, filename)).isFile();
});

const shells = fs.readdirSync(SHELLS_DIR).filter(filename => {
  return fs.statSync(path.join(SHELLS_DIR, filename)).isFile();
});

const measurements = [];
const taskNames = [];
for (const shellFileName of shells) {
  for (const bundleFileName of bundles) {
    taskNames.push(
      createSizeControlTasks(
        shellFileName,
        bundleFileName,
        (shell, bundle, builtBundlePath) => {
          return fs.stat(builtBundlePath).then(stats => {
            measurements[bundle] = measurements[bundle] || {};
            measurements[bundle][shell] = stats.size;
          });
        }
      )
    );
  }
}

gulp.task("size-control:report", taskNames, () => {
  const formatAsKB = number => {
    return Math.round(number / 100) / 10 + " kB";
  };

  const padZero = number => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  const rows = [
    [
      "Component",
      "full Polymer in app",
      "some Polymer in app",
      "no Polymer in app"
    ]
  ];
  const links = [];
  Object.keys(measurements)
    .sort()
    .forEach((key, i) => {
      rows.push([
        KNOWN_REPOS[key] ? `[${key}][${padZero(i + 1)}]` : key,
        formatAsKB(measurements[key]["full-polymer"]),
        formatAsKB(measurements[key]["some-polymer"]),
        formatAsKB(measurements[key]["no-polymer"])
      ]);

      if (KNOWN_REPOS[key]) {
        links.push(
          `[${padZero(i + 1)}]: ${
            KNOWN_REPOS[key]
          } (see the <${key}> repo on GitHub)`
        );
      }
    });

  const table = mdTable(rows) + "\n\n" + links.join("\n");
  const updated_on = formatDate(new Date(), "MMMM Do, YYYY");
  const bowerjson = fs.readJsonSync(path.join(__dirname, "bower.json"));
  const version =
    bowerjson["dependencies"] && bowerjson["dependencies"]["vaadin"]
      ? bowerjson["dependencies"]["vaadin"]
      : "undefined";

  gulp
    .src(["README.md.tpl"])
    .pipe(rename("README.md"))
    .pipe(replace("{{version}}", version))
    .pipe(replace("{{table}}", table))
    .pipe(replace("{{updated_on}}", updated_on))
    .pipe(gulp.dest("."));
});

gulp.task("size-control", ["size-control:report"]);

gulp.task("size-control:clean", () => {
  return fs.remove(BUILDS_DIR);
});

function createSizeControlTasks(
  shellFileName,
  bundleFileName,
  builtBundleProcessor
) {
  const shell = shellFileName.replace("app-shell-", "").replace(".html", "");
  const bundle = bundleFileName.replace("-bundle.html", "");
  const group = `size-control:${shell}:${bundle}`;
  const buildDir = path.join(BUILDS_DIR, `${shell}-${bundle}`);

  gulp.task(`${group}:mkdir`, ["size-control:clean"], () => {
    return fs.mkdirp(path.join(buildDir, "src"));
  });

  gulp.task(`${group}:link-bower-components`, [`${group}:mkdir`], () => {
    return fs.symlink(
      "../../bower_components",
      path.join(buildDir, "bower_components")
    );
  });

  gulp.task(`${group}:copy-sources`, [`${group}:mkdir`], () => {
    return Promise.all([
      fs.copyFile(
        path.join(__dirname, "index.html"),
        path.join(buildDir, "index.html")
      ),
      fs.copyFile(
        path.join(__dirname, "shells", shellFileName),
        path.join(buildDir, "src", "app-shell.html")
      ),
      fs.copyFile(
        path.join(__dirname, "bundles", bundleFileName),
        path.join(buildDir, "src", "component-bundle.html")
      ),
      fs.copyFile(
        path.join(__dirname, "polymer.json"),
        path.join(buildDir, "polymer.json")
      )
    ]);
  });

  gulp.task(
    `${group}:polymer-build`,
    [`${group}:copy-sources`, `${group}:link-bower-components`],
    () => {
      return new Promise((resolve, reject) => {
        exec(
          "polymer build",
          {
            cwd: buildDir
          },
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          }
        );
      });
    }
  );

  gulp.task(`${group}:measure`, [`${group}:polymer-build`], () => {
    return builtBundleProcessor(
      shell,
      bundle,
      `${buildDir}/build/es6-bundled/src/component-bundle.html`
    );
  });

  return `${group}:measure`;
}
