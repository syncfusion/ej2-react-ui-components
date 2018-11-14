import * as React from 'react';
import { PivotView, PivotViewModel } from '@syncfusion/ej2-pivotview';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `PivotViewComponent` represents the react PivotView.
 * ```tsx
 * <PivotViewComponent/>
 * ```
 */
export class PivotViewComponent extends PivotView {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PivotViewModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PivotViewModel & DefaultHtmlAttributes>;
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

applyMixins(PivotViewComponent, [ComponentBase, React.PureComponent]);
