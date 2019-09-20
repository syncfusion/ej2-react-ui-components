import * as React from 'react';
import { Schedule, ScheduleModel } from '@syncfusion/ej2-schedule';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ScheduleTypecast {
    dateHeaderTemplate?: string | Function | any;
    cellTemplate?: string | Function | any;
    cellHeaderTemplate?: string | Function | any;
    eventSettingsTooltipTemplate?: string | Function | any;
    eventSettingsTemplate?: string | Function | any;
    editorTemplate?: string | Function | any;
    timeScaleMinorSlotTemplate?: string | Function | any;
    timeScaleMajorSlotTemplate?: string | Function | any;
    resourceHeaderTemplate?: string | Function | any;
    quickInfoTemplatesHeader?: string | Function | any;
    quickInfoTemplatesContent?: string | Function | any;
    quickInfoTemplatesFooter?: string | Function | any;
    groupHeaderTooltipTemplate?: string | Function | any;
}
/**
 * `ScheduleComponent` represents the react Schedule.
 * ```tsx
 * <ScheduleComponent/>
 * ```
 */
export class ScheduleComponent extends Schedule {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ScheduleModel & DefaultHtmlAttributes| ScheduleTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'views': 'view', 'resources': 'resource', 'headerRows': 'headerRow'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ScheduleModel & DefaultHtmlAttributes| ScheduleTypecast>;
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

applyMixins(ScheduleComponent, [ComponentBase, React.PureComponent]);
