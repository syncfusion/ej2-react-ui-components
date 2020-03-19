import * as React from 'react';
import { Kanban, KanbanModel } from '@syncfusion/ej2-kanban';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface KanbanTypecast {
    tooltipTemplate?: string | Function | any;
    columnsTemplate?: string | Function | any;
    swimlaneSettingsTemplate?: string | Function | any;
    cardSettingsTemplate?: string | Function | any;
    dialogSettingsTemplate?: string | Function | any;
}
/**
 * `KanbanComponent` represents the react Kanban.
 * ```tsx
 * <KanbanComponent/>
 * ```
 */
export class KanbanComponent extends Kanban {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<KanbanModel & DefaultHtmlAttributes| KanbanTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'columns': 'column', 'stackedHeaders': 'stackedHeader'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<KanbanModel & DefaultHtmlAttributes| KanbanTypecast>;
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

applyMixins(KanbanComponent, [ComponentBase, React.PureComponent]);
