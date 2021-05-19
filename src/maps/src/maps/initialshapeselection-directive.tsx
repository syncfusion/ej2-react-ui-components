import { ComplexBase } from '@syncfusion/ej2-react-base';
import { InitialShapeSelectionSettingsModel } from '@syncfusion/ej2-maps';


/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the react maps. 
 * It must be contained in a Maps component(`MapsComponent`). 
 * ```tsx
 * <MapsComponent>
 * <LayersDirective>
 * <LayerDirective>
 * <initialShapeSelectionsDirective>
 * <initialShapeSelectionDirective></initialShapeSelectionDirective>
 * </initialShapeSelectionsDirective>
 * </LayerDirective>
 * </LayersDirective>
 * </MapsComponent>
 * ```
 */
export class InitialShapeSelectionDirective extends ComplexBase<InitialShapeSelectionSettingsModel, InitialShapeSelectionSettingsModel> {
    public static moduleName: string = 'initialShapeSelection';
}

export class InitialShapeSelectionsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'initialShapeSelection';
    public static moduleName: string = 'initialShapeSelections';
}
