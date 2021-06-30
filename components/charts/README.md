# ej2-react-charts
The Chart control is used to visualize the data with user interactivity and provides customizing options to configure the data visually. It can bind data from  datasource such as array of JSON objects , `OData web services` or
[DataManager](http://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_campaign=chart). All chart elements are rendered using Scalable Vector Graphics (SVG).

![Chart](https://ej2.syncfusion.com/products/images/chart/readme.gif)

> Chart is part of Syncfusion Essential JS 2 commercial program. License is available in two models Community and Paid. Please refer the license file for more information. License can be obtained by registering at [https://www.syncfusion.com/downloads/essential-js2](https://www.syncfusion.com/downloads/essential-js2?utm_source=npm&utm_campaign=chart)


## Setup
To install this package and its dependent packages, use the following command

```sh
npm install @syncfusion/ej2-react-charts
```

## Components included

Following list of components are available in the package
*	Chart - Feature-rich chart control with built-in support for over 25 chart types, technical indictors, trendline, zooming, tooltip, selection, crosshair and trackball. 
      *	[Getting Started](https://ej2.syncfusion.com/react/documentation/chart/)
      *	[View Online Demos](https://ej2.syncfusion.com/react/demos/#/material/chart/line)
      *	[Product Page](https://www.syncfusion.com/react-ui-components/charts/)
*	Accumulation Chart - Built-in support for Pie, Doughnut, Pyramid and funnel series type, to show the proportions and percentages between the categories.
      *	[Getting Started](https://ej2.syncfusion.com/react/documentation/accumulation-chart/getting-started.html)
      *	[View Online Demos](https://ej2.syncfusion.com/react/demos/#/material/chart/default-pie)
      *	[Product Page](https://www.syncfusion.com/react-ui-components/charts/)
*	Range Navigator - Interface for selecting a small range from a large collection. It is commonly used in financial dashboards to filter a date range for data that needs to be visualized. 
      *	[Getting Started](https://ej2.syncfusion.com/react/documentation/rangenavigator/getting-started.html)
      *	[View Online Demos](https://ej2.syncfusion.com/react/demos/#/material/rangenavigator/default)
      *	[Product Page](https://www.syncfusion.com/react-ui-components/range-selector/)

## Supported frameworks
 `Chart` components are available in following list of  
  
  1. [Angular](https://github.com/syncfusion/ej2-angular-ui-components/tree/master/components/charts?utm_source=npm&utm_campaign=chart)
  2. [Vue.js](https://github.com/syncfusion/ej2-vue-ui-components/tree/master/components/charts?utm_source=npm&utm_campaign=chart)
  3. [ASP.NET Core](https://aspdotnetcore.syncfusion.com/Chart/Line#/material)
  4. [ASP.NET MVC](https://aspnetmvc.syncfusion.com/Chart/Line#/material)
  5. [JavaScript (ES5)](https://www.syncfusion.com/javascript-ui-controls/charts/)

## Key Features

### Chart
   * **Chart Types** - Supports 25 interactive chart types starting from line to financial chart.
   * [**Data sources**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/local-data) - Bind the Chart component with an array of JSON objects or DataManager.
   * **Axis Types** - Supports multiple axes, and able to plot data with different data types such as numbers, datetime, logarithmic and string.
   * [**Multiple Pane**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/candle) - Provides the options to split the chart area into multiple pane.
   * [**Multilevel Labels**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/multi-level-label) - Organizes or groups data points in the chart based on different categories.
   * [**Axis Crossing**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/axis-crossing) - Provides the option to moves the origin of axis to any point within the chart area.
   * [**Smart Labels**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/smart-axis-labels) - Avoids overlapping of axis labels by trimming, wrapping, rotating, hiding, or placing them on multiple rows.
   * [**Stripline**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/stripline) - Provides options to highlight and annotate any region in chart.
   * [**DataLabel**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/datalabel-template) - Datalabel annotates data points with label to improve the readability of data.
   * [**Technical Indicators**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/adindicator) - Incidators allows to analyze the past and predict the future market trends based on historic price, volume, or open interest.
   * [**Trendlines**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/trend-lines) - Predicts the future trends with predetermined data for any measurements.
   * [**Error Bars**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/error-bar) - Provides options to handle any error or uncertainity in the measurements.
   * [**Empty Points**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/empty-point) - Provides options to handle missed data for the series elegantly with empty points.
   * [**Annotation**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/annotation) - Provides support to mark any specific area of interest by adding custom element.
   * [**Vertical Chart**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/vertical) - Provides options to invert the chart.
   * [**Zooming**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/zoom) - Provides options to visualize the data points under any region using rectangular selection, pinch, or mouse wheel zooming.
   * [**Crosshair & Trackball**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/crosshair) - Provides options to track data points closer to the mouse position or touch action.
   * [**Selection**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/range-selection) - Allows you to select any data point or subset of points using selection feature.
   * [**Export**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/export) - Provides the options to Export the chart to  PDF, SVG and CSV formats.
   * [**RTL support**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/inversed) - Provides a full-fledged right-to-left mode which aligns axis in the chart control from right to left.
   
### Accumulation Chart
   * **Chart Types** - Supports Pie, Doughnut, Pyramid and Funnel.
   * [**Smart Labels**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/smartlabels) - Supports arrangement of data labels smartly to avoid overlapping when the data point value falls in close range.
   * [**Grouping**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/grouping) - Supports grouping based on value and point count.
   * [**Semi-Pie**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/semi-pie) - Provides options to customize the start and end angle of the pie chart.
   * [**Legend**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/default-doughnut) - Provides options to display additional information about the points with the help of legend.
   * [**Tooltip**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/doughnut) - Supports interactive features like tooltip, selection and explode.
   * [**Empty Points**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/chart/pie-empty-point) - Provides options to handle missed data for the series elegantly with empty points.

### Range Navigator
   * **Data sources** - Supports local binding and remote data source.
   * [**Tooltip**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/rangenavigator/default) - Supports interactive features such as tooltip and animation.
   * [**Lightweight**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/rangenavigator/light-weight) - Supports light-weight Range navigator to load in mobile device.
   * [**Period Selector**](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_campaign=chart#/material/rangenavigator/period-selector-candle) - Provides options to select the data over the custom period.
   * **Axis Types** - Supports multiple axis and series types to plot the data.

## Support
   Product support is available for through following mediums.

   * Creating incident in Syncfusion [Direct-trac](https://www.syncfusion.com/support/directtrac/incidents?utm_source=npm&utm_campaign=chart) support system or [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_campaign=chart).
   * New [GitHub issue](https://github.com/syncfusion/ej2-react-ui-components/issues/new).
   * Ask your query in Stack Overflow with tag `syncfusion`, `ej2`. 

## License

Check the license detail [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/license)

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/charts/CHANGELOG.md)

© Copyright 2019 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.