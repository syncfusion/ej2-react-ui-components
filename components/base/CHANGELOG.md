# Changelog

## [Unreleased]

## 19.1.67 (2021-06-08)

### Common

- `F164392` - Resolved the issue with Value is not updated if we update the state in `useEffect()` hook for `Dropdownlist`.

- `I324905` - Resolved the issue with `editTemplate` methods are reassigned to other columns while reordering and applying `setState`.

## 19.1.65 (2021-05-25)

### Common

- `F165452` - Resolved the issue with destroy event while using toolbar template.

## 19.1.64 (2021-05-19)

### Common

- `F165103` - Resolved the issue with Maximum call stack size exceeded" when updating state variable using `useEffect`.

## 19.1.57 (2021-04-20)

### Common

#### Bug Fixes

- `I321145` - Resolved the issue with Data binding not working properly while changing values in complex array.

- `F164536` - Resolved the Peer dependency warning issue.

## 18.3.35 (2020-10-01)

### Common

#### Bug Fixes

- Resolved the `delayUpdate` property type issue.

## 17.2.48-beta (2019-08-28)

### Common

#### Bug Fixes

- Resolved the Multiple child directive property changes issues after initial render.

## 17.2.28-beta (2019-06-27)

### Common

#### New Features

- Provided `react-final-form` support for Form components.

#### Bug Fixes

- Resolved template rendering issue on state changes.

## 16.4.52 (2019-02-05)

### Common

#### Bug Fixes

- Resolved the typing issue for `onclick` event.

## 16.4.45 (2019-01-02)

### Common

#### Bug Fixes

- Resolved the unwanted property change called on state changes issue.

## 16.2.41 (2018-06-25)

### Common

#### New Features

- Provided template support for Essential JS 2 React components.

#### Bug Fixes

- Fixed the element class name not changed on state or property changes.

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (`dist/global/index.d.ts`)

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.18-preview (2017-11-16)

### Common

#### Bug Fixes

- Removed duplicate injected modules on component refresh.

## 15.4.17-preview (2017-11-13)

Base library provide options to enable following React functionalities in Essential JS 2 components.

- Support for data binding.
- Tree shaking using `UglifyJS`.
