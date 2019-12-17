import * as React from 'react';
import { BulletChart, BulletChartModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react BulletChart Component
 * ```tsx
 * <BulletChartComponent></BulletChartComponent>
 * ```
 */
export class BulletChartComponent extends BulletChart {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<BulletChartModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'bulletRangeCollection': 'bulletRange'};
    private immediateRender: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<BulletChartModel & DefaultHtmlAttributes>;
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

applyMixins(BulletChartComponent, [ComponentBase, React.PureComponent]);
