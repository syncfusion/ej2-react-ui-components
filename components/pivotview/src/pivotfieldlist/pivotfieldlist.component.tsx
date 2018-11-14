import * as React from 'react';
import { PivotFieldList, PivotFieldListModel } from '@syncfusion/ej2-pivotview';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `PivotFieldListComponent` represents the react PivotFieldList.
 * ```tsx
 * <PivotFieldListComponent/>
 * ```
 */
export class PivotFieldListComponent extends PivotFieldList {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PivotFieldListModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PivotFieldListModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
        this.state = props;
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

applyMixins(PivotFieldListComponent, [ComponentBase, React.PureComponent]);
