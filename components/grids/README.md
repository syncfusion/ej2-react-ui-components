# ej2-react-grids

The Grid component is used to display and manipulate tabular data with configuration options to control the way the data is presented and manipulated. It will pull data from a data source, such as array of JSON objects, `OData web services`, or [`DataManager`](http://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_campaign=grid) binding data fields to columns. Also displaying a column header to identify the field with support for grouped records.

![Grid](https://ej2.syncfusion.com/products/grid/readme.gif)

> This is a commercial product and requires a paid license for possession or use. Syncfusion’s licensed software, including this component, is subject to the terms and conditions of Syncfusion's EULA (https://www.syncfusion.com/eula/es/). To acquire a license, you can purchase one at https://www.syncfusion.com/sales/products or start a free 30-day trial here (https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community license (https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

## Setup

To install Grid and its dependent packages, use the following command

```sh
npm install @syncfusion/ej2-react-grids
```

## Resources

* [Getting Started](https://ej2.syncfusion.com/react/documentation/grid/getting-started.html?utm_source=npm&utm_campaign=grid)
* [View Online Demos](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid/#/material/grid/)
* [Product Page](https://www.syncfusion.com/react-ui-components/react-data-grid)

## Supported Frameworks

Grid component is also offered in following list of frameworks.

1. [Angular](https://github.com/syncfusion/ej2-angular-ui-components/tree/master/components/grids)
2. [VueJS](https://github.com/syncfusion/ej2-vue-ui-components/tree/master/components/grids)
3. [JavaScript (ES5)](https://www.syncfusion.com/javascript-ui-controls/grid)
4. [ASP.NET Core](https://www.syncfusion.com/aspnet-core-ui-controls/grid)
5. [ASP.NET MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls/grid)

## Key Features

* [**Data sources**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/local-binding) - Bind the Grid component with an array of JSON objects or DataManager.
* [**Sorting and grouping**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/grouping) - Supports n levels of sorting and grouping.
* [**Filtering**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/filtering) - Offers filter UI such as filter bar, menu, excel and checkbox at each column to filter data.
* [**Paging**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/paging) - Provides the option to easily switch between pages using the pager bar.
* [**Editing**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/normaledit) - provides the options for create, read, update, and delete operations.
* **Columns** - The column definitions are used as the dataSource schema in the Grid. This plays a vital role in rendering column values in the required format.
  * [**Reordering**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/reorder) - Allows you to drag any column and drop it at any position in the Grid’s column header row, allowing columns to be repositioned.
  * [**Column Chooser**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column-chooser) - The column chooser provides a list of column names paired with check boxes that allow the visibility to be toggled on the fly.
  * [**Resizing**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/columnresizing) - Resizing allows changing column width on the fly by simply dragging the right corner of the column header.
  * [**Freeze**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/frozenrows) - Columns and rows can be frozen to allow scrolling and comparing cell values.
  * [**Cell Spanning**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column-spanning) - Grid cells can be spanned based on the preferred criteria.
  * [**Foreign data source**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/foreign-key) - This provides the option to show values from external or lookup data sources in a column based on foreign key/value mapping.
  * [**Cell Styling**](https://ej2.syncfusion.com/react/documentation/grid/how-to.html?lang=typescript&utm_source=npm&utm_campaign=grid#customize-column-styles) - Grid cell styles can be customized either by using CSS or programmatically.
* [**Selection**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/selection) - Rows or cells can be selected in the grid. One or more rows or cells can also be selected by holding Ctrl or Command, or programmatically.
* [**Templates**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column-template) - Templates can be used to create custom user experiences in the grid.
* [**Aggregation**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/aggregate-default) - Provides the option to easily visualized the Aggregates for column values.
* [**Context menu**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/context-menu) -The context menu provides a list of actions to be performed in the grid. It appears when a cell, header, or the pager is right-clicked.
* [**Clipboard**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/clipboard) - Selected rows and cells can be copied from the grid
* [**Export**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=grid#/material/grid/defaultexporting) - Provides the options to Export the grid data to Excel, PDF, and CSV formats.
* [**RTL support**](https://ej2.syncfusion.com/react/documentation/grid/global-local.html?lang=typescript&utm_source=npm&utm_campaign=grid#right-to-left---rtl) - Provides a full-fledged right-to-left mode which aligns content in the Grid control from right to left.
* [**Localization**](https://ej2.syncfusion.com/react/documentation/grid/global-local.html?lang=typescript&utm_source=npm&utm_campaign=grid#localization)) - Provides inherent support to localize the UI.

## Support

Product support is available for through following mediums.

* Creating incident in Syncfusion [Direct-trac](https://www.syncfusion.com/support/directtrac/incidents?utm_source=npm&utm_campaign=grid) support system or [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_campaign=grid).
* New [GitHub issue](https://github.com/syncfusion/ej2-react-ui-components/issues/new).
* Ask your query in Stack Overflow with tag `syncfusion`, `ej2`.

## License

Check the license detail [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/license).

## Changelog

Check the changelog [here]((https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/grids/CHANGELOG.md)

&copy; Copyright 2019 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.
