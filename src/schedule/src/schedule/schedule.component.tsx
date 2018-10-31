import * as React from 'react';
import { Schedule, ScheduleModel } from '@syncfusion/ej2-schedule';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface ScheduleTypecast {
    dateHeaderTemplate?: string | Function;
    cellTemplate?: string | Function;
    editorTemplate?: string | Function;
    resourceHeaderTemplate?: string | Function;
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
