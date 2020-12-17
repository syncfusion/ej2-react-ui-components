import { Component, Fragment, createElement } from 'react';
import { Calendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker } from '@syncfusion/ej2-calendars';
import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents the Essential JS 2 React Calendar Component.
 * ```ts
 * <CalendarComponent value={date}></CalendarComponent>
 * ```
 */
class CalendarComponent extends Calendar {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
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
applyMixins(CalendarComponent, [ComponentBase, Component]);

/**
 * Represents the Essential JS 2 React DatePicker Component.
 * ```ts
 * <DatePickerComponent value={date}></DatePickerComponent>
 * ```
 */
class DatePickerComponent extends DatePicker {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    }
}
applyMixins(DatePickerComponent, [ComponentBase, Component]);

/**
 * Represents the Essential JS 2 React TimePicker Component.
 * ```html
 * <TimePickerComponent value={value}></TimePickerComponent>
 * ```
 */
class TimePickerComponent extends TimePicker {
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
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    }
}
applyMixins(TimePickerComponent, [ComponentBase, Component]);

/**
 * `PresetsDirective` represent a presets of the react daterangepicker.
 * It must be contained in a daterangepicker component(`DateRangePickerComponent`).
 * ```tsx
 * <DateRangePickerComponent id='range'>
 * <PresetsDirective>
 * <PresetDirective label='Last Week' start={new Date('06/07/2018')} end= {new Date('06/01/2018')}></PresetDirective>
 * <PresetDirective label='Last Month' start={new Date('06/07/2018')} end= {new Date('05/07/2018')]></PresetDirective>
 * </PresetsDirective>
 * </DateRangePickerComponent>
 * ```
 */
class PresetDirective extends ComplexBase {
}
PresetDirective.moduleName = 'preset';
class PresetsDirective extends ComplexBase {
}
PresetsDirective.propertyName = 'presets';
PresetsDirective.moduleName = 'presets';

/**
 * Represents the Essential JS 2 React DateRangePicker Component.
 * ```ts
 * <DateRangePickerComponent startDate={date} endDate={date}></DateRangePickerComponent>
 * ```
 */
class DateRangePickerComponent extends DateRangePicker {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'presets': 'preset' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    }
}
applyMixins(DateRangePickerComponent, [ComponentBase, Component]);

/**
 * Represents the Essential JS 2 React DateTimePicker Component.
 * ```ts
 * <DateTimePickerComponent value={dateTime}></DateTimePickerComponent>
 * ```
 */
class DateTimePickerComponent extends DateTimePicker {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    }
}
applyMixins(DateTimePickerComponent, [ComponentBase, Component]);

export { CalendarComponent, DatePickerComponent, TimePickerComponent, PresetDirective, PresetsDirective, DateRangePickerComponent, DateTimePickerComponent };
export * from '@syncfusion/ej2-calendars';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-calendars.es2015.js.map
