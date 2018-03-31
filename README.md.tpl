# Vaadin Components Size Control

The table below shows the impact (in kB) that adding a single [Vaadin Component](https://vaadin.com/components) would have onto the effective app bundle size. It depends on whether or not the application already uses the [Polymer 2](https://www.polymer-project.org/) library (and if it does, then how much of Polymer is already in use). In addition to Vaadin Components, some Paper Elements are listed as well for comparison.


## Impact

{{table}}

_(last updated on {{updated_on}})_


## What is measured and how

The numbers in the table show how much the application bundle size will increase after importing a single Vaadin Component. This assumes that the application is built with the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) which is the recommended way for Polymer projects. All imports are bundled and minified, but not transpiled into ES5.

Each row in the table has three numbers:
 - **full Polymer in app**: size impact for an app that already uses the _entire_ Polymer 2 library

    In this scenario no dependencies that a component might have to the Polymer 2 library are counted into its impact.

 - **some Polymer in app**: size impact for an app that uses the most common parts of the Polymer 2 library

    In this scenario some Polymer 2 dependencies are counted into the component size impact, and some are excluded. See the list of the excluded dependencies in the `app-shell-some-polymer.html` file.

 - **no Polymer in app**: size impact for an app that does not use the Polymer 2 library

    This scenario shows the size impact of including a Vaadin Component into a non-Polymer application. All dependencies that a component has to the Polymer 2 library are counted into its size impact.


All numbers are in kilobytes (1 kB = 1000 bytes). The [polyfills](https://github.com/webcomponents/webcomponentsjs) for the Web Components APIs are not included into the measurement.


## Running the measurements locally

 - clone the repo: `git clone https://github.com/vlukashov/vaadin-components-size-control.git`
 - install NPM and Bower dependencies: `npm install`
 - run the `size-control` npm script: `npm run size-control`


## Why to run locally?

 - verify the results
 - measure the size impact of a different version of a component
 - measure the size impact for an app that uses a different subset of Polymer 2 features
 - measure the combined impact of a set of Vaadin Components
 - measure the size impact of another Polymer element
