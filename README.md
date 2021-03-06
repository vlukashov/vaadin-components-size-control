# Vaadin Components Size Control

The table below shows the impact (in kB) that adding a single [Vaadin component](https://vaadin.com/components) would have onto the effective app bundle size. It depends on whether or not the application already uses the [Polymer 2](https://www.polymer-project.org/) library (and if it does, then how much of Polymer is already in use). In addition to Vaadin components, some Paper Elements are listed as well for comparison.

## Impact

| Component                        | Version      | full Polymer in app | some Polymer in app | no Polymer in app |
| -------------------------------- | ------------ | ------------------- | ------------------- | ----------------- |
| [vaadin-board][10]               | 2.0.0        | 8.8 kB              | 43.5 kB             | 110.3 kB          |
| [vaadin-button][11]              | 2.0.0        | 22.2 kB             | 25.6 kB             | 77.9 kB           |
| [paper-button][01]               | 2.1.0        | 38.7 kB             | 73.4 kB             | 140.2 kB          |
| [vaadin-charts][12]              | 6.0.1        | 401.7 kB            | 436.4 kB            | 503.2 kB          |
| [vaadin-checkbox][13]            | 2.0.0        | 17.5 kB             | 21 kB               | 73.3 kB           |
| [paper-checkbox][02]             | 2.0.3        | 44.3 kB             | 79 kB               | 145.8 kB          |
| [vaadin-combo-box][14]           | 4.0.1        | 112.2 kB            | 146.9 kB            | 213.7 kB          |
| [vaadin-context-menu][15]        | 4.0.0        | 34.1 kB             | 68.7 kB             | 135.6 kB          |
| [vaadin-core][16]                | 10.0.0-beta9 | 626.9 kB            | 661.5 kB            | 728.4 kB          |
| [vaadin-date-picker][17]         | 3.0.0        | 114.2 kB            | 148.8 kB            | 215.7 kB          |
| [vaadin-dialog][18]              | 2.0.0        | 26.5 kB             | 61.1 kB             | 128 kB            |
| [paper-dialog][03]               | 2.1.1        | 57.8 kB             | 92.5 kB             | 159.4 kB          |
| [vaadin-dropdown-menu][19]       | 1.0.0        | 69.8 kB             | 104.5 kB            | 171.3 kB          |
| [paper-dropdown-menu][04]        | 2.1.0        | 109.1 kB            | 143.8 kB            | 210.6 kB          |
| [vaadin-form-layout][20]         | 2.0.0        | 21 kB               | 55.7 kB             | 122.5 kB          |
| [vaadin-grid][21] (full)         | 5.0.3        | 154.4 kB            | 189.1 kB            | 256 kB            |
| [vaadin-grid][21] (lite)         | 5.0.3        | 124.4 kB            | 159.1 kB            | 225.9 kB          |
| [vaadin-icons][23]               | 4.1.4        | 245.5 kB            | 280.2 kB            | 347.1 kB          |
| [vaadin-item][24]                | 2.0.0        | 14.5 kB             | 17.2 kB             | 59.1 kB           |
| [vaadin-list-box][25]            | 1.0.1        | 14.6 kB             | 23 kB               | 64.8 kB           |
| [vaadin-notification][27]        | 1.0.0        | 20.4 kB             | 23.9 kB             | 70.7 kB           |
| [vaadin-ordered-layout][28]      | 1.0.1        | 5.8 kB              | 8.5 kB              | 50.3 kB           |
| [vaadin-password-field][29]      | 2.0.1        | 38.2 kB             | 41.7 kB             | 83.6 kB           |
| vaadin-pro                       | 10.0.0-beta9 | 408.5 kB            | 443.2 kB            | 510 kB            |
| [vaadin-progress-bar][31]        | 1.0.0        | 15.3 kB             | 18.8 kB             | 60.6 kB           |
| [paper-progress][07]             | 2.1.0        | 24 kB               | 58.6 kB             | 125.5 kB          |
| [vaadin-radio-button][32]        | 1.0.0        | 19 kB               | 26.8 kB             | 79.1 kB           |
| [paper-radio-button][08]         | 2.1.0        | 56.1 kB             | 90.8 kB             | 157.6 kB          |
| [vaadin-split-layout][33]        | 4.0.0        | 17.5 kB             | 52.1 kB             | 119 kB            |
| [vaadin-tabs][34]                | 2.0.0        | 35.2 kB             | 69.9 kB             | 136.7 kB          |
| [paper-tabs][09]                 | 2.1.0        | 66.2 kB             | 100.9 kB            | 167.7 kB          |
| [vaadin-text-area][35]           | 2.0.1        | 30.3 kB             | 33.8 kB             | 75.6 kB           |
| [vaadin-text-field][36]          | 2.0.1        | 26.8 kB             | 30.3 kB             | 72.1 kB           |
| [paper-input][05]                | 2.2.1        | 49.8 kB             | 84.5 kB             | 151.3 kB          |
| [vaadin-upload][37]              | 4.0.0        | 50.9 kB             | 54.4 kB             | 118.6 kB          |
| a login form (Vaadin components) |              | 60.4 kB             | 95.1 kB             | 161.9 kB          |
| a login form (Paper Elements)    |              | 85.7 kB             | 120.4 kB            | 187.2 kB          |

[01]: https://github.com/PolymerElements/paper-button.git "see the <paper-button> repo on GitHub"
[02]: https://github.com/PolymerElements/paper-checkbox.git "see the <paper-checkbox> repo on GitHub"
[03]: https://github.com/PolymerElements/paper-dialog.git "see the <paper-dialog> repo on GitHub"
[04]: https://github.com/PolymerElements/paper-dropdown-menu.git "see the <paper-dropdown-menu> repo on GitHub"
[05]: https://github.com/PolymerElements/paper-input.git "see the <paper-input> repo on GitHub"
[07]: https://github.com/PolymerElements/paper-progress.git "see the <paper-progress> repo on GitHub"
[08]: https://github.com/PolymerElements/paper-radio-button.git "see the <paper-radio-button> repo on GitHub"
[09]: https://github.com/PolymerElements/paper-tabs.git "see the <paper-tabs> repo on GitHub"
[10]: https://github.com/vaadin/vaadin-board.git "see the <vaadin-board> repo on GitHub"
[11]: https://github.com/vaadin/vaadin-button.git "see the <vaadin-button> repo on GitHub"
[12]: https://github.com/vaadin/vaadin-charts.git "see the <vaadin-charts> repo on GitHub"
[13]: https://github.com/vaadin/vaadin-checkbox.git "see the <vaadin-checkbox> repo on GitHub"
[14]: https://github.com/vaadin/vaadin-combo-box.git "see the <vaadin-combo-box> repo on GitHub"
[15]: https://github.com/vaadin/vaadin-context-menu.git "see the <vaadin-context-menu> repo on GitHub"
[16]: https://github.com/vaadin/vaadin-core.git "see the <vaadin-core> repo on GitHub"
[17]: https://github.com/vaadin/vaadin-date-picker.git "see the <vaadin-date-picker> repo on GitHub"
[18]: https://github.com/vaadin/vaadin-dialog.git "see the <vaadin-dialog> repo on GitHub"
[19]: https://github.com/vaadin/vaadin-dropdown-menu.git "see the <vaadin-dropdown-menu> repo on GitHub"
[20]: https://github.com/vaadin/vaadin-form-layout.git "see the <vaadin-form-layout> repo on GitHub"
[21]: https://github.com/vaadin/vaadin-grid.git "see the <vaadin-grid> repo on GitHub"
[23]: https://github.com/vaadin/vaadin-icons.git "see the <vaadin-icons> repo on GitHub"
[24]: https://github.com/vaadin/vaadin-item.git "see the <vaadin-item> repo on GitHub"
[25]: https://github.com/vaadin/vaadin-list-box.git "see the <vaadin-list-box> repo on GitHub"
[27]: https://github.com/vaadin/vaadin-notification.git "see the <vaadin-notification> repo on GitHub"
[28]: https://github.com/vaadin/vaadin-ordered-layout.git "see the <vaadin-ordered-layout> repo on GitHub"
[29]: https://github.com/vaadin/vaadin-text-field.git "see the <vaadin-password-field> repo on GitHub"
[31]: https://github.com/vaadin/vaadin-progress-bar.git "see the <vaadin-progress-bar> repo on GitHub"
[32]: https://github.com/vaadin/vaadin-radio-button.git "see the <vaadin-radio-button> repo on GitHub"
[33]: https://github.com/vaadin/vaadin-split-layout.git "see the <vaadin-split-layout> repo on GitHub"
[34]: https://github.com/vaadin/vaadin-tabs.git "see the <vaadin-tabs> repo on GitHub"
[35]: https://github.com/vaadin/vaadin-text-field.git "see the <vaadin-text-area> repo on GitHub"
[36]: https://github.com/vaadin/vaadin-text-field.git "see the <vaadin-text-field> repo on GitHub"
[37]: https://github.com/vaadin/vaadin-upload.git "see the <vaadin-upload> repo on GitHub"

_(last updated on May 6th, 2018)_

## What is measured and how

The numbers in the table show how much the application bundle size will increase after importing a single Vaadin component. This assumes that the application is built with the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) which is the recommended way for Polymer projects. All imports are bundled and minified, but not transpiled into ES5.

