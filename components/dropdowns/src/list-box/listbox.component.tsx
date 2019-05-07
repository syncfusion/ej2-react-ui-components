import * as React from 'react';
import { ListBox, ListBoxModel } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ListBoxTypecast {
    itemTemplate?: string | Function | any;
}
/**
* The ListBox allows the user to select values from the predefined list of values.
 * ```
 * <ListBoxComponent dataSource={data} />
 * ```
 */
export class ListBoxComponent extends ListBox {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ListBoxModel & DefaultHtmlAttributes| ListBoxTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private checkTemplate: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ListBoxModel & DefaultHtmlAttributes| ListBoxTypecast>;
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

applyMixins(ListBoxComponent, [ComponentBase, React.PureComponent]);
