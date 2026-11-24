import { ComplexBase } from '@syncfusion/ej2-react-base';
import { FormControlModel } from '@syncfusion/ej2-spreadsheet';


/**
 * `FormControlDirective` represent a formcontrol of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```ts
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <FormControlsDirective>
 *    <FormControlDirective></FormControlDirective>
 *    </FormControlsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
export class FormControlDirective extends ComplexBase<FormControlModel & { children?: React.ReactNode }, FormControlModel> {
    public static moduleName: string = 'formControl';
}

export class FormControlsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'formControls';
    public static moduleName: string = 'formControls';
}
