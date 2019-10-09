import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeModel } from '@syncfusion/ej2-lineargauge';


/**
 * `Ranges` directive represent a ranges of the react linear gauge. 
 * It must be contained in a LinearGauge component(`LinearGauge`). 
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export class RangeDirective extends ComplexBase<RangeModel, RangeModel> {
    public static moduleName: string = 'range';
}

export class RangesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'ranges';
    public static moduleName: string = 'ranges';
}
