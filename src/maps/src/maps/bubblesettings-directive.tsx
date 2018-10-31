import { ComplexBase } from '@syncfusion/ej2-react-base';
import { BubbleSettingsModel } from '@syncfusion/ej2-maps';

export interface BubbleSettingsDirTypecast {
}
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
export class BubbleDirective extends ComplexBase<BubbleSettingsModel| BubbleSettingsDirTypecast, BubbleSettingsModel| BubbleSettingsDirTypecast> {
    public static moduleName: string = 'bubble';
}

export class BubblesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'bubbleSettings';
    public static moduleName: string = 'bubbles';
}