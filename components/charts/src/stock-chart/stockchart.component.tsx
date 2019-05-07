import * as React from 'react';
import { StockChart, StockChartModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface StockChartTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react Chart Component
 * ```tsx
 * <StockChartComponent></StockChartComponent>
 * ```
 */
export class StockChartComponent extends StockChart {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<StockChartModel & DefaultHtmlAttributes| StockChartTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'stockChartSeriesCollection': {'stockChartSeries': {'stockChartTrendlines': 'stockChartTrendline'}}, 'stockChartAxes': {'stockChartAxis': {'stockChartStripLines': 'stockChartStripLine'}}, 'stockChartRows': 'stockChartRow', 'stockChartAnnotations': 'stockChartAnnotation', 'stockChartSelectedDataIndexes': 'stockChartSelectedDataIndex', 'stockChartPeriods': 'stockChartPeriod', 'stockEvents': 'stockEvent', 'stockChartIndicators': 'stockChartIndicator'};
    private checkTemplate: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<StockChartModel & DefaultHtmlAttributes| StockChartTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(StockChartComponent, [ComponentBase, React.PureComponent]);
