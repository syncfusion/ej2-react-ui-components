import * as React from 'react';
import { RangeNavigator, RangeNavigatorModel } from '@syncfusion/ej2-charts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface RangeNavigatorTypecast {
}
/**
 * Represents react RangeNavigator Component
 * ```tsx
 * <RangeNavigatorComponent></RangeNavigatorComponent>
 * ```
 */
export class RangeNavigatorComponent extends RangeNavigator {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<RangeNavigatorModel & DefaultHtmlAttributes| RangeNavigatorTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'rangenavigatorSeriesCollection': 'rangenavigatorSeries'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<RangeNavigatorModel & DefaultHtmlAttributes| RangeNavigatorTypecast>;
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

applyMixins(RangeNavigatorComponent, [ComponentBase, React.PureComponent]);
