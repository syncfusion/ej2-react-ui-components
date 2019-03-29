import * as React from 'react';
import { CircularGauge, CircularGaugeModel } from '@syncfusion/ej2-circulargauge';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface CircularGaugeTypecast {
    tooltipTemplate?: string | Function | any;
}
/**
 * Represents react Circular Gauge Component
 * ```tsx
 * <CircularGaugeComponent></CircularGaugeComponent>
 * ```
 */
export class CircularGaugeComponent extends CircularGauge {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<CircularGaugeModel & DefaultHtmlAttributes| CircularGaugeTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'axes': {'axis': {'annotations': 'annotation', 'ranges': 'range', 'pointers': 'pointer'}}};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<CircularGaugeModel & DefaultHtmlAttributes| CircularGaugeTypecast>;
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

applyMixins(CircularGaugeComponent, [ComponentBase, React.PureComponent]);
