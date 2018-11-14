import * as React from 'react';
import { Diagram, DiagramModel } from '@syncfusion/ej2-diagrams';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react Diagram Component
 * ```tsx
 * <DiagramComponent></DiagramComponent>
 * ```
 */
export class DiagramComponent extends Diagram {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DiagramModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'layers': 'layer', 'connectors': {'connector': {'connectorAnnotations': 'connectorAnnotation'}}, 'nodes': {'node': {'nodeAnnotations': 'nodeAnnotation', 'ports': 'port'}}};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DiagramModel & DefaultHtmlAttributes>;
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

applyMixins(DiagramComponent, [ComponentBase, React.PureComponent]);
