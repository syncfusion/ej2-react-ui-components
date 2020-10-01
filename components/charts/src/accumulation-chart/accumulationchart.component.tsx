import * as React from 'react';
import { AccumulationChart, AccumulationChartModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface AccumulationChartTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react AccumulationChart Component
 * ```tsx
 * <AccumulationChartComponent></AccumulationChartComponent>
 * ```
 */
export class AccumulationChartComponent extends AccumulationChart {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<AccumulationChartModel & DefaultHtmlAttributes| AccumulationChartTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'accumulationSeriesCollection': 'accumulationSeries', 'accumulationAnnotations': 'accumulationAnnotation'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<AccumulationChartModel & DefaultHtmlAttributes| AccumulationChartTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public portals: any = [];
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !(this as any).isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(),[].concat(this.props.children,this.portals));
        }

    }
}

applyMixins(AccumulationChartComponent, [ComponentBase, React.Component]);
