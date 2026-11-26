import * as React from 'react';
import { PdfComparer, PdfComparerModel } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `Represents the react PdfComparer Component.
 * ```ts
 * <PdfComparerComponent />
 * ```
 */
export class PdfComparerComponent extends PdfComparer {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PdfComparerModel | DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private statelessTemplateProps: string[] = null;
    private templateProps: string[] = null;
    private immediateRender: boolean = true;
    private isReactMock: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PdfComparerModel | DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public portals: any = [];
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };
    constructor(props: any) {
        super(props);
    }

    public render(): any {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !(this as any).isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(),[].concat(this.props.children,this.portals));
        }

    }
}

applyMixins(PdfComparerComponent, [ComponentBase, React.Component]);
