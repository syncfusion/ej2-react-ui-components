import { ComplexBase } from '@syncfusion/ej2-react-base';
import { LayerSettingsModel } from '@syncfusion/ej2-maps';


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
export class LayerDirective extends ComplexBase<LayerSettingsModel & { children?: React.ReactNode }, LayerSettingsModel> {
    public static moduleName: string = 'layer';
}

export class LayersDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'layers';
    public static moduleName: string = 'layers';
}
