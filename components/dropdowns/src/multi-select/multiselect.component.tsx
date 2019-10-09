import * as React from 'react';
import { MultiSelect, MultiSelectModel } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface MultiSelectTypecast {
    footerTemplate?: string | Function | any;
    headerTemplate?: string | Function | any;
    valueTemplate?: string | Function | any;
    itemTemplate?: string | Function | any;
}
/**
* The MultiSelect allows the user to pick a values from the predefined list of values.
 * ```
 * <MultiSelectComponent dataSource={data}/>
 * ```
 */
export class MultiSelectComponent extends MultiSelect {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<MultiSelectModel & DefaultHtmlAttributes| MultiSelectTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<MultiSelectModel & DefaultHtmlAttributes| MultiSelectTypecast>;
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

applyMixins(MultiSelectComponent, [ComponentBase, React.PureComponent]);
