import { ComplexBase } from '@syncfusion/ej2-react-base';
import { MarkerSettingsModel } from '@syncfusion/ej2-maps';

export interface MarkerSettingsDirTypecast {
    template?: string | Function;
}
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
export class MarkerDirective extends ComplexBase<MarkerSettingsModel| MarkerSettingsDirTypecast, MarkerSettingsModel| MarkerSettingsDirTypecast> {
    public static moduleName: string = 'marker';
}

export class MarkersDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'markerSettings';
    public static moduleName: string = 'markers';
}