import * as React from 'react';
import { ListView, ListViewModel } from '@syncfusion/ej2-lists';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ListViewTypecast {
    template?: string | Function | any;
    groupTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
}
/**
 * Represents ListView component for React
 * ```
 * <ListViewComponent dataSource={data}/>
 * ```
 */
export class ListViewComponent extends ListView {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ListViewModel & DefaultHtmlAttributes| ListViewTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ListViewModel & DefaultHtmlAttributes| ListViewTypecast>;
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

applyMixins(ListViewComponent, [ComponentBase, React.PureComponent]);
