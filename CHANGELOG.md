<a name="2.6.0"></a>
# [2.6.0](https://github.com/ovh-ux/ovh-ui-angular/compare/v2.5.3...v2.6.0) (2018-03-13)


### Bug Fixes

* **oui-criteria-adder:** remove errors ([212f064](https://github.com/ovh-ux/ovh-ui-angular/commit/212f064))
* **oui-criteria-adder:** remove form validation ([d78a894](https://github.com/ovh-ux/ovh-ui-angular/commit/d78a894))
* **oui-criteria-adder:** remove value on submit ([7302c4f](https://github.com/ovh-ux/ovh-ui-angular/commit/7302c4f))
* **oui-criteria-adder:** rename condition for operator ([d4d57ac](https://github.com/ovh-ux/ovh-ui-angular/commit/d4d57ac))
* **oui-dropdown:** allow to close dropdown from outside ([1f42886](https://github.com/ovh-ux/ovh-ui-angular/commit/1f42886))
* **oui-dropdown:** allow to close with click on a submit ([af17cab](https://github.com/ovh-ux/ovh-ui-angular/commit/af17cab))
* **oui-dropdown:** fix aria-expanded attribute and close with escape ([fa57081](https://github.com/ovh-ux/ovh-ui-angular/commit/fa57081))
* **oui-dropdown:** make closing rules intelligent ([3884a86](https://github.com/ovh-ux/ovh-ui-angular/commit/3884a86))
* **oui-dropdown:** remove close by event ([d50529b](https://github.com/ovh-ux/ovh-ui-angular/commit/d50529b))


### Features

* add 'removed' callback parameter ([a25784f](https://github.com/ovh-ux/ovh-ui-angular/commit/a25784f))
* **oui-chips:** add oui-chips component ([02999dc](https://github.com/ovh-ux/ovh-ui-angular/commit/02999dc))
* **oui-criteria-adder:** add oui-criteria-adder component ([1aa3c8b](https://github.com/ovh-ux/ovh-ui-angular/commit/1aa3c8b))
* **oui-criteria-container:** add new component ([7beac6f](https://github.com/ovh-ux/ovh-ui-angular/commit/7beac6f))
* **oui-dropdown:** add persistent attribute ([bc1c4f4](https://github.com/ovh-ux/ovh-ui-angular/commit/bc1c4f4))
* **oui-modal:** implement loading attribute ([9d33bd6](https://github.com/ovh-ux/ovh-ui-angular/commit/9d33bd6))
* **oui-radio-toggle-group:** create component ([16f180e](https://github.com/ovh-ux/ovh-ui-angular/commit/16f180e))
* **oui-search:** connect search to criteria container ([5448964](https://github.com/ovh-ux/ovh-ui-angular/commit/5448964))
* **oui-select:** add on-change to oui-select ([853509d](https://github.com/ovh-ux/ovh-ui-angular/commit/853509d))



<a name="2.5.3"></a>
## [2.5.3](https://github.com/ovh-ux/ovh-ui-angular/compare/v2.5.2...v2.5.3) (2018-03-07)


### Bug Fixes

* **oui-back-button:** fix button type ([4c70cd3](https://github.com/ovh-ux/ovh-ui-angular/commit/4c70cd3))
* **oui-form-actions:** fix buttons types ([3a16414](https://github.com/ovh-ux/ovh-ui-angular/commit/3a16414))
* **oui-modal:** fix button type ([7bf8f75](https://github.com/ovh-ux/ovh-ui-angular/commit/7bf8f75))
* **oui-select:** fix buttons types ([c656dbf](https://github.com/ovh-ux/ovh-ui-angular/commit/c656dbf))



<a name="2.5.2"></a>
## [2.5.2](https://github.com/ovh-ux/ovh-ui-angular/compare/v2.5.1...v2.5.2) (2018-03-06)



<a name="2.5.1"></a>
## [2.5.1](https://github.com/ovh-ux/ovh-ui-angular/compare/v2.5.0...v2.5.1) (2018-03-06)



<a name="2.5.0"></a>
# [2.5.0](https://github.com/ovh-ux/ovh-ui-angular/compare/v2.4.0...v2.5.0) (2018-03-05)


### Bug Fixes

* **oui-modal:** README error on-dismiss doc ([85d72ed](https://github.com/ovh-ux/ovh-ui-angular/commit/85d72ed))
* **ouiButton:** use addBooleanParameter ([d2f0e0a](https://github.com/ovh-ux/ovh-ui-angular/commit/d2f0e0a))


### Features

* **field:** add custom error message and ng-pattern support ([#109](https://github.com/ovh-ux/ovh-ui-angular/issues/109)) ([f26267c](https://github.com/ovh-ux/ovh-ui-angular/commit/f26267c))
* **oui-search:** add oui-search component ([97e9697](https://github.com/ovh-ux/ovh-ui-angular/commit/97e9697))
* **oui-select:** support string array for items attribute ([b9fc139](https://github.com/ovh-ux/ovh-ui-angular/commit/b9fc139))



<a name="2.4.0"></a>
# [2.4.0]

### Bug Fixes

- update menu header and active item for navbar
- hide empty sublink for navbar

### Features

- add textarea component
- add radio-group component
- manage textarea and select errors in field component

<a name="2.3.0"></a>
# [2.3.0]

### Bug Fixes

- update navbar template for internal menus
- prevent datagrid to render empty cell when template contains only white spaces

### Features

- add title to existing back-button component
- add a toggler-links attribute to navbar
- add select component

<a name="2.2.0"></a>
# [2.2.0]

### Bug Fixes

- prevent useless calls to row-loader on datagrid
- close the notification menu when clicked on navbar
- fix transition slide on navbar
- avoid sorting if property attribute is not set on datagrid column

### Features

- add field component
- add modal component
- add required attribute on checkbox
- add spinner between page changes on datagrid
- add disabled attribute to disable item on action-menu

<a name="2.1.0"></a>
# [2.1.0]

### Features

- add navbar component

<a name="2.0.2"></a>
# [2.0.2]

### Bug Fixes

- fix unwanted properties on component tags (e.g. `aria-label`, `id`, `name`, ...)

<a name="2.0.1"></a>
# [2.0.1]

### Bug Fixes

- **oui-datagrid:** handle `data-` prefixes on `oui-column`
- **oui-datagrid:** add scope context to process header titles

<a name="2.0.0"></a>
# [2.0.0]

### BREAKING CHANGES
- consider `ovh-ui-kit` as a peer dependency instead of a dependency
- **oui-checkbox:** no `oui-checkbox-label` and `oui-checkbox-description` transcludes anymore
- **oui-checkbox:** modifiers no more supported (big and thumbnails)
- **oui-radio:** no `oui-radio-label` and `oui-radio-description` transcludes anymore
- **oui-radio:** modifiers no more supported (big and thumbnails)
- **oui-message:** default aria-label removed for close button
- **oui-message:** `message`, `dismissable` and `on-dismiss` attributes removed
- **oui-spinner:** rename `oui-loader` to `oui-spinner`
- **oui-spinner:** no more `align` and `inline` attributes

### Features
- indeterminate state support on `oui-checkbox`
- use OVH's eslint config

List of new components:
- `oui-button`
- `oui-back-button`
- `oui-numeric`
- `oui-dropdown`
- `oui-action-menu`
- `oui-tooltip`
- `oui-pagination`
- `oui-datagrid`

### Bug Fixes
- can run `karma` and `karma:watch` commands on Windows

<a name="1.1.0"></a>
# [1.1.0]

### Features

- loader component
