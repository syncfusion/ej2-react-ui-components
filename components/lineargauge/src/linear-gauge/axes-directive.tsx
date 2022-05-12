import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AxisModel } from '@syncfusion/ej2-lineargauge';


/**
 * `Axis` directive represent a axes of the react linear gauge. 
 * It must be contained in a LinearGauge component(`LinearGauge`). 
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
export class AxisDirective extends ComplexBase<AxisModel & { children?: React.ReactNode }, AxisModel> {
    public static moduleName: string = 'axis';
}

export class AxesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'axes';
    public static moduleName: string = 'axes';
}
