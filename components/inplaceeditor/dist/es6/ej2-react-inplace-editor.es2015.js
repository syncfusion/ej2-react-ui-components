import { Component, createElement } from 'react';
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
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(InPlaceEditorComponent, [ComponentBase, Component]);

export { InPlaceEditorComponent };
export * from '@syncfusion/ej2-inplace-editor';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-inplace-editor.es2015.js.map
