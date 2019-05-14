import * as React from 'react';
import { TreeGrid, TreeGridModel } from '@syncfusion/ej2-treegrid';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface TreeGridTypecast {
    toolbarTemplate?: string | Function | any;
    rowTemplate?: string | Function | any;
    pagerTemplate?: string | Function | any;
    editSettingsTemplate?: string | Function | any;
}
/**
 * `TreeTreeGridComponent` represents the react TreeTreeGrid.
 * ```tsx
 * <TreeTreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
export class TreeGridComponent extends TreeGrid {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<TreeGridModel & DefaultHtmlAttributes| TreeGridTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'columns': 'column', 'aggregates': {'aggregate': {'aggregateColumns': 'aggregateColumn'}}};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<TreeGridModel & DefaultHtmlAttributes| TreeGridTypecast>;
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

applyMixins(TreeGridComponent, [ComponentBase, React.PureComponent]);
