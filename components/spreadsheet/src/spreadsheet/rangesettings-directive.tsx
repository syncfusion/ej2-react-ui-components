import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RangeSettingModel } from '@syncfusion/ej2-spreadsheet';


/**
 * `RangeSettingDirective` represent a range setting of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RangeSettingsDirective>
 *    <RangeSettingDirective dataSource={data}></RangeSettingDirective>
 *    </RangeSettingsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
export class RangeSettingDirective extends ComplexBase<RangeSettingModel, RangeSettingModel> {
    public static moduleName: string = 'rangeSetting';
}

export class RangeSettingsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'rangeSettings';
    public static moduleName: string = 'rangeSettings';
}
