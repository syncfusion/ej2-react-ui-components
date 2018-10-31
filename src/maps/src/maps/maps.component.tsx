import * as React from 'react';
import { Maps, MapsModel } from '@syncfusion/ej2-maps';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react Maps Component
 * ```tsx
 * <MapsComponent></MapsComponent>
 * ```
 */
export class MapsComponent extends Maps {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<MapsModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'layers': {'layer': {'markers': 'marker', 'bubbles': {'bubble': {'colorMappings': 'colorMapping'}}, 'navigationLines': 'navigationLine'}}, 'annotations': 'annotation'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<MapsModel & DefaultHtmlAttributes>;
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

applyMixins(MapsComponent, [ComponentBase, React.PureComponent]);
