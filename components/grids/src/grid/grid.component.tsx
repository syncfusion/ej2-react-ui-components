import * as React from 'react';
import { Grid, GridModel } from '@syncfusion/ej2-grids';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface GridTypecast {
    rowTemplate?: string | Function | any;
    detailTemplate?: string | Function | any;
    toolbarTemplate?: string | Function | any;
    pagerTemplate?: string | Function | any;
}
/**
 * `GridComponent` represents the react Grid.
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
export class GridComponent extends Grid {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<GridModel & DefaultHtmlAttributes| GridTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'columns': 'column', 'aggregates': {'aggregate': {'aggregateColumns': 'aggregateColumn'}}};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<GridModel & DefaultHtmlAttributes| GridTypecast>;
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

applyMixins(GridComponent, [ComponentBase, React.PureComponent]);
