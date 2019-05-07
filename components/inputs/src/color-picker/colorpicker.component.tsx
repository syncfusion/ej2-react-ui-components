import * as React from 'react';
import { ColorPicker, ColorPickerModel } from '@syncfusion/ej2-inputs';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the React ColorPicker Component
 * ```html
 * <ColorPickerComponent></ColorPickerComponent>
 * ```
 */
export class ColorPickerComponent extends ColorPicker {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ColorPickerModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private checkTemplate: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ColorPickerModel & DefaultHtmlAttributes>;
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
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(ColorPickerComponent, [ComponentBase, React.PureComponent]);
