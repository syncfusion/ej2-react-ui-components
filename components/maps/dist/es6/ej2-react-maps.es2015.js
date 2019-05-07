import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Maps } from '@syncfusion/ej2-maps';

/**
 * `LayersDirective` directive represent a layers of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective></LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
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
 * `MarkerSettingsDirective` directive represent a marker settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <MarkersDirective>
 * <MarkerDirective></MarkerDirective>
 * </MarkersDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
class MarkerDirective extends ComplexBase {
}
MarkerDirective.moduleName = 'marker';
MarkerDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
class MarkersDirective extends ComplexBase {
}
MarkersDirective.propertyName = 'markerSettings';
MarkersDirective.moduleName = 'markers';

/**
 * `BubblesDirective` directive represent a bubble settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <BubbleDirective></BubbleDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
class BubbleDirective extends ComplexBase {
}
BubbleDirective.moduleName = 'bubble';
BubbleDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
class BubblesDirective extends ComplexBase {
}
BubblesDirective.propertyName = 'bubbleSettings';
BubblesDirective.moduleName = 'bubbles';

/**
 * `ColorMappingDirective` directive to configure the color mapping of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <BubblesDirective>
 * <ColorMappingsDirective>
 * <ColorMappingDirective></ColorMappingDirective>
 * </ColorMappingsDirective>
 * </BubblesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
class ColorMappingDirective extends ComplexBase {
}
ColorMappingDirective.moduleName = 'colorMapping';
class ColorMappingsDirective extends ComplexBase {
}
ColorMappingsDirective.propertyName = 'colorMapping';
ColorMappingsDirective.moduleName = 'colorMappings';

/**
 * `NavigationLinesDirective` directive represent a bubble settings of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <NavigationLinesDirective>
 * <NavigationLineDirective></NavigationLineDirective>
 * </NavigationLinesDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
class NavigationLineDirective extends ComplexBase {
}
NavigationLineDirective.moduleName = 'navigationLine';
NavigationLineDirective.complexTemplate = { 'tooltipSettingsTemplate': 'tooltipSettings.template' };
class NavigationLinesDirective extends ComplexBase {
}
NavigationLinesDirective.propertyName = 'navigationLineSettings';
NavigationLinesDirective.moduleName = 'navigationLines';

/**
 * `AnnotationsDirective` directive represent a annotation of the react maps.
 * It must be contained in a Maps component(`MapsComponent`).
 * ```tsx
 * <MapsComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </MapsComponent>
 * ```
 */
class AnnotationDirective extends ComplexBase {
}
AnnotationDirective.moduleName = 'annotation';
class AnnotationsDirective extends ComplexBase {
}
AnnotationsDirective.propertyName = 'annotations';
AnnotationsDirective.moduleName = 'annotations';

/**
 * Represents react Maps Component
 * ```tsx
 * <MapsComponent></MapsComponent>
 * ```
 */
class MapsComponent extends Maps {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'layers': { 'layer': { 'markers': 'marker', 'bubbles': { 'bubble': { 'colorMappings': 'colorMapping' } }, 'navigationLines': 'navigationLine' } }, 'annotations': 'annotation' };
        this.checkTemplate = true;
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
applyMixins(MapsComponent, [ComponentBase, PureComponent]);

export { LayerDirective, LayersDirective, MarkerDirective, MarkersDirective, BubbleDirective, BubblesDirective, ColorMappingDirective, ColorMappingsDirective, NavigationLineDirective, NavigationLinesDirective, AnnotationDirective, AnnotationsDirective, MapsComponent };
export * from '@syncfusion/ej2-maps';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-maps.es2015.js.map
