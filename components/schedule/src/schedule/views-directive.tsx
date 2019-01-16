import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ViewsModel } from '@syncfusion/ej2-schedule';

export interface ViewsDirTypecast {
    dateHeaderTemplate?: string | Function | any;
    cellTemplate?: string | Function | any;
    eventTemplate?: string | Function | any;
    resourceHeaderTemplate?: string | Function | any;
}
/**
 * `ViewsDirective` represent a view of the react Schedule. 
 * It must be contained in a Schedule component(`SchduleComponent`). 
 * ```tsx
 * <ScheduleComponent>
 * <ViewsDirective>
 * <ViewDirective option='day' dateFormat='dd MMM'></ViewDirective>
 * <ViewDirective option='week'></ViewDirective>
 * <ViewsDirective>
 * </ScheduleComponent>
 * ```
 */
export class ViewDirective extends ComplexBase<ViewsModel| ViewsDirTypecast, ViewsModel| ViewsDirTypecast> {
    public static moduleName: string = 'view';
}

export class ViewsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'views';
    public static moduleName: string = 'views';
}