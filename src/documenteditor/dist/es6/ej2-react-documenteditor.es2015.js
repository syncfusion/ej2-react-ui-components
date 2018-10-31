import { PureComponent, createElement } from 'react';
import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents react Document Editor Component
 * ```ts
 * <DocumentEditorComponent></DocumentEditorComponent>
 * ```
 */
class DocumentEditorComponent extends DocumentEditor {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
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
applyMixins(DocumentEditorComponent, [ComponentBase, PureComponent]);

export { DocumentEditorComponent };
export * from '@syncfusion/ej2-documenteditor';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-documenteditor.es2015.js.map
