import * as React from 'react';
import { Slider, SliderModel } from '@syncfusion/ej2-inputs';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';

export interface SliderHtmlAttributes {
    name?: string;
}

/**
 * Represents the React Slider Component
 * ```html
 * <Slider value={value}></Slider>
 * ```
 */
export class SliderComponent extends Slider {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<SliderModel & DefaultHtmlAttributes & SliderHtmlAttributes>;
    public setState: any;
    private controlAttributes: string[] = ['name'];
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<SliderModel & DefaultHtmlAttributes & SliderHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
        this.state = props;
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

applyMixins(SliderComponent, [ComponentBase, React.PureComponent]);
