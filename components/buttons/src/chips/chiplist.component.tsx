import * as React from 'react';
import { ChipList, ChipListModel } from '@syncfusion/ej2-buttons';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the Essential JS 2 React ChipList Component.
 * ```ts
 * <ChipListComponent></ChipListComponent>
 * ```
 */
export class ChipListComponent extends ChipList {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ChipListModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'chips': 'chip'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ChipListModel & DefaultHtmlAttributes>;
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

applyMixins(ChipListComponent, [ComponentBase, React.PureComponent]);
