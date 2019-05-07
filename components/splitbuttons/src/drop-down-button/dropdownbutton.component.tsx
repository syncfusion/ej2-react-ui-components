import * as React from 'react';
import { DropDownButton, DropDownButtonModel } from '@syncfusion/ej2-splitbuttons';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `DropDownButtonComponent` represents the react DropDownButton Component.
 * ```ts
 * <DropDownButtonComponent content='DropDownButton'></DropDownButtonComponent>
 * ```
 */
export class DropDownButtonComponent extends DropDownButton {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DropDownButtonModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private checkTemplate: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DropDownButtonModel & DefaultHtmlAttributes>;
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
            return React.createElement('button', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(DropDownButtonComponent, [ComponentBase, React.PureComponent]);
