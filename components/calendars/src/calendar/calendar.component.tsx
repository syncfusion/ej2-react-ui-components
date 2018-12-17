import * as React from 'react';
import { Calendar, CalendarModel } from '@syncfusion/ej2-calendars';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the Essential JS 2 React Calendar Component.
 * ```ts
 * <CalendarComponent value={date}></CalendarComponent>
 * ```
 */
export class CalendarComponent extends Calendar {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<CalendarModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<CalendarModel & DefaultHtmlAttributes>;
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
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(CalendarComponent, [ComponentBase, React.PureComponent]);
