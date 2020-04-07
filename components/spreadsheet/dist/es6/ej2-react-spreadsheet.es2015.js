import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';

/**
 * `SheetDirective` represent a sheet of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective></SheetDirective>
 *    <SheetDirective></SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
class SheetDirective extends ComplexBase {
}
SheetDirective.moduleName = 'sheet';
class SheetsDirective extends ComplexBase {
}
SheetsDirective.propertyName = 'sheets';
SheetsDirective.moduleName = 'sheets';

/**
 * `RowDirective` represent a row of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective></RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
class RowDirective extends ComplexBase {
}
RowDirective.moduleName = 'row';
class RowsDirective extends ComplexBase {
}
RowsDirective.propertyName = 'rows';
RowsDirective.moduleName = 'rows';

/**
 * `CellDirective` represent a cell of the React Spreadsheet.
 * It must be contained in a `RowDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <RowsDirective>
 *    <RowDirective>
 *    <CellsDirective>
 *    <CellDirective value='A1'></CellDirective>
 *    </CellsDirective>
 *    </RowDirective>
 *    </RowsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
class CellDirective extends ComplexBase {
}
CellDirective.moduleName = 'cell';
class CellsDirective extends ComplexBase {
}
CellsDirective.propertyName = 'cells';
CellsDirective.moduleName = 'cells';

/**
 * `ColumnDirective` represent a column of the React Spreadsheet.
 * It must be contained in a `SheetDirective`.
 * ```tsx
 * <SpreadsheetComponent>
 *   <SheetsDirective>
 *    <SheetDirective>
 *    <ColumnsDirective>
 *    <ColumnDirective width='100'></ColumnDirective>
 *    </ColumnsDirective>
 *    </SheetDirective>
 *   </SheetsDirective>
 * </SpreadsheetComponent>
 * ```
 */
class ColumnDirective extends ComplexBase {
}
ColumnDirective.moduleName = 'column';
class ColumnsDirective extends ComplexBase {
}
ColumnsDirective.propertyName = 'columns';
ColumnsDirective.moduleName = 'columns';

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
class RangeDirective extends ComplexBase {
}
RangeDirective.moduleName = 'range';
class RangesDirective extends ComplexBase {
}
RangesDirective.propertyName = 'ranges';
RangesDirective.moduleName = 'ranges';

/**
 * `DefinedNameDirective` represent a defined name of the React Spreadsheet.
 * It must be contained in a Spreadsheet component(`SpreadsheetComponent`).
 * ```tsx
 * <SpreadsheetComponent>
 *   <DefinedNamesDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *    <DefinedNameDirective></DefinedNameDirective>
 *   </DefinedNamesDirective>
 * </SpreadsheetComponent>
 * ```
 */
class DefinedNameDirective extends ComplexBase {
}
DefinedNameDirective.moduleName = 'definedName';
class DefinedNamesDirective extends ComplexBase {
}
DefinedNamesDirective.propertyName = 'definedNames';
DefinedNamesDirective.moduleName = 'definedNames';

/**
 * `SpreadsheetComponent` represents the react Spreadsheet.
 * ```tsx
 * <SpreadsheetComponent />
 * ```
 */
class SpreadsheetComponent extends Spreadsheet {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'sheets': { 'sheet': { 'rows': { 'row': { 'cells': 'cell' } }, 'columns': 'column', 'ranges': 'range' } }, 'definedNames': 'definedName' };
        this.immediateRender = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(SpreadsheetComponent, [ComponentBase, PureComponent]);

export { SheetDirective, SheetsDirective, RowDirective, RowsDirective, CellDirective, CellsDirective, ColumnDirective, ColumnsDirective, RangeDirective, RangesDirective, DefinedNameDirective, DefinedNamesDirective, SpreadsheetComponent };
export * from '@syncfusion/ej2-spreadsheet';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-spreadsheet.es2015.js.map
