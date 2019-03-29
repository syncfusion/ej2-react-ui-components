import { ComplexBase } from '@syncfusion/ej2-react-base';
import { NavigationLineSettingsModel } from '@syncfusion/ej2-maps';

export interface NavigationLineSettingsDirTypecast {
    tooltipSettingsTemplate?: string | Function | any;
}
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
export class NavigationLineDirective extends ComplexBase<NavigationLineSettingsModel| NavigationLineSettingsDirTypecast, NavigationLineSettingsModel| NavigationLineSettingsDirTypecast> {
    public static moduleName: string = 'navigationLine';
    public static complexTemplate: Object = {'tooltipSettingsTemplate': 'tooltipSettings.template'};
}

export class NavigationLinesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'navigationLineSettings';
    public static moduleName: string = 'navigationLines';
}