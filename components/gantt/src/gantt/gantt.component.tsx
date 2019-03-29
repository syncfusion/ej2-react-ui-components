import * as React from 'react';
import { Gantt, GanttModel } from '@syncfusion/ej2-gantt';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface GanttTypecast {
    parentTaskbarTemplate?: string | Function | any;
    milestoneTemplate?: string | Function | any;
    taskbarTemplate?: string | Function | any;
    labelSettingsRightLabel?: string | Function | any;
    labelSettingsLeftLabel?: string | Function | any;
    labelSettingsTaskLabel?: string | Function | any;
    tooltipSettingsTaskbar?: string | Function | any;
    tooltipSettingsBaseline?: string | Function | any;
    tooltipSettingsConnectorLine?: string | Function | any;
    tooltipSettingsEditing?: string | Function | any;
}
/**
 * `GanttComponent` represents the react Gantt.
 * ```tsx
 * <GanttComponent dataSource={data} allowSelection={true} allowSorting={true}/>
 * ```
 */
export class GanttComponent extends Gantt {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<GanttModel & DefaultHtmlAttributes| GanttTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'columns': 'column', 'addDialogFields': 'addDialogField', 'editDialogFields': 'editDialogField', 'dayWorkingTimeCollection': 'dayWorkingTime', 'holidays': 'holiday', 'eventMarkers': 'eventMarker'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<GanttModel & DefaultHtmlAttributes| GanttTypecast>;
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

applyMixins(GanttComponent, [ComponentBase, React.PureComponent]);
