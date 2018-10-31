import * as React from 'react';
import { Pager, PagerModel } from '@syncfusion/ej2-grids';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface PagerTypecast {
    template?: string | Function;
}
/**
 * `PagerComponent` represents the react Pager.
 * ```tsx
 * <PagerComponent/>
 * ```
 */
export class PagerComponent extends Pager {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PagerModel & DefaultHtmlAttributes| PagerTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PagerModel & DefaultHtmlAttributes| PagerTypecast>;
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

applyMixins(PagerComponent, [ComponentBase, React.PureComponent]);
