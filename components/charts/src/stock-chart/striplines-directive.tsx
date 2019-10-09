import { ComplexBase } from '@syncfusion/ej2-react-base';
import { StockChartStripLineSettingsModel } from '@syncfusion/ej2-charts';


/**
 * `StriplineDirective` directive represent a stripline of the react chart. 
 * It must be contained in a Chart component(`ChartComponent`). 
 * ```tsx
 * <StockChartComponent>
 * <StockChartAxesDirective>
 * <StockchartAxisDirective>
 * <StriplinesDirective>
 * <StriplineDirective></StriplineDirective>
 * </StriplinesDirective>
 * </StockChartAxisDirective>
 * </StockChartAxesDirective>
 * </StockChartComponent>
 * ```
 */
export class StockChartStripLineDirective extends ComplexBase<StockChartStripLineSettingsModel, StockChartStripLineSettingsModel> {
    public static moduleName: string = 'stockChartStripLine';
}

export class StockChartStripLinesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'stripLines';
    public static moduleName: string = 'stockChartStripLines';
}