Each row in the table has three numbers:

* **full Polymer in app**: size impact for an app that already uses the _entire_ Polymer 2 library

  In this scenario no dependencies that a component might have to the Polymer 2 library are counted into its impact.

* **some Polymer in app**: size impact for an app that uses the most common parts of the Polymer 2 library

  In this scenario some Polymer 2 dependencies are counted into the component size impact, and some are excluded. See the list of the excluded dependencies in the `app-shell-some-polymer.html` file.

* **no Polymer in app**: size impact for an app that does not use the Polymer 2 library

  This scenario shows the size impact of including a Vaadin component into a non-Polymer application. All dependencies that a component has to the Polymer 2 library are counted into its size impact.

All numbers are in kilobytes (1 kB = 1000 bytes). The [polyfills](https://github.com/webcomponents/webcomponentsjs) for the Web Components APIs are not included into the measurement.

## Running the measurements locally

* clone the repo: `git clone https://github.com/vlukashov/vaadin-components-size-control.git`
* install NPM and Bower dependencies: `npm install`
* run the `size-control` npm script: `npm run size-control`

## Why to run locally?

* verify the results
* measure the size impact of a different version of a component
* measure the size impact for an app that uses a different subset of Polymer 2 features
* measure the combined impact of a set of Vaadin components
* measure the size impact of another Polymer element
