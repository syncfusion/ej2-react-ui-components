import * as React from 'react';
import { LinearGauge, LinearGaugeModel } from '@syncfusion/ej2-lineargauge';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface LinearGaugeTypecast {
}
/**
 * Represents react Linear Gauge Component
 * ```tsx
 * <LinearGaugeComponent></LinearGaugeComponent>
 * ```
 */
export class LinearGaugeComponent extends LinearGauge {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<LinearGaugeModel & DefaultHtmlAttributes| LinearGaugeTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'axes': {'axis': {'ranges': 'range', 'pointers': 'pointer'}}, 'annotations': 'annotation'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<LinearGaugeModel & DefaultHtmlAttributes| LinearGaugeTypecast>;
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

applyMixins(LinearGaugeComponent, [ComponentBase, React.PureComponent]);
