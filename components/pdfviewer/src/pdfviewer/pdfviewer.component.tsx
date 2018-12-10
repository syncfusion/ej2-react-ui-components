import * as React from 'react';
import { PdfViewer, PdfViewerModel } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `Represents the react PdfViewer Component.
 * ```tsx
 * <PdfViewerComponent />
 * ```
 */
export class PdfViewerComponent extends PdfViewer {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PdfViewerModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PdfViewerModel & DefaultHtmlAttributes>;
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

applyMixins(PdfViewerComponent, [ComponentBase, React.PureComponent]);
