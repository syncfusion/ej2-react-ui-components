import * as React from 'react';
import { Overview, OverviewModel } from '@syncfusion/ej2-diagrams';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react Overview Component
 * ```tsx
 * <OverviewComponent></OverviewComponent>
 * ```
 */
export class OverviewComponent extends Overview {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<OverviewModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<OverviewModel & DefaultHtmlAttributes>;
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

applyMixins(OverviewComponent, [ComponentBase, React.PureComponent]);
