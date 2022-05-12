import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PointerModel } from '@syncfusion/ej2-circulargauge';


/**
 * `Pointers` directive represent a pointers of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`). 
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export class PointerDirective extends ComplexBase<PointerModel & { children?: React.ReactNode }, PointerModel> {
    public static moduleName: string = 'pointer';
}

export class PointersDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'pointers';
    public static moduleName: string = 'pointers';
}
