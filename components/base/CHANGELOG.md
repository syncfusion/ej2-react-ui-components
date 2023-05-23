# Changelog

## [Unreleased]

## 21.2.6 (2023-05-23)

### Common

#### Bug Fixes

- `#I432022` - The issue with "Grid component triggers multiple requests on state change if the column does not have field property" has been resolved.

## 21.1.41 (2023-04-18)

### Common

#### Bug Fixes

- `#I451955` - The issue with "Script error thrown after removing the first tab" has been resolved.

## 21.1.38 (2023-04-04)

### Common

#### Bug Fixes

- `#I432022` - The issue with "Grid sends multiple requests if the `childGrid` has events" has been resolved.

## 21.1.37 (2023-03-29)

### Common

#### Bug Fixes

- `#I443045` - The issue with "Chart title is not updated on dynamic changes" has been resolved.
- `#I433083` - The issue with "Accordion content template value is not updated while using state variable" has been resolved.

## 20.4.54 (2023-03-14)

### Common

#### Bug Fixes

- The issue with "the content of other tab items being automatically removed when the first tab item is removed" has been resolved.

## 20.4.38 (2022-12-21)

### Common

#### Bug Fixes

- `#F174612` - The issue with the "React state change value is not reflected inside the `dialog` content template" has been resolved.

#### New Features

- `#I418318` - The option "to prevent the component from re-rendering while the state is being updated" has been provided.
- The new `Rating` component has been added to React.
- The `AppBar`, `Floating Action Button (FAB)`, `Mention`, `Message` and `Speed Dial` components have been developed to meet industry standards and are now marked production-ready.

#### Breaking Changes

- If you are using Syncfusion's React components without first registering a license, a license dialog will appear after a certain limit of usage, preventing further interaction in the application. Please make sure to register a valid license in order to continue using the Syncfusion React components without interruption.

## 20.3.47 (2022-09-29)

### Common

#### Bug Fixes

- The issue with the "dynamic value changes of the workDays property (Array type) in the Scheduler component" has been resolved.
- `#I398870` , `#I405154`, `#I406330` - The issue with the "React components are not mounting while using `useEffect` react hooks in the strict mode" has been resolved.

#### New Features

- `#I161617`, `#I346544` - Provided the React CDN file support for the `webpack` externals.

## 20.2.36 (2022-06-30)

### Common

#### New Features

- React sample browser is upgraded with React 18 version.
- Provided the TypeScript 4.7 compatible support for the React components.
- Provided the option to register the license key by using the `npx` command. Follow these steps to register the license using the `npx` command:

| The `npx` command |
|---|
| Install the Syncfusion packages from `npm`. |
| Add the license key either in the environment variable `SYNCFUSION_LICENSE` or in the `syncfusion-license.txt` text file. |
| Run the command `npx syncfusion-license activate` to automatically register the license. |

## 20.1.59 (2022-06-07)

### Common

#### Bug Fixes

- `#I381890` - "Script error occurred while using the routing in React 18 sample," issue has been resolved.

## 20.1.58 (2022-05-31)

### Common

#### Bug Fixes

- `#I366207` - Resolved the "Dashboard layout component crash while using cell spacing" issue in react component.

## 20.1.57 (2022-05-24)

### Common

#### Bug Fixes

- `#F173196` - The issue "`OnPropertyChange` is not triggered while the column length is not same" have been resolved.

## 20.1.55 (2022-05-12)

### Common

#### New Features

- `#I376880`, `#I376902`, `#F174796` - Added support to work with React 18 version.

#### Breaking Changes

- `IsLegacyTemplate` option has been stopped from this release to support React 18 support.

### Common

#### Bug Fixes

- `#I339589` - Resolved the `DropdownButton` issue with react component as target.

## 19.4.56 (2022-03-15)

### Common

#### Bug Fixes

- `#F165505` - Resolved the issue with Focus lost in input component each time `onchange` invoked.

## 19.4.55 (2022-03-08)

### Common

#### Bug Fixes

- `#I367058` - Resolved the script error when using `valueTemplate` and `headerTemplate` together in `Dropdownlist`.

## 19.4.53 (2022-02-22)

### Common

#### Bug Fixes

- `#I366476` - Resolved the issue with React `Dialog` content does not update when changing state.

## 19.4.52 (2022-02-15)

### Common

#### Bug Fixes

- `#I352651` - Styles not applied properly if it dynamically changed has been resolved.

## 19.4.47 (2022-01-25)

### Common

#### Bug Fixes

- `#F167610` - Resolved the Console error occurs when using a value and `valueTemplate` together.

## 19.4.43 (2022-01-18)

### Common

#### Bug Fixes

- `#I362528` - Resolved the peer dependency warning in higher React version

## 19.4.42 (2022-01-11)

### Common

#### Bug Fixes

- `#I339589` - Resolved the `DropdownButton` issue with react component as target.

## 19.1.67 (2021-06-08)

### Common

- `#F164392` - Resolved the issue with Value is not updated if we update the state in `useEffect()` hook for `Dropdownlist`.

- `#I324905` - Resolved the issue with `editTemplate` methods are reassigned to other columns while reordering and applying `setState`.

## 19.1.65 (2021-05-25)

### Common

- `#F165452` - Resolved the issue with destroy event while using toolbar template.

## 19.1.64 (2021-05-19)

### Common

- `#F165103` - Resolved the issue with Maximum call stack size exceeded" when updating state variable using `useEffect`.

## 19.1.57 (2021-04-20)

### Common

#### Bug Fixes

- `#I321145` - Resolved the issue with Data binding not working properly while changing values in complex array.

- `#F164536` - Resolved the Peer dependency warning issue.

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