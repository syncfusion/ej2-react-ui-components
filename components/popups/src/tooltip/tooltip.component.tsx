import * as React from 'react';
import { Tooltip, TooltipModel } from '@syncfusion/ej2-popups';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface TooltipTypecast {
    content?: string | Function | any;
}
/**
 * Represents the React Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <Tooltip content='Tooltip content'>Show Tooltip</Tooltip>
 * ```
 */
export class TooltipComponent extends Tooltip {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<TooltipModel & DefaultHtmlAttributes| TooltipTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<TooltipModel & DefaultHtmlAttributes| TooltipTypecast>;
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

applyMixins(TooltipComponent, [ComponentBase, React.PureComponent]);
