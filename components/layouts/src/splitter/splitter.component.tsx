import * as React from 'react';
import { Splitter, SplitterModel } from '@syncfusion/ej2-layouts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the React Splitter Component
 * ```html
 * <Splitter></Splitter>
 * ```
 */
export class SplitterComponent extends Splitter {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<SplitterModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'panes': 'pane'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<SplitterModel & DefaultHtmlAttributes>;
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

applyMixins(SplitterComponent, [ComponentBase, React.PureComponent]);
