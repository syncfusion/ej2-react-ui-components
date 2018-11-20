import * as React from 'react';
import { MaskedTextBox, MaskedTextBoxModel } from '@syncfusion/ej2-inputs';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';

export interface MaskedTextBoxHtmlAttributes {
    name?: string;
}

/**
 * Represents the React MaskedTextBox Component
 * ```html
 * <MaskedTextBox value={value}></MaskedTextBox>
 * ```
 */
export class MaskedTextBoxComponent extends MaskedTextBox {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<MaskedTextBoxModel & DefaultHtmlAttributes & MaskedTextBoxHtmlAttributes>;
    public setState: any;
    private controlAttributes: string[] = ['name'];
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<MaskedTextBoxModel & DefaultHtmlAttributes & MaskedTextBoxHtmlAttributes>;
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

applyMixins(MaskedTextBoxComponent, [ComponentBase, React.PureComponent]);
