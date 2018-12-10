import { PureComponent, createElement } from 'react';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `InPlaceEditor` represents the react InPlaceEditor.
 * ```tsx
 * <InPlaceEditor />
 * ```
 */
class InPlaceEditorComponent extends InPlaceEditor {
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
applyMixins(InPlaceEditorComponent, [ComponentBase, PureComponent]);

export { InPlaceEditorComponent };
export * from '@syncfusion/ej2-inplace-editor';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-inplaceeditor.es2015.js.map
