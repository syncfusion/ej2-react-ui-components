import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PointerModel } from '@syncfusion/ej2-lineargauge';


/**
 * `Pointers` directive represent a pointers of the react linear gauge. 
 * It must be contained in a LinearGauge component(`LinearGauge`). 
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export class PointerDirective extends ComplexBase<PointerModel, PointerModel> {
    public static moduleName: string = 'pointer';
}

export class PointersDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'pointers';
    public static moduleName: string = 'pointers';
}
