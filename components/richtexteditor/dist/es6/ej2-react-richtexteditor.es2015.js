import { PureComponent, createElement } from 'react';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `RichTextEditor` represents the react RichTextEditor.
 * ```tsx
 * <RichTextEditor/>
 * ```
 */
class RichTextEditorComponent extends RichTextEditor {
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
applyMixins(RichTextEditorComponent, [ComponentBase, PureComponent]);

export { RichTextEditorComponent };
export * from '@syncfusion/ej2-richtexteditor';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-richtexteditor.es2015.js.map
