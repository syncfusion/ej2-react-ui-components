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
    private immediateRender: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<MaskedTextBoxModel & DefaultHtmlAttributes & MaskedTextBoxHtmlAttributes>;
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
            return React.createElement((React as any).Fragment, null,[].concat(React.createElement("input", this.getDefaultAttributes()),this.portals));
        }

    }
}

applyMixins(MaskedTextBoxComponent, [ComponentBase, React.Component]);
