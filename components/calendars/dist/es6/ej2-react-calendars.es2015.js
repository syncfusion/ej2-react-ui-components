import { PureComponent, createElement } from 'react';
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
        this.checkInjectedModules = false;
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
applyMixins(CalendarComponent, [ComponentBase, PureComponent]);

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
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(DatePickerComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(TimePickerComponent, [ComponentBase, PureComponent]);

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
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(DateRangePickerComponent, [ComponentBase, PureComponent]);

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
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(DateTimePickerComponent, [ComponentBase, PureComponent]);

export { CalendarComponent, DatePickerComponent, TimePickerComponent, PresetDirective, PresetsDirective, DateRangePickerComponent, DateTimePickerComponent };
export * from '@syncfusion/ej2-calendars';
//# sourceMappingURL=ej2-react-calendars.es2015.js.map
