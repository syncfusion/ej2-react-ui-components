import { ComplexBase } from '@syncfusion/ej2-react-base';
import { StackedColumnModel } from '@syncfusion/ej2-treegrid';

export interface StackedColumnDirTypecast {
    template?: string | Function | any;
    headerTemplate?: string | Function | any;
    filter?: any;
    filterTemplate?: string | Function | any;
    commandsTemplate?: string | Function | any;
    editTemplate?: string | Function | any;
}

export class StackedColumnDirective extends ComplexBase<StackedColumnModel| StackedColumnDirTypecast & { children?: React.ReactNode }, StackedColumnModel| StackedColumnDirTypecast> {
    public static moduleName: string = 'stackedColumn';
    public static complexTemplate: Object = {'filter.itemTemplate': 'filter.itemTemplate'};
}

export class StackedColumnsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'columns';
    public static moduleName: string = 'stackedColumns';
}
