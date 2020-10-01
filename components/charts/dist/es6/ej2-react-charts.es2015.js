import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { AccumulationChart, BulletChart, Chart, RangeNavigator, Smithchart, Sparkline, StockChart } from '@syncfusion/ej2-charts';

/**
 * `SeriesDirective` directive represent a series of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective></SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
class SeriesDirective extends ComplexBase {
}
SeriesDirective.moduleName = 'series';
SeriesDirective.complexTemplate = { 'dataLabelTemplate': 'dataLabel.template' };
class SeriesCollectionDirective extends ComplexBase {
}
SeriesCollectionDirective.propertyName = 'series';
SeriesCollectionDirective.moduleName = 'seriesCollection';

/**
 * `TrendlineDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective>
 * <TrendlinesDirective>
 * <TrendlineDirective></TrendlineDirective>
 * </TrendlinesDirective>
 * </SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
class TrendlineDirective extends ComplexBase {
}
TrendlineDirective.moduleName = 'trendline';
class TrendlinesDirective extends ComplexBase {
}
TrendlinesDirective.propertyName = 'trendlines';
TrendlinesDirective.moduleName = 'trendlines';

/**
 * `SegmentDirective` directive represent a segment of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SeriesCollectionDirective>
 * <SeriesDirective>
 * <SegmentsDirective>
 * <SegmentDirective></SegmentDirective>
 * </SegmentsDirective>
 * </SeriesDirective>
 * </SeriesCollectionDirective>
 * </ChartComponent>
 * ```
 */
class SegmentDirective extends ComplexBase {
}
SegmentDirective.moduleName = 'segment';
class SegmentsDirective extends ComplexBase {
}
SegmentsDirective.propertyName = 'segments';
SegmentsDirective.moduleName = 'segments';

/**
 * `Axis` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
class AxisDirective extends ComplexBase {
}
AxisDirective.moduleName = 'axis';
class AxesDirective extends ComplexBase {
}
AxesDirective.propertyName = 'axes';
AxesDirective.moduleName = 'axes';

/**
 * `StriplineDirective` directive represent a stripline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <StriplinesDirective>
 * <StriplineDirective></StriplineDirective>
 * </StriplinesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
class StripLineDirective extends ComplexBase {
}
StripLineDirective.moduleName = 'stripLine';
class StripLinesDirective extends ComplexBase {
}
StripLinesDirective.propertyName = 'stripLines';
StripLinesDirective.moduleName = 'stripLines';

/**
 * `MultiLevelLabelDirective` directive represent a multilevellabel of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <MultiLevelLabelsDirective>
 * <MultiLevelLabelDirective></MultiLevelLabelDirective>
 * </MultiLevelLabelsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
class MultiLevelLabelDirective extends ComplexBase {
}
MultiLevelLabelDirective.moduleName = 'multiLevelLabel';
class MultiLevelLabelsDirective extends ComplexBase {
}
MultiLevelLabelsDirective.propertyName = 'multiLevelLabels';
MultiLevelLabelsDirective.moduleName = 'multiLevelLabels';

/**
 * `CategoryDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <MultiLevelLabelsDirective>
 * <MultiLevelLabelDirective>
 * <CategoriesDirective>
 * <CategoryDirective>
 * </CategoryDirective>
 * </CategoriesDirective>
 * </MultiLevelLabelDirective>
 * </MultiLevelLabelsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </ChartComponent>
 * ```
 */
class CategoryDirective extends ComplexBase {
}
CategoryDirective.moduleName = 'category';
class CategoriesDirective extends ComplexBase {
}
CategoriesDirective.propertyName = 'categories';
CategoriesDirective.moduleName = 'categories';

/**
 * `Row` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <RowsDirective>
 * <RowDirective></RowDirective>
 * </RowsDirective>
 * </ChartComponent>
 * ```
 */
class RowDirective extends ComplexBase {
}
RowDirective.moduleName = 'row';
class RowsDirective extends ComplexBase {
}
RowsDirective.propertyName = 'rows';
RowsDirective.moduleName = 'rows';

