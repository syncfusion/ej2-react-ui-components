import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Gantt } from '@syncfusion/ej2-gantt';

/**
 * `ColumnDirective` represent a column of the react Gantt.
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='150'></ColumnDirective>
 * <ColumnDirective field='taskName' headerText='Task Name' width='200'></ColumnDirective>
 * </ColumnsDirective>
 * </GanttComponent>
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
 * `AddDialogFieldDirective` represent a add dialog fields of the react Gantt.
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <AddDialogFieldsDirective>
 * <AddDialogFieldDirective type='General' headerText='General'></AddDialogFieldDirective>
 * <AddDialogFieldDirective type='Dependency' headerText='Dependency'></AddDialogFieldDirective>
 * </AddDialogFieldsDirective>
 * </GanttComponent>
 * ```
 */
class AddDialogFieldDirective extends ComplexBase {
}
AddDialogFieldDirective.moduleName = 'addDialogField';
class AddDialogFieldsDirective extends ComplexBase {
}
AddDialogFieldsDirective.propertyName = 'addDialogFields';
AddDialogFieldsDirective.moduleName = 'addDialogFields';

/**
 * `EditDialogFieldDirective` represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <EditDialogFieldsDirective>
 * <EditDialogFieldDirective type='General' headerText='General'></EditDialogFieldDirective>
 * <EditDialogFieldDirective type='Dependency' headerText='Dependency'></EditDialogFieldDirective>
 * </EditDialogFieldsDirective>
 * </GanttComponent>
 * ```
 */
class EditDialogFieldDirective extends ComplexBase {
}
EditDialogFieldDirective.moduleName = 'editDialogField';
class EditDialogFieldsDirective extends ComplexBase {
}
EditDialogFieldsDirective.propertyName = 'editDialogFields';
EditDialogFieldsDirective.moduleName = 'editDialogFields';

/**
 * `DayWorkingTimeDirective` represent a working time ranges in a day.
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <DayWorkingTimeCollection>
 * <DayWorkingTime from='8' to='12'></DayWorkingTimeCollection>
 * <DayWorkingTime from='13' to='17'></DayWorkingTimeCollection>
 * </DayWorkingTimeCollection>
 * </GanttComponent>
 * ```
 */
class DayWorkingTimeDirective extends ComplexBase {
}
DayWorkingTimeDirective.moduleName = 'dayWorkingTime';
class DayWorkingTimeCollectionDirective extends ComplexBase {
}
DayWorkingTimeCollectionDirective.propertyName = 'dayWorkingTime';
DayWorkingTimeCollectionDirective.moduleName = 'dayWorkingTimeCollection';

/**
 * `HolidaysDirective` represent a holidays collection in Gantt..
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <HolidaysDirective>
 * <HolidayDirective from='02/20/2018' label='Holiday 1'></HolidayDirective>
 * <HolidayDirective from='05/15/2018' label='Holiday 2'></HolidayDirective>
 * </HolidaysDirective>
 * </GanttComponent>
 * ```
 */
class HolidayDirective extends ComplexBase {
}
HolidayDirective.moduleName = 'holiday';
class HolidaysDirective extends ComplexBase {
}
HolidaysDirective.propertyName = 'holidays';
HolidaysDirective.moduleName = 'holidays';

/**
 * `EventMarkersDirective` represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`GanttComponent`).
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}>
 * <EventMarkersDirective>
 * <EventMarkerDirective day='02/10/2018' label='Project Starts'></EventMarkerDirective>
 * </EventMarkersDirective>
 * </GanttComponent>
 * ```
 */
class EventMarkerDirective extends ComplexBase {
}
EventMarkerDirective.moduleName = 'eventMarker';
class EventMarkersDirective extends ComplexBase {
}
EventMarkersDirective.propertyName = 'eventMarkers';
EventMarkersDirective.moduleName = 'eventMarkers';

/**
 * `GanttComponent` represents the react Gantt.
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}/>
 * ```
 */
class GanttComponent extends Gantt {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'columns': 'column', 'addDialogFields': 'addDialogField', 'editDialogFields': 'editDialogField', 'dayWorkingTimeCollection': 'dayWorkingTime', 'holidays': 'holiday', 'eventMarkers': 'eventMarker' };
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
applyMixins(GanttComponent, [ComponentBase, PureComponent]);

export { ColumnDirective, ColumnsDirective, AddDialogFieldDirective, AddDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionDirective, HolidayDirective, HolidaysDirective, EventMarkerDirective, EventMarkersDirective, GanttComponent };
export * from '@syncfusion/ej2-gantt';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-gantt.es2015.js.map
