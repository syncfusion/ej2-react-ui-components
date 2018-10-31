import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { AccumulationChart, Chart, RangeNavigator, Smithchart, Sparkline } from '@syncfusion/ej2-charts';

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(ChartComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(AccumulationChartComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(RangeNavigatorComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(SparklineComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(SmithchartComponent, [ComponentBase, PureComponent]);

export { SeriesDirective, SeriesCollectionDirective, TrendlineDirective, TrendlinesDirective, SegmentDirective, SegmentsDirective, AxisDirective, AxesDirective, StripLineDirective, StripLinesDirective, MultiLevelLabelDirective, MultiLevelLabelsDirective, CategoryDirective, CategoriesDirective, RowDirective, RowsDirective, ColumnDirective, ColumnsDirective, AnnotationDirective, AnnotationsDirective, SelectedDataIndexDirective, SelectedDataIndexesDirective, IndicatorDirective, IndicatorsDirective, ChartComponent, AccumulationSeriesDirective, AccumulationSeriesCollectionDirective, AccumulationAnnotationDirective, AccumulationAnnotationsDirective, AccumulationChartComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, RangeNavigatorComponent, RangeBandSettingDirective, RangeBandSettingsDirective, SparklineComponent, SmithchartSeriesDirective, SmithchartSeriesCollectionDirective, SmithchartComponent };
export * from '@syncfusion/ej2-charts';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-charts.es2015.js.map
