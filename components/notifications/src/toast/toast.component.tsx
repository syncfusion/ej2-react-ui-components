import * as React from 'react';
import { Toast, ToastModel } from '@syncfusion/ej2-notifications';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ToastTypecast {
    title?: string | Function;
    content?: string | Function;
    template?: string | Function;
}
/**
 * Represents the React Toast Component
 * ```html
 * <Toast></Toast>
 * ```
 */
export class ToastComponent extends Toast {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ToastModel & DefaultHtmlAttributes| ToastTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'buttonModelProp': 'buttonModelProps'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ToastModel & DefaultHtmlAttributes| ToastTypecast>;
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

applyMixins(ToastComponent, [ComponentBase, React.PureComponent]);
