import * as React from 'react';
import { Chart, ChartModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ChartTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react Chart Component
 * ```tsx
 * <ChartComponent></ChartComponent>
 * ```
 */
export class ChartComponent extends Chart {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ChartModel & DefaultHtmlAttributes| ChartTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'seriesCollection': {'series': {'trendlines': 'trendline', 'segments': 'segment'}}, 'axes': {'axis': {'stripLines': 'stripLine', 'multiLevelLabels': {'multiLevelLabel': {'categories': 'category'}}}}, 'rows': 'row', 'columns': 'column', 'annotations': 'annotation', 'selectedDataIndexes': 'selectedDataIndex', 'indicators': 'indicator'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ChartModel & DefaultHtmlAttributes| ChartTypecast>;
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

applyMixins(ChartComponent, [ComponentBase, React.PureComponent]);
