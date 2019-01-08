import * as React from 'react';
import { DropDownList, DropDownListModel } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface DropDownListTypecast {
    footerTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
    valueTemplate?: string | Function | any;
    groupTemplate?: string | Function | any;
    itemTemplate?: string | Function | any;
}
/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```
 * <DropDownListComponent dataSource={data}/>
 * ```
 */
export class DropDownListComponent extends DropDownList {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DropDownListModel & DefaultHtmlAttributes| DropDownListTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DropDownListModel & DefaultHtmlAttributes| DropDownListTypecast>;
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
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(DropDownListComponent, [ComponentBase, React.PureComponent]);
