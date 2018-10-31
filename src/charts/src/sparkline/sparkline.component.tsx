import * as React from 'react';
import { Sparkline, SparklineModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react Sparkline Component
 * ```tsx
 * <SparklineComponent></SparklineComponent>
 * ```
 */
export class SparklineComponent extends Sparkline {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<SparklineModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'rangeBandSettings': 'rangeBandSetting'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<SparklineModel & DefaultHtmlAttributes>;
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

applyMixins(SparklineComponent, [ComponentBase, React.PureComponent]);
