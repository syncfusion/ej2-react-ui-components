# Changelog

## [Unreleased]

## 30.1.42 (2025-07-29)

### Pivot Table

#### Bug Fixes

- `#I741630` - The fields in the pivot field list treeview will now be organized correctly according to the datasource order when the `defaultFieldListOrder` property is set to `None` during the `load` event in the pivot table.
- `#I747426` - The pivot table will now export correctly as an Excel file when using the server-side engine.

## 30.1.40 (2025-07-15)

### Pivot Table

#### Bug Fixes

- `#I740338` - The issue with sub-totals not rendering correctly when virtualization is enabled in the pivot table has been resolved.

## 30.1.39 (2025-07-08)

### Pivot Table

#### Bug Fixes

- `#I734750` - The pivot table will now be exported correctly as a PDF document when the tabular layout is enabled.
- `#I734750` - The pivot table cells will now render correctly without any misalignment when the tabular layout is enabled.
- The primary X-axis border can now be used to modify the multi-level labels border of the pivot chart.
- Users can now choose to show or hide subtotals when exporting the pivot table to Excel pivot format.
- The grouping bar buttons will now display correctly when virtualization is enabled in the pivot table.

## 30.1.37 (2025-06-25)

### Pivot Table

#### Bug Fixes

- `#I733782` - The drill-through popup will now display the correct value header and value when the value field caption contains parentheses in the pivot table.

#### Features

