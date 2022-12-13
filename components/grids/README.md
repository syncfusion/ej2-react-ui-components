# React Grid Component

The [React Data Grid](https://www.syncfusion.com/react-ui-components/react-grid?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm) component is used to display and manipulate tabular data with configuration options to control the way the data is presented and manipulated. It will pull data from a data source, such as array of JSON objects, `OData web services`, or DataManager binding data fields to columns. Also displaying a column header to identify the field with support for grouped records.

<p align="center">
  <a href="https://ej2.syncfusion.com/react/documentation/grid/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm">Getting Started</a>.
  <a href="https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/bootstrap5/grid/overview">Online demos</a>.
  <a href="https://www.syncfusion.com/react-components/react-grid?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm">Learn more</a>.
</p>

![React Grid Component](https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/react/react-datagrid.png)

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/syncfusion/syncfusion-trusted-companies.webp" alt="Bootstrap logo">
  </a>
</p>

## Setup

### Create a React Application

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup the applications.
To install **create-react-app** run the following command.

```bash
npm install -g create-react-app
```

To setup basic **React** sample, use following commands.

```bash
create-react-app quickstart --scripts-version=react-scripts-ts

cd quickstart

npm install

```

### Adding Syncfusion Grid package

All Syncfusion react packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. To install react grid package, use the following command.

```bash
npm install @syncfusion/ej2-react-grids --save
```

### Adding CSS references for Grid

Add CSS references needed for Grid in **src/App.css** from **../node_modules/@syncfusion** package folder.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-react-grids/styles/material.css";
```

### Add Grid Component

In **src/App.tsx** file, use the following code snippet to render the Syncfusion React Grid control and import **App.css** to apply styles to the grid:

```typescript
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import './App.css';

function App() {
    let data = [
        {'OrderID': 10248,'CustomerID': 'VINET', 'ShipCountry': 'France'},
        {'OrderID': 10249,'CustomerID': 'TOMSP', 'ShipCountry': 'Germany'},
        {'OrderID': 10250,'CustomerID': 'HANAR', 'ShipCountry': 'Brazil' },
        {'OrderID': 10251,'CustomerID': 'VICTE', 'ShipCountry': 'France'}
        ];
        
    return <GridComponent dataSource={data}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID'/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;
```

## Supported frameworks

Grid component is also offered in following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Showcase samples

* Loan Calculator - [Source](https://github.com/syncfusion/ej2-showcase-react-loan-calculator), [Live Demo](https://ej2.syncfusion.com/showcase/react/loancalculator/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/default)

## Key features

* [Data sources](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/local-binding) - Bind the Grid component with an array of JSON objects or DataManager.
* [Sorting and grouping](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/grouping) - Supports n levels of sorting and grouping.
* [Filtering](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/filtering) - Offers filter UI such as filter bar, menu, excel and checkbox at each column to filter data.
* [Paging](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/paging) - Provides the option to easily switch between pages using the pager bar.
* [Editing](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/normaledit) - provides the options for create, read, update, and delete operations.
* Columns - The column definitions are used as the dataSource schema in the Grid. This plays a vital role in rendering column values in the required format.
  * [Reordering](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/reorder) - Allows you to drag any column and drop it at any position in the Grid’s column header row, allowing columns to be repositioned.
  * [Column chooser](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/column-chooser) - The column chooser provides a list of column names paired with check boxes that allow the visibility to be toggled on the fly.
  * [Resizing](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/column-resizing) - Resizing allows changing column width on the fly by simply dragging the right corner of the column header.
  * [Freeze](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/frozen-rows) - Columns and rows can be frozen to allow scrolling and comparing cell values.
  * [Cell spanning](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/column-spanning) - Grid cells can be spanned based on the preferred criteria.
  * [Foreign data source](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/foreign-key) - This provides the option to show values from external or lookup data sources in a column based on foreign key/value mapping.
  * [Cell styling](https://ej2.syncfusion.com/react/documentation/grid/how-to/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#customize-column-styles) - Grid cell styles can be customized either by using CSS or programmatically.
* [Selection](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/selection) - Rows or cells can be selected in the grid. One or more rows or cells can also be selected by holding Ctrl or Command, or programmatically.
* [Templates](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/column-template) - Templates can be used to create custom user experiences in the grid.
* [Aggregation](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/aggregate-default) - Provides the option to easily visualized the Aggregates for column values.
* [Context menu](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/context-menu) -The context menu provides a list of actions to be performed in the grid. It appears when a cell, header, or the pager is right-clicked.
* [Clipboard](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/clipboard) - Selected rows and cells can be copied from the grid
* [Export](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#/material/grid/default-exporting) - Provides the options to Export the grid data to Excel, PDF, and CSV formats.
* [RTL support](https://ej2.syncfusion.com/react/documentation/grid/global-local/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#right-to-left---rtl) - Provides a full-fledged right-to-left mode which aligns content in the Grid component from right to left.
* [Localization](https://ej2.syncfusion.com/react/documentation/grid/global-local/?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm#localization)) - Provides inherent support to localize the UI.

## Support

Product support is available through following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-react-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/react?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/grids/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion’s licensed software, including this component, is subject to the terms and conditions of Syncfusion's [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [React UI controls](https://www.syncfusion.com/react-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-react-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-grid-npm) for more info.

&copy; Copyright 2022 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.