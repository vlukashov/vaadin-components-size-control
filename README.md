# Vaadin Components Size Control

The table below shows the impact (in kB) that adding a single [Vaadin Component](https://vaadin.com/components) would have onto the effective app bundle size. It depends on whether or not the application already uses the [Polymer 2](https://www.polymer-project.org/) library (and if it does, then how much of Polymer is already in use).


## Impact

| Component                   | full Polymer in app | some Polymer in app | no Polymer in app |
|-----------------------------|--------------|--------------|------------|
| [vaadin-button][01]         | 22.2 kB      | 25.7 kB      | 78 kB      |
| [vaadin-checkbox][02]       | 17.5 kB      | 21 kB        | 73.3 kB    |
| [vaadin-combo-box][03]      | 110 kB       | 144 kB       | 211 kB     |
| [vaadin-context-menu][04]   | 32.5 kB      | 67.1 kB      | 134 kB     |
| [vaadin-date-picker][05]    | 111 kB       | 146 kB       | 213 kB     |
| [vaadin-dialog][06]         | 25.1 kB      | 59.8 kB      | 127 kB     |
| [vaadin-dropdown-menu][07]  | 68.1 kB      | 103 kB       | 170 kB     |
| [vaadin-form-layout][08]    | 21 kB        | 55.6 kB      | 122 kB     |
| [vaadin-grid][09]           | 154 kB       | 189 kB       | 256 kB     |
| [vaadin-icons][10]          | 246 kB       | 280 kB       | 347 kB     |
| [vaadin-item][11]           | 14.4 kB      | 17.2 kB      | 59 kB      |
| [vaadin-list-box][12]       | 14.7 kB      | 23.1 kB      | 64.9 kB    |
| [vaadin-notification][13]   | 19.7 kB      | 23.2 kB      | 70 kB      |
| [vaadin-ordered-layout][14] | 5.72 kB      | 8.47 kB      | 50.3 kB    |
| [vaadin-progress-bar][15]   | 15 kB        | 18.5 kB      | 60.3 kB    |
| [vaadin-radio-button][16]   | 18.8 kB      | 26.7 kB      | 79 kB      |
| [vaadin-split-layout][17]   | 17.5 kB      | 52.1 kB      | 119 kB     |
| [vaadin-tabs][18]           | 35 kB        | 69.7 kB      | 137 kB     |
| [vaadin-text-field][19]     | 41.3 kB      | 44.8 kB      | 86.6 kB    |
| [vaadin-upload][20]         | 50.7 kB      | 54.2 kB      | 118 kB     |
| [vaadin-core][21]           | 630 kB       | 665 kB       | 731 kB     |

[01]: https://github.com/vaadin/vaadin-button (see the <vaadin-button> repo on GitHub)
[02]: https://github.com/vaadin/vaadin-checkbox (see the <vaadin-checkbox> repo on GitHub)
[03]: https://github.com/vaadin/vaadin-combo-box (see the <vaadin-combo-box> repo on GitHub)
[04]: https://github.com/vaadin/vaadin-context-menu (see the <vaadin-context-menu> repo on GitHub)
[05]: https://github.com/vaadin/vaadin-date-picker (see the <vaadin-date-picker> repo on GitHub)
[06]: https://github.com/vaadin/vaadin-dialog (see the <vaadin-dialog> repo on GitHub)
[07]: https://github.com/vaadin/vaadin-dropdown-menu (see the <vaadin-dropdown-menu> repo on GitHub)
[08]: https://github.com/vaadin/vaadin-form-layout (see the <vaadin-form-layout> repo on GitHub)
[09]: https://github.com/vaadin/vaadin-grid (see the <vaadin-grid> repo on GitHub)
[10]: https://github.com/vaadin/vaadin-icons (see the <vaadin-icons> repo on GitHub)
[11]: https://github.com/vaadin/vaadin-item (see the <vaadin-item> repo on GitHub)
[12]: https://github.com/vaadin/vaadin-list-box (see the <vaadin-list-box> repo on GitHub)
[13]: https://github.com/vaadin/vaadin-notification (see the <vaadin-notification> repo on GitHub)
[14]: https://github.com/vaadin/vaadin-ordered-layout (see the <vaadin-ordered-layout> repo on GitHub)
[15]: https://github.com/vaadin/vaadin-progress-bar (see the <vaadin-progress-bar> repo on GitHub)
[16]: https://github.com/vaadin/vaadin-radio-button (see the <vaadin-radio-button> repo on GitHub)
[17]: https://github.com/vaadin/vaadin-split-layout (see the <vaadin-split-layout> repo on GitHub)
[18]: https://github.com/vaadin/vaadin-tabs (see the <vaadin-tabs> repo on GitHub)
[19]: https://github.com/vaadin/vaadin-text-field (see the <vaadin-text-field> repo on GitHub)
[20]: https://github.com/vaadin/vaadin-upload (see the <vaadin-upload> repo on GitHub)
[21]: https://github.com/vaadin/vaadin-core (see the <vaadin-core> repo on GitHub)

_(last updated on March 29th, 2018)_


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
