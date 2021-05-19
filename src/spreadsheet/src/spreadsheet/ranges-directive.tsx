import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeModel } from '@syncfusion/ej2-spreadsheet';

export interface RangeDirTypecast {
    template?: string | Function | any;
}
/**
 * `RangeDirective` represent a range of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RangesDirective>
 *    <RangeDirective dataSource={data}></RangeDirective>
 *    </RangesDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
export class RangeDirective extends ComplexBase<RangeModel| RangeDirTypecast, RangeModel| RangeDirTypecast> {
    public static moduleName: string = 'range';
}

export class RangesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'ranges';
    public static moduleName: string = 'ranges';
}
