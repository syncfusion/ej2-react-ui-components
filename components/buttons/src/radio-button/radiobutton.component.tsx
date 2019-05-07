import * as React from 'react';
import { RadioButton, RadioButtonModel } from '@syncfusion/ej2-buttons';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the react RadioButton Component.
 * ```ts
 * <RadioButtonComponent label='Default'></RadioButtonComponent>
 * ```
 */
export class RadioButtonComponent extends RadioButton {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<RadioButtonModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private checkTemplate: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<RadioButtonModel & DefaultHtmlAttributes>;
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

applyMixins(RadioButtonComponent, [ComponentBase, React.PureComponent]);
