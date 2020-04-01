import * as React from 'react';
import { Spreadsheet, SpreadsheetModel } from '@syncfusion/ej2-spreadsheet';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface SpreadsheetTypecast {
    template?: string | Function | any;
}
/**
 * `SpreadsheetComponent` represents the react Spreadsheet.
 * ```tsx
 * <SpreadsheetComponent />
 * ```
 */
export class SpreadsheetComponent extends Spreadsheet {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<SpreadsheetModel & DefaultHtmlAttributes| SpreadsheetTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'sheets': {'sheet': {'rows': {'row': {'cells': 'cell'}}, 'columns': 'column', 'ranges': 'range'}}, 'definedNames': 'definedName'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<SpreadsheetModel & DefaultHtmlAttributes| SpreadsheetTypecast>;
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

applyMixins(SpreadsheetComponent, [ComponentBase, React.PureComponent]);
