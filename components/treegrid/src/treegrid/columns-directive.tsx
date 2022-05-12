import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ColumnModel } from '@syncfusion/ej2-treegrid';

export interface ColumnDirTypecast {
    template?: string | Function | any;
    headerTemplate?: string | Function | any;
    filterItemTemplate?: string | Function | any;
    filterTemplate?: string | Function | any;
    commandsTemplate?: string | Function | any;
    editTemplate?: string | Function | any;
}
/**
 * `ColumnDirective` represent a column of the react TreeGrid. 
 * It must be contained in a TreeGrid component(`TreeGridComponent`). 
 * ```tsx
 * <TreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}> 
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * <ColumnsDirective>
 * </TreeGridComponent>
 * ```
 */
export class ColumnDirective extends ComplexBase<ColumnModel| ColumnDirTypecast & { children?: React.ReactNode }, ColumnModel| ColumnDirTypecast> {
    public static moduleName: string = 'column';
    public static complexTemplate: Object = {'filterItemTemplate': 'filter.itemTemplate'};
}

export class ColumnsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'columns';
    public static moduleName: string = 'columns';
}
