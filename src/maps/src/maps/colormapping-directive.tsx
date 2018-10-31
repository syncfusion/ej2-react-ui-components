import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ColorMappingSettingsModel } from '@syncfusion/ej2-maps';


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
export class ColorMappingDirective extends ComplexBase<ColorMappingSettingsModel, ColorMappingSettingsModel> {
    public static moduleName: string = 'colorMapping';
}

export class ColorMappingsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'colorMapping';
    public static moduleName: string = 'colorMappings';
}