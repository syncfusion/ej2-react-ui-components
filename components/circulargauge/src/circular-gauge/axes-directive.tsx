import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AxisModel } from '@syncfusion/ej2-circulargauge';


/**
 * `Axis` directive represent a axes of the react circular gauge. 
 * It must be contained in a CircularGauge component(`CircularGauge`). 
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
 * ```
 */
export class AxisDirective extends ComplexBase<AxisModel, AxisModel> {
    public static moduleName: string = 'axis';
}

export class AxesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'axes';
    public static moduleName: string = 'axes';
}