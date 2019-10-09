import { PureComponent, createElement } from 'react';
import { PdfViewer } from '@syncfusion/ej2-pdfviewer';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `Represents the react PdfViewer Component.
 * ```tsx
 * <PdfViewerComponent />
 * ```
 */
class PdfViewerComponent extends PdfViewer {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
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
applyMixins(PdfViewerComponent, [ComponentBase, PureComponent]);

export { PdfViewerComponent };
export * from '@syncfusion/ej2-pdfviewer';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-pdfviewer.es2015.js.map