/**
 * `Column` directive represent a axis column of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <ColumnsDirective>
 * <ColumnDirective></ColumnDirective>
 * </ColumnsDirective>
 * </ChartComponent>
 * ```
 */
class ColumnDirective extends ComplexBase {
}
ColumnDirective.moduleName = 'column';
class ColumnsDirective extends ComplexBase {
}
ColumnsDirective.propertyName = 'columns';
ColumnsDirective.moduleName = 'columns';

/**
 * `Annotation` directive represent a annotation of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </ChartComponent>
 * ```
 */
class AnnotationDirective extends ComplexBase {
}
AnnotationDirective.moduleName = 'annotation';
class AnnotationsDirective extends ComplexBase {
}
AnnotationsDirective.propertyName = 'annotations';
AnnotationsDirective.moduleName = 'annotations';

/**
 * `SelectedDataIndex` directive represent the selected data in react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SelectedDataIndexesDirective>
 * <SelectedDataIndexDirective></SelectedDataIndexDirective>
 * </SelectedDataIndexesDirective>
 * </ChartComponent>
 * ```
 */
class SelectedDataIndexDirective extends ComplexBase {
}
SelectedDataIndexDirective.moduleName = 'selectedDataIndex';
class SelectedDataIndexesDirective extends ComplexBase {
}
SelectedDataIndexesDirective.propertyName = 'selectedDataIndexes';
SelectedDataIndexesDirective.moduleName = 'selectedDataIndexes';

/**
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <IndicatorsDirective>
 * <IndicatorDirective></IndicatorDirective>
 * </IndicatorsDirective>
 * </ChartComponent>
 * ```
 */
class IndicatorDirective extends ComplexBase {
}
IndicatorDirective.moduleName = 'indicator';
class IndicatorsDirective extends ComplexBase {
}
IndicatorsDirective.propertyName = 'indicators';
IndicatorsDirective.moduleName = 'indicators';

/**
 * Represents react Chart Component
 * ```tsx
 * <ChartComponent></ChartComponent>
 * ```
 */