- Support has been added for performing value sorting simultaneously on both the row and column axes, independent of the value axis. This enhancement allows for more flexible and accurate data analysis across dimensions. Explore the [demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/value-sorting.html) here.
- Support has been introduced for exporting the pivot table as a native Excel PivotTable, preserving the pivot structure in the exported file. Users can continue interacting with and customizing the pivot data directly within Excel. Explore the [demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/pivot-table-exporting.html) here.
- Support has been added for including headers and footers during Excel exporting with the server-side engine in the pivot table. Explore the [demo](https://ej2.syncfusion.com/demos/#/tailwind3/pivot-table/server-side-aggregation.html) here.

## 29.1.33 (2025-03-25)

### Pivot Table

#### Bug fixes

- `#F196192` - The 'Hiding Subtotals' option will now work correctly in the pivot table when it is rendered with a static field list.
- This release enhances the usability and stability of the Pivot Table by addressing issues in the following modules: Column Customization, Pivot Chart, Drill-Through, Exporting, Grouping, Calculated Field, Value Sorting, and Virtual Scrolling.

#### Features

- The classic (tabular) layout option is now compatible with the following features: 'Grouping', 'Hiding Subtotals', and 'Exporting'.
- The pivot table now includes the option to set a minimum width for the component, similar to the minimum height property.

## 28.1.33 (2024-12-12)

### Pivot Table

#### Bug fixes

- `#I657448` - Double-clicking the 'No records to display' cell for drill-through in the pivot table will no longer trigger an error.
- `#I655109` - The calculated field option will now work properly with the 'Defer Layout Update' option enabled in the pivot table when using the server-side engine.
- `#I661608` - The pivot button will now show the proper text in the static field list when the 'showAggregationOnValueField' property is disabled.
- `#I653425` - The pivot table will now be rendered properly when changing the aggregation type dynamically using the 'Value field settings' popup for a value field name that begins with numeric text.

#### Features

- The classic (tabular) layout support has been added, allowing the pivot table to display in a traditional format with separate columns for row headers, offering a more detailed and organized table structure. Explore the [demo](https://ej2.syncfusion.com/demos/#/fluent2/pivot-table/tabular-layout.html) here.

## 27.1.48 (2024-09-18)

### Pivot Table

#### Features

- `#I517509` - The conditional formatting UI now includes an option that allows the user to apply conditional formatting to the grand total values dynamically. Check out the [demo](https://ej2.syncfusion.com/demos/#/fluent2/pivot-table/conditional-formatting.html) here.

#### Bug fixes

- `#I625045` - The pivot table will now be rendered properly while dynamically updating the `dataSource` and `pageSettings`.

### PivotTable

#### Features

- `#I517509` - The conditional formatting UI now includes an option that allows the user to apply conditional formatting to the grand total values dynamically. Check out the [demo](https://ej2.syncfusion.com/react/demos/#/fluent2/pivot-table/conditional-formatting) here.

## 26.1.35 (2024-06-11)

### PivotTable

#### Bug fixes

- `#I581048` - We can now customize the headers before sending service requests when using a server-side pivot table.

## 25.1.35 (2024-03-15)

### PivotTable

#### Bug fixes

- `#I559899` - The grid and chart modules will now be properly destroyed when we switch views in the Angular Pivot Table.

#### New features

- `#I311046` - Added value sorting support to the OLAP cube connected pivot table, which allows to sort individual measures and their aggregated values in both ascending and descending order using code-behind or UI actions at runtime. Check out the [demo](https://ej2.syncfusion.com/demos/#/material3/pivot-table/olap.html) here.
- `#I538753` - Done optimization to improve pivot table rendering performance, when there are large number of fields in the bound data source.
- `#I550925` - Added support for selecting fields using node click in the pivot field list UI.
- Introduced single page mode, which allows only the current view page to be displayed during virtual scrolling operations when virtualization is enabled in the pivot table. It enhances the pivot table’s performance even more during initial rendering and when making UI actions like drill up/down, sorting, filtering, and so on. This is done by rendering only the rows and columns relevant to the current viewport for display in the pivot table. Check out the [demo](https://ej2.syncfusion.com/demos/#/material3/pivot-table/virtual-scrolling.html) here.

## 24.1.41 (2023-12-18)

### PivotTable

#### Bug fixes

- `#I527917` - The chart area border customization properties will now work properly with the pivot chart.

#### New features

- Introduced a new Syncfusion assembly [Syncfusion.Pivot.Engine](https://www.nuget.org/packages/Syncfusion.Pivot.Engine) is a .NET Core compatible alternative to the [Syncfusion.EJ2.Pivot](https://www.nuget.org/packages/Syncfusion.EJ2.Pivot) package that is used in a server side application to perform all Pivot calculations such as aggregation, filtering, sorting, grouping, and so on, and only the information to be displayed in the Pivot Table's viewport is passed to the client side (browser) via web service (Web API) rather than the entire data source.

## 23.2.6 (2023-11-28)

### PivotTable

#### Bug fixes

- `#I521739` - When no fields are bound to the column axis, the pivot table will now function properly when applying a filter.

## 23.2.5 (2023-11-23)

### PivotTable

#### Bug fixes

- `#I518410` - The pivot table will now refresh properly while dynamically binding an empty data source via web API.

## 23.2.4 (2023-11-20)

### PivotTable

#### Bug fixes

- `#F185202` - When there are no fields in the value axis, the pivot table will now be rendered with the proper height.

#### New features

- `#I450857` - When virtualization is enabled for OLAP data, the Pivot Table will now support displaying with grand totals and sub-totals in row and column axes.
- `#I484186` - Added support for exporting the Pivot Chart to PDF document with header and footer.
- `#I490937` - When virtualization is enabled, the OLAP Pivot Table can now be exported as a PDF and Excel document with entire data.

## 23.1.44 (2023-11-07)

### PivotTable

#### Bug fixes

- `I515880` - The pivot table grouping bar actions will now work properly when invoking the refresh method dynamically.

## 23.1.41 (2023-10-17)

### PivotTable

#### Bug fixes

- The pivot table will now be exported as a PDF document when the export method is invoked without the `pdFExportProperties` parameter.

## 23.1.38 (2023-09-26)

### PivotTable

#### Bug fixes

- `F184045` - The pivot table can now be exported as Excel with conditional formatting.
- `I500613` - When an OLAP cube dimension member with a special character is used, the pivot table now works properly.
- `I496328` - Filtering is now applied properly in the pivot table when the `showNoDataItems` option is enabled.
- `I474787` - The pivot table will now be properly displayed while scrolling in MAC with the virtualization option enabled.

## 23.1.36 (2023-09-15)

### PivotTable

#### Breaking Changes

- The skeleton (aka, HTML) of the pivot table has been restructured. Previously, the pivot table displayed frozen row headers and values data in a two-table manner. It has been simplified to one table. The appearance of the horizontal scrollbar has changed as the row headers were frozen using the CSS attributes. However, the pivot table's appearance will remain unchanged as the prior version.

- Because the DOM structure of the pivot table has changed, the following classes included elements have been removed and can now be identified using the classes listed below.

- The frozen and moveable header elements have now been identified within the `e-gridheader` element using the class names shown below.

| Previous | Now | Description |
|---|---|---|
| `e-frozenheader > e-table > th.e-headercell` | `e-table > th.e-leftfreeze.e-headercell` | Element defining the frozen column header. |
| `e-movableheader > e-table > th.e-headercell` | `e-table > th.e-unfreeze.e-headercell` | Element defining the moveable column header. |

- The frozen and moveable content elements have now been identified within the `e-gridcontent` element using the class names shown below.

| Previous | Now | Description |
|---|---|---|
| `e-frozencontent > e-table > th.e-rowcell` | `e-table > th.e-leftfreeze.e-rowcell` | Element defining the frozen content (aka, row headers). |
| `e-movablecontent > e-table > th.e-rowcell` | `e-table > th.e-unfreeze.e-rowcell` | Element defining the moveable content (aka, values). |

## 22.1.34 (2023-01-21)

### Pivot Table

#### New Features

- `#F165214` - Provided paging support in server side engine that allows to break and display large amounts of data page by page.
- Provided the role option that allows access to restricted cube information such as measures, dimensions, hierarchy, and more when a SSAS OLAP cube is bound to the pivot table.

#### Breaking Changes

- The property type `PivotValues` has been changed from `IPivotValues` to `IAxisSet[][]`.

| Property Name | Description | Previous Type | Current Type |
|---|---|---|---|
| `pivotValues` | It holds the collection of cell information that has been populated from the engine on the basis of the given pivot report to render the component as table and chart. | `IPivotValues` | `IAxisSet[][]` |

## 20.4.38 (2022-12-21)

### Pivot Table

#### Bug Fixes

- `#I423050` - Filter state will now be properly maintained in the member editor.
- `#I420253` - When virtual scrolling is enabled, the pivot table will now scroll properly.
- Number formatting is now applied properly to row and column headers in the pivot table.

#### New Features

- `#I347303`, `#I400764`, `#F172939` - Provided support for displaying row and column sub-totals at the top or bottom of the header group in the pivot table.
- `#I310709`, `#I346859` - Provided support to display pivot chart's series for multiple measures on a single y-axis.
- `#I398184` - The pivot table now supports customising the size of PDF document while exporting.
- `#I305545` - The pivot table now allows you to export both the table and the chart to a single PDF document.

#### Breaking Changes

- The `chartSettings.showMemberSeries` property is deprecated and will no longer to be used. Use `chartSettings.showPointColorByMembers` to achieve the same.

Previous | Now |
 ---  | ---  |
`showMemberSeries` | `showPointColorByMembers`

- The `chartExport` method parameters for the pivot table have now been changed.

**Previous**

Parameter | Type | Description |
 ---  | ---  | --- |
type | `ExportType` | Defines the export type.
fileName | string | Defines file name of export document.
orientation | `PdfPageOrientation` | Defines the page orientation on pdf export(0 for Portrait mode, 1 for Landscape mode).
width | number | Defines width of the export document.
height | number | Defines width of the export document.

**Now**

Parameter | Type | Description |
 ---  | ---  | --- |
type | `ExportType` | Defines the export type.
`pdfExportProperties` | `PdfExportProperties` | Allows to define the chart's export properties such as file name, orientation, width and height.
`isMultipleExport` | boolean | Allows to export multiple tables and charts into a single PDF document.
`pdfDoc` | Object | Allows the export of an external PDF document along with current PDF document.
`isBlob` | boolean | Allows the PDF document to be saved as blob data.

## 20.3.59 (2022-11-29)

### Pivot Table

#### Bug Fixes

- `#I405590` - The pivot table will now properly refresh while performing value sorting with the grouping bar and autofit enabled.

- `#I420612` - The pivot table will now be rendered properly while switching between reports in the toolbar.

- `#F420612` - The pivot table's alphanumeric sorting will now works properly.

## 20.3.57 (2022-11-15)

### Pivot Table

#### Bug Fixes

- `#I405590` - The pivot table will now properly refreshed while performing value sorting with autofit enabled.

#### New Features

- `#I395302` - When using a server-side engine, the aggregated values of the pivot table will now be customized via the controller.

## 20.3.50 (2022-10-18)

### Pivot Table

#### Bug Fixes

- The `drillthrough` feature now works properly with alphanumeric data.

## 20.3.49 (2022-10-11)

### Pivot Table

#### Bug Fixes

- `#I408669` - Number formatting is now applied properly to row and column headers in the pivot table.
- `#I405681` - Pivot table cell values are now properly exported as PDF document based on the text align property.

## 20.3.47 (2022-09-29)

### Pivot Table

#### Bug Fixes

- `#I395797` - Text wrap is now properly applied in the pivot table.
- `#I400397` - When using server-side engine, row headers are now displayed correctly based on their level in the pivot table.
- `#I395797` - The grand totals position in the pivot table now works properly when using server-side engine.
- `#I405131` - The tooltip content is now properly displayed in the pivot table.
- `#I397110` - The pivot table will now properly export to Excel format even if it contains hidden columns.
- `#I405326` - The value sort icon is now properly displayed in the pivot table.

#### New Features

- `#I311235` - The pivot table now exports to PDF/CSV as a blob object with virtual scrolling enabled.
- `#I311235` - With a relational datasource, field list treeview can now be displayed in a hierarchical manner.
- `#I281131`, `#I351494`, `#F174212` - Provided paging support that allows to break and display large amounts of data page by page, improving the overall rendering performance of the pivot table.
- `#I369101` - When multiple axes are enabled, the pivot chart series can now be displayed based on members in all chart areas.

## 20.2.43 (2022-08-08)

### Pivot Table

#### Bug Fixes

- `#I390649` - When virtual scrolling is enabled, the pivot table now properly refreshed while performing value sorting.

#### New Features

- `#I364830` - Improved server-side engine performance. As a result, pivot table can now render up to 3 million records without any issues.
- `#I382580` - The calculated field UI now has a "Format" dropdown option for relational data source.

## 20.2.39 (2022-07-19)

### Pivot Table

#### Bug Fixes

- `#I389665` - The pivot table can now be rendered properly while applying date grouping.
- `#I389889` - The class names in the pivot table are properly updated for the sub-total columns.

## 20.2.38 (2022-07-12)

### Pivot Table

#### Bug Fixes

- The selection is now properly working when using the selection mode of the pivot table.
- The engine population events are now properly triggered during virtual scrolling.

## 20.2.36 (2022-06-30)

### Pivot Table

#### Bug Fixes

- `#I387410` - The pivot table with OLAP cube can now render properly with calculated fields when virtual scrolling is enabled.

#### New Features

- Provided support to search for a specific field in the field list UI.

## 20.1.61 (2022-06-21)

### Pivot Table

#### Bug Fixes

- `#I382188` - When there is only one record, inline editing for value fields with advanced aggregate types now works properly.

## 20.1.58 (2022-05-31)

### Pivot Table

#### Bug Fixes

- `#I380533` - When using value fields with advanced aggregate options, the pivot table can now be properly exported to Excel and CSV formats.

## 20.1.57 (2022-05-24)

### Pivot Table

#### Bug Fixes

- `#I378816` - When the defer layout update option is enabled, dataBound event is now restricted while clicking cancel option in the popup field list UI.
- `#F174968` - When virtual scrolling is enabled, the pivot table can now be rendered properly while perform member filtering.
- The pivot table's column selection is now working properly.

## 20.1.56 (2022-05-17)

### Pivot Table

#### Bug Fixes

- The pivot table can now be sorted properly with date type headers.

#### New Features

- The pivot table now has support for adding custom classes via 'cssClass' property.

## 20.1.55 (2022-05-12)

### Pivot Table

#### Bug Fixes

- `#I363090` - The previous cell selection can now be maintained while restricting the current selection in the pivot table's column axis using the cell selection event.
- `#I373754` - The pivot table can now be exported properly to Excel and CSV formats while using the virtual scrolling feature, with sub-totals hidden.
- `#I374945` - The pivot chart will now refresh properly with the specified height when switching from adaptive to desktop mode.

#### New Features

- `#F174296` - Members of a specific field are now sorted based on user-defined order in the Pivot Table's row and column axes.

## 20.1.48 (2022-04-12)

### Pivot Table

#### Bug fixes

- In the OLAP field list UI, calculated fields are now properly displayed.
- The pivot table now exports properly to excel format with string type values when virtual scrolling is enabled.

#### Features

- `#FB33029` - The calculated field can now be created without formatting by using the "None" option in the OLAP calculated field UI.

## 20.1.47 (2022-04-04)

### Pivot Table

#### Bug Fixes

- `#I366940` - When the defer layout update option is enabled, the field list UI will now properly refresh while drag and drop measures.
- `#I367463` - When virtual scrolling is enabled, the pivot table now properly refresh based on the specified height.
- In Angular, grouping will now work properly with the static field list.
- `#I370021` - While resizing, the pivot chart is now properly refreshed.

#### New Features

- Provided support to expand all members (aka, headers) in a specific field in the Pivot Table's row and column axes.
- Provided built-in option in toolbar UI, grand totals will now display either at the first or last position in the Pivot Table's row and column axes.

## 19.4.55 (2022-03-08)

### Pivot Table

#### Bug Fixes

- When virtual scrolling is enabled, the pivot table now properly refresh based on the specified height.

## 19.4.54 (2022-03-01)

### Pivot Table

#### Bug Fixes

- When the defer layout update option is enabled, the field list UI will now properly refresh while performing checkbox selection.

## 19.4.53 (2022-02-22)

### Pivot Table

#### Bug Fixes

- When changing the report dynamically using the toolbar UI options, the Pivot Chart is now properly displayed.
- `#I366940` - When defer layout update is enabled, measures are properly added to the field list UI.

## 19.4.52 (2022-02-15)

### Pivot Table

#### Bug Fixes

- Events to customize cell values using PivotEngine export are now working properly in Angular.

## 19.4.50 (2022-02-08)

### Pivot Table

#### Bug Fixes

- `#I359726`, `#I354750` - When using the virtual scrolling feature, the pivot table can now be exported properly to Excel and CSV formats.
- Even the value fields starts with the same unique name, the Pivot Table values are now properly displayed.
- `#I363972` - With the toolbar UI, the Pivot Chart is now refreshed properly while performing checkbox selection in the chart menu.

## 19.4.47 (2022-01-25)

### Pivot Table

#### Bug Fixes

- `#I362895` - The field list UI will now be refreshed properly when dragging a field using the `fieldDrop` event with defer layout update.

## 19.4.43 (2022-01-18)

### Pivot Table

#### Bug Fixes

- `#I346790` - The Pivot Table is now properly refreshed with virtual scrolling when using touch.

#### New Features

- `#I354750` - Provided events support to customize cell values in PivotEngine export.

## 19.4.42 (2022-01-11)

### Pivot Table

#### Bug Fixes

- `#I359726` - When exporting the Pivot Table to PDF format, styles can now be properly applied to the header and footer.
- `#I359726` - When exporting the Pivot Table to Excel format, the headers are now properly shown.

## 19.4.41 (2022-01-04)

### Pivot Table

#### Bug Fixes

- `#I340908` - In Firefox browser, the Pivot Table is now refreshed properly with virtual scrolling.

## 19.4.40 (2021-12-28)

### Pivot Table

#### Bug Fixes

- The Pivot Chart is now properly shown with the default value of the "zoomFactor" property.

## 19.4.38 (2021-12-17)

### Pivot Table

#### Bug Fixes

- `#I349396` - When the virtual scrolling feature is enabled, as well as when members are filtered, the Pivot Table can now be rendered properly.
- `#I340539` - In Angular, the bundle size for Pivot Table has been reduced.
- `#I347116` - With the toolbar UI, the Pivot Chart is now refreshed properly.
- `#I347116` - With the Pivot Chart's default settings, its labels are displayed properly.
- `#I348183` - While performing value sorting with a single measure, the Pivot Table will now be rendered properly.
- `#I348952` - In the pivot table, the tooltip for string fields is now properly displayed.
- `#F170928` - When using the virtual scrolling feature, the calculated field buttons with edit option inside grouping bar and field list layout are now properly displayed.
- `#F170654` - The caption in the grouping field buttons within the grouping bar and field list layout is now displayed properly.

#### New Features

- `#I295658`, `#I320675`, `#I329355`, `#F158271`, `#F158475` - Provided support to display summarized totals (grand totals) either at the first or last position in the Pivot Table's row and column axes.
- `#I327744` - Provided support to align text for specific column headers.
- `#F159996` - Provided action begin and complete events to identify UI actions in the Pivot Table such as drill down/up, value sorting, grouping bar and field list UI actions, and CRUD operations. If the UI actions do not achieve the desired result, the action failure event is triggered.

## 19.3.46 (2021-10-19)

### Pivot Table

#### Bug Fixes

- `#I345297` - While clicking the value sorting icon, the cell click event is now properly triggered.
- `#I342886` - The "Calculated Field" feature in the pivot table now works properly in Angular production mode.

## 19.3.44 (2021-10-05)

### Pivot Table

#### Bug Fixes

- `#F168308` - The pivot table can now be rendered properly with custom number formats.
- `#I339705` - When the virtual scrolling feature is used, the pivot table can now be rendered properly without an unnecessary horizontal scrollbar when the content does not require it.
- `#I341987` - The pivot table can now be rendered properly while perform filtering with OLAP data source.
- `#I342221` - The pivot table can now be rendered properly while applying date grouping through UI.
- The column headers are now displayed properly while perform resizing.
- `#I342221` - The pivot table can now be rendered properly while perform member filtering with an empty header.

#### New Features

- `#I300095` - Provided support to display measures at any desired positions in the column or row axis for relational data sources.

## 19.2.56 (2021-08-17)

### Pivot Table

#### New Features

- `#284641`,`#326945`,`#327746`,`#329355` - Through grid settings event, the pivot table's columns can now fit the widest cell’s content without wrapping.

## 19.2.55 (2021-08-11)

### Pivot Table

#### Bug Fixes

- `#I337487` - Now the field's caption can be changed dynamically using the value field settings pop-up.- `#F167449` - Now the fields panel has been refreshed properly with toolbar UI.

## 19.2.51 (2021-08-03)

### Pivot Table

#### Bug Fixes

- `#F166428` - Issue while resizing column with virtual scrolling in the pivot table has been resolved.
- `#336591`,`#337082` - When using the virtual scrolling feature, the pivot table columns are now properly displayed when scrolling horizontally.
- `#337082` - The pivot table is now properly displayed when scrolling horizontally while filtering is applied when using the virtual scrolling feature.

## 19.2.49 (2021-07-27)

### Pivot Table

#### Bug Fixes

- `#F167209` - The script error caused by box selection when the mouse is released over a pivot table cell has been resolved.
- `#331835` - The issue with calculated fields values in drill through retrieving inconsistent raw data has been resolved.
- The pivot chart can now be rendered properly with Blank headers in row fields.
- The pivot table can now be exported properly with zero values to excel file.

## 19.2.48 (2021-07-20)

### Pivot Table

#### Bug Fixes

- `#327131` - Now the number format issue for empty cells in excel exporting has been fixed.

## 19.2.46 (2021-07-06)

### Pivot Table

#### Bug Fixes

- Border alignment issue in "Grouping Bar" UI has been fixed.

- `#310208` - The issue "Columns are shrink randomly" has been fixed.
- `#308576` - The "Field Mapping" feature now works on all of its properties.
- `#313362`,`#314555` - The issue in "Auto column resizing" feature has been fixed.
- `#313362` - The aggregation type "Percentage Of Parent Total" can now be formatted.

## 18.4.30 (2020-12-17)

### Pivot Table

#### Bug Fixes

- `#300162` - The pivot chart now works properly with height as a percentage.

- `#300142` - The script errors in the pivot chart and virtual scrolling combination have now been fixed.

## 18.2.56 (2020-09-01)

### Pivot Table

#### Bug Fixes

- `#289077` - Horizontal scrolling issue raised in the latest version of Firefox has been fixed.

## 18.2.55 (2020-08-25)

### Pivot Table

#### Bug Fixes

- The drill through pop-up now be showed the correct raw items when we filtering applied in fields in filter axis.
- The drill through pop-up can now be open when we bind measures in row axis.

- `#287170` - The number formatting can now be updated properly in excel exported document.

## 18.2.54 (2020-08-18)

### Pivot Table

#### Bug Fixes

- Now drill-through pop-up can be open when the measures are placed in row axis.

#### New Features

- `#260352`,`#276917`,`#280407`,`#281842` - Provided an option to do the aggregation in server side and the rendering part alone will be done in client side. It is to improve the performance while binding huge size of data from remote server.
- `#279727` - Provided support to sort the alphanumeric field members.
- `#F155279` - Provided an option to restrict the drill-through pop-up to display.
- `#281462`,`#282526`,`#287070` - Provided an option to edit the aggregated cells directly (inline editing) without opening editing pop-up.
- `#283107` - Provided template support in toolbar panel to create custom toolbar option.
- `#284800` - Introduced an event to get the edited raw data information after the editing operation.

## 18.2.44 (2020-07-07)

### Pivot Table

#### New Features

- `#233316`,`#234648`,`#247163` - The pivot chart in the Pivot Table now has these chart types: pie, doughnut, pyramid, and funnel.
- In addition to JSON, the pivot table now supports CSV data sources, as well.

## 18.1.44 (2020-04-14)

### Pivot Table

#### Bug Fixes

- `#266106` - Improved the data refresh on virtual scrolling.

## 18.1.36-beta (2020-03-19)

### Pivot Table

#### Breaking Changes

The appearance of the pivot table component has been improved.

#### New Features

- `#259812` - Provision has been provided to display only the required aggregation types in their context menu.
- `#262927` - Now, the drill through and editing feature can be worked in pivot chart by clicking its series.
- `#263612` - Authentication option provided to access the OLAP Cube while connecting it in a pivot table.
- `#151883` - Additional parameters are included in the cell template feature to distinguish each cells.
- Now, you can customize the each field buttons (show and hide the icons, restrict drag and drop operations) available in grouping bar and field list separately.
- Provision provided to customize the tooltip for both pivot table and pivot chart views.
- Formatting option included in the calculated field pop-up to format the calculated fields dynamically.
- Provision provided to display only the required chart types in its context menu available in toolbar panel.
- An option included in the chart types context menu to change the multiple axes option dynamically.
- An option included in the member editor to sort its members in a desired order.
- Provision provided to export the complete page when virtual scroll option is enabled.

## 17.4.39 (2019-12-17)

### Pivot Table

#### Bug Fixes

- `#254586` - The conditional formatting will no longer be applied in empty cells.
- The summarization text `of` in value buttons inside grouping bar and field list layout can be localized now.

#### New Features

- `#252636` - Provision provided to disable the scrollbars in pivot chart.
- `#250072` - Provision provided to group and separate the grouped headers through UI.

## 17.3.26 (2019-11-05)

### Pivot Table

#### Bug Fixes

- `#251642` – Now, the defer layout update option can be enabled or disabled dynamically through field list UI.
- `#251558` – Now, the pivot chart draws with the percent of height value.

- #248954 – Now, the pivot chart can show the result when date field in value axis.
- #248955 – Now, the pivot chart works with the aggregation type "Running Total".
- #251642 – Now, the defer layout update option can be enabled or disabled dynamically through field list UI.
- #251558 – Now, the pivot chart draws with the percent of height value.

#### New Features

- `#248131` – Provided the conditional expression support to create calculated field.
- `#251642` – The performance of virtual scrolling while adding or removing fields and moving fields to any axis is improved.

- #248131 – Provided the conditional expression support to create calculated field.
- #249412 – Provision provided to disable member filtering option in filtering UI.
- #248953, #250306 – Restricted control breaking while binding unavailable members in filter settings.
- #251642 – The performance of virtual scrolling while adding or removing fields and moving fields to any axis is improved.

## 17.3.9-beta (2019-09-20)

### Pivot Table

#### Bug Fixes

- #244842 – Field list icon will be now placed inside the pivot table when field list option isn't included in toolbar.
- The last column of the pivot table can be displayed in Excel exported page properly.

- #244991 – Now tooltip shows correct information after re-ordering columns in pivot table.
- #244557 – Sorting option can also be performed in grouping bar when defer layout update feature is enabled.

#### New Features

- #245423 – Provision provided to persist and reload the pivot report.
- Provided SSAS OLAP data source support.

- #245213 – Introduced an option to use spinner with custom template.
- #245423 – Provision provided to persist and reload the pivot report.
- Provided SSAS OLAP data source support.

## 17.2.28-beta (2019-06-27)

### Pivot Table

#### Breaking Changes

- The `dataSource` and `dataSource.data` properties has now been renamed to `dataSourceSettings` and `dataSourceSettings.dataSource` respectively.

#### New Features

- #229377 – The pivot chart which is bound with pivot table allows the user to drill down and drill up now individually.
- #144382 – Unnecessary scroll bars have been removed from pivot table component.

#### Bug Fixes

- #144352 – The fields can be added dynamically for Pivot Chart control.

## 17.1.47 (2019-05-14)

### Pivot Table

#### Bug Fixes

- #232925 - Grouping bar feature is now working fine with the combination of toolbar and pivot chart.

#### New Features

- #230489 – You can drill the pivot table headers based on the position.

- #227370 - Now, you can hide the fields from the pivot table field list data source.

## 17.1.38 (2019-03-29)

### Pivot Table

#### Bug Fixes

- Drill-down works properly for date formatted headers.

#### New Features

- Users can access grid functionalities in the drill-through pop-up.
- Option to always show the value header even with single value binding.
- Row header repeats on each page of the PDF document when exporting.
- Users can display the value zero as zero and empty cells with a custom value.
- Charts can be rendered against pivot table data independently, and users can modify their report dynamically using the field list.
- Toolbar support is provided to the pivot table, allowing users easy access to frequently used features.
- A grouping option is available for date and numbers fields.
- Users can customize or add custom templates to the Pivot Table cells.
- Cell selection allows users to select cells and access the selected cell information through the cell selection event.

## 17.1.32-beta (2019-03-13)

### Pivot Table

#### Bug Fixes

- Drill-down works properly for date formatted headers.

#### New Features

- Users can access grid functionalities in the drill-through pop-up.
- Option to always show the value header even with single value binding.
- Row header repeats on each page of the PDF document when exporting.
- Users can display the value zero as zero and empty cells with a custom value.
- Charts can be rendered against pivot table data independently, and users can modify their report dynamically using the field list.
- Toolbar support is provided to the pivot table, allowing users easy access to frequently used features.
- A grouping option is available for date and numbers fields.
- Users can customize or add custom templates to the Pivot Table cells.
- Cell selection allows users to select cells and access the selected cell information through the cell selection event.

## 17.1.1-beta (2019-01-29)

### Pivot Grid

#### New Features

- F141747- Always shows value caption in headers even having single measure.
- Cell selection now allows to select cells as row and column wise.
- Shows the filter state in the fields of filter axis.

## 16.4.42 (2018-12-14)

### Pivot Grid

#### Bug Fixes

- 219623 - Text in the field list tab gets completely displayed in mobile layout.
- 219625 - Scrolling works properly in touch mode when virtual scroll option is enabled.
- 219625 - In mobile device, virtual scrolling sample is loaded properly from the sample browser.
- 219625 - In mobile device, last column cells are displayed properly.

#### New Features

- Raw items in the control can be edited and updated at runtime.
- Provided support to list the raw items for a particular value cell.
- In the filter pop-up, provided support to set the limit the display field values and search option for refining the values from large data.
- Provided hyperlink support to perform any custom operation programmatically.
- Defer update option has been provided to refresh the control on-demand and not during every UI interaction for better performance.
- Provided support to show or hide subtotals and grand totals for rows and columns.
- More aggregation types like – Distinct Count, Product, Running Totals, Percentage of Column Total, Percentage of Parent Column Total, Population Var are added.

## 16.4.40-beta (2018-12-10)

### Pivot Grid

#### Bug Fixes

- 219623 - Text in the field list tab gets completely displayed in mobile layout.
- 219625 - Scrolling works properly in touch mode when virtual scroll option is enabled.
- 219625 - In mobile device, virtual scrolling sample is loaded properly from the sample browser.
- 219625 - In mobile device, last column cells are displayed properly.

#### New Features

- Raw items in the control can be edited and updated at runtime.
- Provided support to list the raw items for a particular value cell.
- In the filter pop-up, provided support to set the limit the display field values and search option for refining the values from large data.
- Provided hyperlink support to perform any custom operation programmatically.
- Defer update option has been provided to refresh the control on-demand and not during every UI interaction for better performance.
- Provided support to show or hide subtotals and grand totals for rows and columns.
- More aggregation types like – Distinct Count, Product, Running Totals, Percentage of Column Total, Percentage of Parent Column Total, Population Var are added.

## 16.3.21 (2018-09-22)

### Pivot Grid

#### New Features

- 208354, 211758 — Value fields can be placed in row axis now.
- **Virtual scrolling** options have been provided to load large amounts of data with high performance.
- **Conditional formatting** support allows users to define conditions and format grid cells’ font, colour etc.
- **Label and value-based filtering** options are provided that work similar to Microsoft Excel.

## 16.3.17 (2018-09-12)

### Pivot Grid

#### New Features

- 208354, 211758 — Value fields can be placed in row axis now.
- **Virtual scrolling** options have been provided to load large amounts of data with high performance.
- **Conditional formatting** support allows users to define conditions and format grid cells’ font, colour etc.
- **Label and value-based filtering** options are provided that work similar to Microsoft Excel.

## 16.2.41 (2018-06-25)

### Pivot Grid

The pivot grid is a multi-dimensional data visualization component built on top of the relational data sources. The pivot report can be managed dynamically at runtime along with other capabilities like aggregation, filtering and sorting (field and value based).

- **Data Sources** - Binds the component with an array of JavaScript objects.
- **Filtering** - Allows user to view only specific/desired records in the component.
- **Sorting** - Both member and value sorting are supported. It’s allows user to order fields and values (column) either in ascending or descending order respectively.
- **Field List & Grouping Bar** - Supports UI interaction at runtime to dynamically change the report along with sorting, filtering and remove options.
- **Aggregation** - Provides built in aggregation types like sum, average, min, max and count.
- **Calculated Field** - Users can add new value field(s) to the report dynamically using this option.
- **Adaptive Rendering** - Adapts with optimal user interfaces for mobile and desktop form-factors, thus helping the user’s application to scale elegantly across all the form-factors without any additional effort.
- **Exporting** - Provides the option to exporting records to Excel, CSV and PDF formats.## 18.1.52 (2020-05-13)

### Pivot Table

#### Bug Fixes

- `#267962` - The parcel issue in the pivot table component has now been resolved.

## 17.1.49 (2019-05-29)

### Pivot Table

#### New Features

- #227467 - Now, null and undefined types data will not be included in aggregation. They will be displayed in the headers.
- #227370 - Now, you can hide the fields from the pivot table field list data source.

