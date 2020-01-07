import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Diagram, Overview, SymbolPalette } from '@syncfusion/ej2-diagrams';

/**
 * `Layers Directive` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <LayersDirective>
 * <LayerDirective></LayerDirective>
 * </LayersDirective>
 * </DiagramComponent>
 * ```
 */
class LayerDirective extends ComplexBase {
}
LayerDirective.moduleName = 'layer';
class LayersDirective extends ComplexBase {
}
LayersDirective.propertyName = 'layers';
LayersDirective.moduleName = 'layers';

/**
 * `custormaps Directive` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <CustormapsDirective>
 * <CustormapDirective></CustormapDirective>
 * </CustormapsDirective>
 * </DiagramComponent>
 * ```
 */
class CustomCursorDirective extends ComplexBase {
}
CustomCursorDirective.moduleName = 'customCursor';
class CustomCursorsDirective extends ComplexBase {
}
CustomCursorsDirective.propertyName = 'customCursor';
CustomCursorsDirective.moduleName = 'customCursors';

/**
 * `ConnectorsDirective` directive represent a connectors of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective></ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
class ConnectorDirective extends ComplexBase {
}
ConnectorDirective.moduleName = 'connector';
class ConnectorsDirective extends ComplexBase {
}
ConnectorsDirective.propertyName = 'connectors';
ConnectorsDirective.moduleName = 'connectors';

/**
 * `Annotation` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective>
 * <ConnectorAnnotationsDirective>
 * <ConnectorAnnotationDirective>
 * </ConnectorAnnotationDirective>
 * </ConnectorAnnotationsDirective>
 * </ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
class ConnectorAnnotationDirective extends ComplexBase {
}
ConnectorAnnotationDirective.moduleName = 'connectorAnnotation';
class ConnectorAnnotationsDirective extends ComplexBase {
}
ConnectorAnnotationsDirective.propertyName = 'annotations';
ConnectorAnnotationsDirective.moduleName = 'connectorAnnotations';

/**
 * `NodesDirective` directive represent a nodes of the react diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective></NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
class NodeDirective extends ComplexBase {
}
NodeDirective.moduleName = 'node';
class NodesDirective extends ComplexBase {
}
NodesDirective.propertyName = 'nodes';
NodesDirective.moduleName = 'nodes';

/**
 * `Node` directive represent a annotation of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeAnnotationsDirective>
 * <NodeAnnotationDirective>
 * </NodeAnnotationDirective>
 * </NodeAnnotationsDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
class NodeAnnotationDirective extends ComplexBase {
}
NodeAnnotationDirective.moduleName = 'nodeAnnotation';
class NodeAnnotationsDirective extends ComplexBase {
}
NodeAnnotationsDirective.propertyName = 'annotations';
NodeAnnotationsDirective.moduleName = 'nodeAnnotations';

/**
 * `Node` directive represent a port of the react Diagram.
 * It must be contained in a Diagram component(`DiagramComponent`).
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <PortCollectionDirective>
 * <PortDirective>
 * </PortDirective>
 * </PortCollectionDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
class PortDirective extends ComplexBase {
}
PortDirective.moduleName = 'port';
class PortsDirective extends ComplexBase {
}
PortsDirective.propertyName = 'ports';
PortsDirective.moduleName = 'ports';

/**
 * Represents react Diagram Component
 * ```tsx
 * <DiagramComponent></DiagramComponent>
 * ```
 */
class DiagramComponent extends Diagram {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'layers': 'layer', 'customCursors': 'customCursor', 'connectors': { 'connector': { 'connectorAnnotations': 'connectorAnnotation' } }, 'nodes': { 'node': { 'nodeAnnotations': 'nodeAnnotation', 'ports': 'port' } } };
        this.immediateRender = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(DiagramComponent, [ComponentBase, PureComponent]);

/**
 * `Palette` directive represent a axis palette of the react SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```tsx
 * <SymbolPaletteComponent>
 * <PalettesDirective>
 * <PaletteDirective></PaletteDirective>
 * </PalettesDirective>
 * </SymbolPaletteComponent>
 * ```
 */
class PaletteDirective extends ComplexBase {
}
PaletteDirective.moduleName = 'palette';
class PalettesDirective extends ComplexBase {
}
PalettesDirective.propertyName = 'palettes';
PalettesDirective.moduleName = 'palettes';

/**
 * Represents react SymbolPalette Component
 * ```tsx
 * <SymbolPaletteComponent></SymbolPaletteComponent>
 * ```
 */
class SymbolPaletteComponent extends SymbolPalette {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'palettes': 'palette' };
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(SymbolPaletteComponent, [ComponentBase, PureComponent]);

/**
 * Represents react Overview Component
 * ```tsx
 * <OverviewComponent></OverviewComponent>
 * ```
 */
class OverviewComponent extends Overview {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(OverviewComponent, [ComponentBase, PureComponent]);

export { LayerDirective, LayersDirective, CustomCursorDirective, CustomCursorsDirective, ConnectorDirective, ConnectorsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsDirective, NodeDirective, NodesDirective, NodeAnnotationDirective, NodeAnnotationsDirective, PortDirective, PortsDirective, DiagramComponent, PaletteDirective, PalettesDirective, SymbolPaletteComponent, OverviewComponent };
export * from '@syncfusion/ej2-diagrams';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-diagrams.es2015.js.map
