import * as React from 'react';
import { DateRangePicker, DateRangePickerModel } from '@syncfusion/ej2-calendars';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the Essential JS 2 React DateRangePicker Component.
 * ```ts
 * <DateRangePickerComponent startDate={date} endDate={date}></DateRangePickerComponent>
 * ```
 */
export class DateRangePickerComponent extends DateRangePicker {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DateRangePickerModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'presets': 'preset'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DateRangePickerModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('input', this.getDefaultAttributes());
        }

    }
}

applyMixins(DateRangePickerComponent, [ComponentBase, React.PureComponent]);
