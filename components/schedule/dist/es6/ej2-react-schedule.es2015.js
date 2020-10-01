import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { RecurrenceEditor, Schedule } from '@syncfusion/ej2-schedule';

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
class ViewDirective extends ComplexBase {
}
ViewDirective.moduleName = 'view';
ViewDirective.complexTemplate = { 'timeScaleMinorSlotTemplate': 'timeScale.minorSlotTemplate', 'timeScaleMajorSlotTemplate': 'timeScale.majorSlotTemplate', 'groupHeaderTooltipTemplate': 'group.headerTooltipTemplate' };
class ViewsDirective extends ComplexBase {
}
ViewsDirective.propertyName = 'views';
ViewsDirective.moduleName = 'views';

/**
 * `ResourcesDirective` represent a resource of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 * <ResourcesDirective>
 * <ResourceDirective field='RoomId' name='Rooms'></ResourceDirective>
 * <ResourceDirective field='OwnerId' name='Owners'></ResourceDirective>
 * <ResourcesDirective>
 * </ScheduleComponent>
 * ```
 */
class ResourceDirective extends ComplexBase {
}
ResourceDirective.moduleName = 'resource';
class ResourcesDirective extends ComplexBase {
}
ResourcesDirective.propertyName = 'resources';
ResourcesDirective.moduleName = 'resources';

/**
 * `HeaderRowsDirective` represent a header rows of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 *  <HeaderRowsDirective>
 *   <HeaderRowDirective option='Week'></HeaderRowDirective>
 *   <HeaderRowDirective option='Date'></HeaderRowDirective>
 *  <HeaderRowsDirective>
 * </ScheduleComponent>
 * ```
 */
class HeaderRowDirective extends ComplexBase {
}
HeaderRowDirective.moduleName = 'headerRow';
class HeaderRowsDirective extends ComplexBase {
}
HeaderRowsDirective.propertyName = 'headerRows';
HeaderRowsDirective.moduleName = 'headerRows';

/**
 * `ScheduleComponent` represents the react Schedule.
 * ```tsx
 * <ScheduleComponent/>
 * ```
 */
class ScheduleComponent extends Schedule {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'views': 'view', 'resources': 'resource', 'headerRows': 'headerRow' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(ScheduleComponent, [ComponentBase, Component]);

/**
 * `RecurrenceEditorComponent` represents the react RecurrenceEditor.
 * ```tsx
 * <RecurrenceEditorComponent/>
 * ```
 */
class RecurrenceEditorComponent extends RecurrenceEditor {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(RecurrenceEditorComponent, [ComponentBase, Component]);

export { ViewDirective, ViewsDirective, ResourceDirective, ResourcesDirective, HeaderRowDirective, HeaderRowsDirective, ScheduleComponent, RecurrenceEditorComponent };
export * from '@syncfusion/ej2-schedule';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-schedule.es2015.js.map
