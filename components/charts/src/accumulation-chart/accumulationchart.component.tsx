import * as React from 'react';
import { AccumulationChart, AccumulationChartModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface AccumulationChartTypecast {
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
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<AccumulationChartModel & DefaultHtmlAttributes| AccumulationChartTypecast>;
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

applyMixins(AccumulationChartComponent, [ComponentBase, React.PureComponent]);
