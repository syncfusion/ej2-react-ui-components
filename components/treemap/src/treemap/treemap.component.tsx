import * as React from 'react';
import { TreeMap, TreeMapModel } from '@syncfusion/ej2-treemap';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface TreeMapTypecast {
    tooltipSettingsTemplate?: string | Function | any;
    leafItemSettingsLabelTemplate?: string | Function | any;
}
/**
 * Represents react TreeMap Component
 * ```tsx
 * <TreeMapComponent></TreeMapComponent>
 * ```
 */
export class TreeMapComponent extends TreeMap {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<TreeMapModel & DefaultHtmlAttributes| TreeMapTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'levels': {'level': {'colorMappings': 'colorMapping'}}};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<TreeMapModel & DefaultHtmlAttributes| TreeMapTypecast>;
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

applyMixins(TreeMapComponent, [ComponentBase, React.PureComponent]);
