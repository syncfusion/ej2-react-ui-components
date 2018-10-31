import * as React from 'react';
import { TreeView, TreeViewModel } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface TreeViewTypecast {
    nodeTemplate?: string | Function;
}
/**
 * `TreeViewComponent` represents the react TreeView Component.
 * ```ts
 * <TreeViewComponent allowDragAndDrop={true}></TreeViewComponent>
 * ```
 */
export class TreeViewComponent extends TreeView {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<TreeViewModel & DefaultHtmlAttributes| TreeViewTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<TreeViewModel & DefaultHtmlAttributes| TreeViewTypecast>;
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

applyMixins(TreeViewComponent, [ComponentBase, React.PureComponent]);
