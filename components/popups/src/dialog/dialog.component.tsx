import * as React from 'react';
import { Dialog, DialogModel } from '@syncfusion/ej2-popups';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface DialogTypecast {
    footerTemplate?: string | Function | any;
    header?: string | Function | any;
    content?: string | Function | any;
}
/**
 * Represents the React Dialog Component
 * ```html
 * <Dialog></Dialog>
 * ```
 */
export class DialogComponent extends Dialog {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DialogModel & DefaultHtmlAttributes| DialogTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'buttons': 'dialogButton'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DialogModel & DefaultHtmlAttributes| DialogTypecast>;
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
            return React.createElement('div', this.getDefaultAttributes(),[].concat(this.props.children,this.portals));
        }

    }
}

applyMixins(DialogComponent, [ComponentBase, React.Component]);