class ChartComponent extends Chart {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'seriesCollection': { 'series': { 'trendlines': 'trendline', 'segments': 'segment' } }, 'axes': { 'axis': { 'stripLines': 'stripLine', 'multiLevelLabels': { 'multiLevelLabel': { 'categories': 'category' } } } }, 'rows': 'row', 'columns': 'column', 'annotations': 'annotation', 'selectedDataIndexes': 'selectedDataIndex', 'indicators': 'indicator' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(ChartComponent, [ComponentBase, Component]);

/**
 * `AccumulationSeriesDirective` directive represent a series of the react AccumulationChart.
 * It must be contained in a Pie component(`AccumulationChart`).
 * ```tsx
 * <AccumulationChartComponent>
 * <AccumulationSeriesCollectionDirective>
 * <AccumulationSeriesDirective></AccumulationSeriesDirective>
 * </AccumulationSeriesCollectionDirective>
 * </AccumulationChartComponent>
 * ```
 */
class AccumulationSeriesDirective extends ComplexBase {
}
AccumulationSeriesDirective.moduleName = 'accumulationSeries';
AccumulationSeriesDirective.complexTemplate = { 'dataLabelTemplate': 'dataLabel.template' };
class AccumulationSeriesCollectionDirective extends ComplexBase {
}
AccumulationSeriesCollectionDirective.propertyName = 'series';
AccumulationSeriesCollectionDirective.moduleName = 'accumulationSeriesCollection';

/**
 * `AccumulationAnnotationsDirective` directive represent a annotation of the react AccumulationChart.
 * It must be contained in a Pie component(`AccumulationChart`).
 * ```tsx
 * <AccumulationChartComponent>
 * <AccumulationAnnotationsDirective>
 * <AccumulationAnnotationDirective></AccumulationAnnotationDirective>
 * </AccumulationAnnotationsDirective>
 * </AccumulationChartComponent>
 * ```
 */
class AccumulationAnnotationDirective extends ComplexBase {
}
AccumulationAnnotationDirective.moduleName = 'accumulationAnnotation';
class AccumulationAnnotationsDirective extends ComplexBase {
}
AccumulationAnnotationsDirective.propertyName = 'annotations';
AccumulationAnnotationsDirective.moduleName = 'accumulationAnnotations';

/**
 * Represents react AccumulationChart Component
 * ```tsx
 * <AccumulationChartComponent></AccumulationChartComponent>
 * ```
 */
class AccumulationChartComponent extends AccumulationChart {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'accumulationSeriesCollection': 'accumulationSeries', 'accumulationAnnotations': 'accumulationAnnotation' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(AccumulationChartComponent, [ComponentBase, Component]);

/**
 * `rangenavigatorSeriesDirective` directive represent a series of the react AccumulationChart.
 * It must be contained in a Rangenavigator component(`Rangenavigator`).
 * ```tsx
 * <RangenavigatorComponent>
 * <RangenavigatorSeriesCollectionDirective>
 * <RangenavigatorSeriesDirective></RangenavigatorSeriesDirective>
 * </RangenavigatorSeriesCollectionDirective>
 * </RangenavigatorChartComponent>
 * ```
 */
class RangenavigatorSeriesDirective extends ComplexBase {
}
RangenavigatorSeriesDirective.moduleName = 'rangenavigatorSeries';
class RangenavigatorSeriesCollectionDirective extends ComplexBase {
}
RangenavigatorSeriesCollectionDirective.propertyName = 'series';
RangenavigatorSeriesCollectionDirective.moduleName = 'rangenavigatorSeriesCollection';

/**
 * Represents react RangeNavigator Component
 * ```tsx
 * <RangeNavigatorComponent></RangeNavigatorComponent>
 * ```
 */
class RangeNavigatorComponent extends RangeNavigator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'rangenavigatorSeriesCollection': 'rangenavigatorSeries' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(RangeNavigatorComponent, [ComponentBase, Component]);

class RangeBandSettingDirective extends ComplexBase {
}
RangeBandSettingDirective.moduleName = 'rangeBandSetting';
class RangeBandSettingsDirective extends ComplexBase {
}
RangeBandSettingsDirective.propertyName = 'rangeBandSettings';
RangeBandSettingsDirective.moduleName = 'rangeBandSettings';

/**
 * Represents react Sparkline Component
 * ```tsx
 * <SparklineComponent></SparklineComponent>
 * ```
 */
class SparklineComponent extends Sparkline {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'rangeBandSettings': 'rangeBandSetting' };
        this.immediateRender = true;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(SparklineComponent, [ComponentBase, Component]);

class SmithchartSeriesDirective extends ComplexBase {
}
SmithchartSeriesDirective.moduleName = 'smithchartSeries';
class SmithchartSeriesCollectionDirective extends ComplexBase {
}
SmithchartSeriesCollectionDirective.propertyName = 'series';
SmithchartSeriesCollectionDirective.moduleName = 'smithchartSeriesCollection';

/**
 * Represents react Smithchart Component
 * ```tsx
 * <SmithchartComponent></SmithchartComponent>
 * ```
 */
class SmithchartComponent extends Smithchart {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'smithchartSeriesCollection': 'smithchartSeries' };
        this.immediateRender = true;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(SmithchartComponent, [ComponentBase, Component]);

/**
 * `SeriesDirective` directive represent a series of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartSeriesCollectionDirective>
 * <StockChartSeriesDirective></SeriesDirective>
 * </StockChartSeriesCollectionDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartSeriesDirective extends ComplexBase {
}
StockChartSeriesDirective.moduleName = 'stockChartSeries';
class StockChartSeriesCollectionDirective extends ComplexBase {
}
StockChartSeriesCollectionDirective.propertyName = 'series';
StockChartSeriesCollectionDirective.moduleName = 'stockChartSeriesCollection';

/**
 * `TrendlineDirective` directive represent a trendline of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartSeriesCollectionDirective>
 * <StockSeriesDirective>
 * <TrendlinesDirective>
 * <TrendlineDirective></TrendlineDirective>
 * </TrendlinesDirective>
 * </StockChartSeriesDirective>
 * </StockChartSeriesCollectionDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartTrendlineDirective extends ComplexBase {
}
StockChartTrendlineDirective.moduleName = 'stockChartTrendline';
class StockChartTrendlinesDirective extends ComplexBase {
}
StockChartTrendlinesDirective.propertyName = 'trendlines';
StockChartTrendlinesDirective.moduleName = 'stockChartTrendlines';

/**
 * `Axis` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartAxesDirective>
 * <StockChartAxisDirective></StockChartAxisDirective>
 * </StockChartAxesDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartAxisDirective extends ComplexBase {
}
StockChartAxisDirective.moduleName = 'stockChartAxis';
class StockChartAxesDirective extends ComplexBase {
}
StockChartAxesDirective.propertyName = 'axes';
StockChartAxesDirective.moduleName = 'stockChartAxes';

/**
 * `Row` directive represent a axis row of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <RowsDirective>
 * <RowDirective></RowDirective>
 * </RowsDirective>
 * </ChartComponent>
 * ```
 */
class StockChartRowDirective extends ComplexBase {
}
StockChartRowDirective.moduleName = 'stockChartRow';
class StockChartRowsDirective extends ComplexBase {
}
StockChartRowsDirective.propertyName = 'rows';
StockChartRowsDirective.moduleName = 'stockChartRows';

/**
 * `Annotation` directive represent a annotation of the react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartAnnotationsDirective>
 * <StockChartAnnotationDirective></StockChartAnnotationDirective>
 * </StockChartAnnotationsDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartAnnotationDirective extends ComplexBase {
}
StockChartAnnotationDirective.moduleName = 'stockChartAnnotation';
class StockChartAnnotationsDirective extends ComplexBase {
}
StockChartAnnotationsDirective.propertyName = 'annotations';
StockChartAnnotationsDirective.moduleName = 'stockChartAnnotations';

/**
 * `SelectedDataIndex` directive represent the selected data in react Chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <ChartComponent>
 * <SelectedDataIndexesDirective>
 * <SelectedDataIndexDirective></SelectedDataIndexDirective>
 * </SelectedDataIndexesDirective>
 * </ChartComponent>
 * ```
 */
class StockChartSelectedDataIndexDirective extends ComplexBase {
}
StockChartSelectedDataIndexDirective.moduleName = 'stockChartSelectedDataIndex';
class StockChartSelectedDataIndexesDirective extends ComplexBase {
}
StockChartSelectedDataIndexesDirective.propertyName = 'selectedDataIndexes';
StockChartSelectedDataIndexesDirective.moduleName = 'stockChartSelectedDataIndexes';

/**
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartIndicatorsDirective>
 * <StockChartIndicatorDirective></StockChartIndicatorDirective>
 * </StockChartIndicatorsDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartPeriodDirective extends ComplexBase {
}
StockChartPeriodDirective.moduleName = 'stockChartPeriod';
class StockChartPeriodsDirective extends ComplexBase {
}
StockChartPeriodsDirective.propertyName = 'periods';
StockChartPeriodsDirective.moduleName = 'stockChartPeriods';

/**
 * `StockChartStockEvents` directive represent a stockevent of the react chart.
 * It must be contained in a Chart component(`StockChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartStockEventsDirective>
 * <StockChartStockEventDirective></StockChartStockEventDirective>
 * </StockChartStockEventsDirective>
 * </StockChartComponent>
 * ```
 */
class StockEventDirective extends ComplexBase {
}
StockEventDirective.moduleName = 'stockEvent';
class StockEventsDirective extends ComplexBase {
}
StockEventsDirective.propertyName = 'stockEvents';
StockEventsDirective.moduleName = 'stockEvents';

/**
 * `IndicatorDirective` directive represent a indicator of the react chart.
 * It must be contained in a Chart component(`ChartComponent`).
 * ```tsx
 * <StockChartComponent>
 * <StockChartIndicatorsDirective>
 * <StockChartIndicatorDirective></StockChartIndicatorDirective>
 * </StockChartIndicatorsDirective>
 * </StockChartComponent>
 * ```
 */
class StockChartIndicatorDirective extends ComplexBase {
}
StockChartIndicatorDirective.moduleName = 'stockChartIndicator';
class StockChartIndicatorsDirective extends ComplexBase {
}
StockChartIndicatorsDirective.propertyName = 'indicators';
StockChartIndicatorsDirective.moduleName = 'stockChartIndicators';

/**
 * Represents react Chart Component
 * ```tsx
 * <StockChartComponent></StockChartComponent>
 * ```
 */
class StockChartComponent extends StockChart {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'stockChartSeriesCollection': { 'stockChartSeries': { 'stockChartTrendlines': 'stockChartTrendline' } }, 'stockChartAxes': 'stockChartAxis', 'stockChartRows': 'stockChartRow', 'stockChartAnnotations': 'stockChartAnnotation', 'stockChartSelectedDataIndexes': 'stockChartSelectedDataIndex', 'stockChartPeriods': 'stockChartPeriod', 'stockEvents': 'stockEvent', 'stockChartIndicators': 'stockChartIndicator' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(StockChartComponent, [ComponentBase, Component]);

/**
 * `BulletRangeDirective` directive represent a ranges of the react BulletChart.
 * ```tsx
 * <BulletChartComponent>
 * <BulletRangeCollectionDirective>
 * <BulletRangeDirective></BulletRangeDirective>
 * </BulletRangeCollectionDirective>
 * </BulletChartComponent>
 * ```
 */
class BulletRangeDirective extends ComplexBase {
}
BulletRangeDirective.moduleName = 'bulletRange';
class BulletRangeCollectionDirective extends ComplexBase {
}
BulletRangeCollectionDirective.propertyName = 'ranges';
BulletRangeCollectionDirective.moduleName = 'bulletRangeCollection';

/**
 * Represents react BulletChart Component
 * ```tsx
 * <BulletChartComponent></BulletChartComponent>
 * ```
 */
class BulletChartComponent extends BulletChart {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'bulletRangeCollection': 'bulletRange' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(BulletChartComponent, [ComponentBase, Component]);

export { SeriesDirective, SeriesCollectionDirective, TrendlineDirective, TrendlinesDirective, SegmentDirective, SegmentsDirective, AxisDirective, AxesDirective, StripLineDirective, StripLinesDirective, MultiLevelLabelDirective, MultiLevelLabelsDirective, CategoryDirective, CategoriesDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, AnnotationDirective, AnnotationsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, IndicatorDirective, IndicatorsDirective, ChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective, AccumulationChartComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, RangeNavigatorComponent, RangeBandSettingDirective, RangeBandSettingsDirective, SparklineComponent, SmithchartSeriesDirective, SmithchartSeriesCollectionDirective, SmithchartComponent, StockChartSeriesDirective, StockChartSeriesCollectionDirective, StockChartTrendlineDirective, StockChartTrendlinesDirective, StockChartAxisDirective, StockChartAxesDirective, StockChartRowDirective, StockChartRowsDirective, StockChartAnnotationDirective, StockChartAnnotationsDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective, StockChartPeriodDirective, StockChartPeriodsDirective, StockEventDirective, StockEventsDirective, StockChartIndicatorDirective, StockChartIndicatorsDirective, StockChartComponent, BulletRangeDirective, BulletRangeCollectionDirective, BulletChartComponent };
export * from '@syncfusion/ej2-charts';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-charts.es2015.js.map
