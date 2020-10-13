import { Component, createElement } from 'react';
import { DocumentEditor, DocumentEditorContainer } from '@syncfusion/ej2-documenteditor';
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
        this.immediateRender = true;
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
applyMixins(DocumentEditorComponent, [ComponentBase, Component]);

/**
 * Represents react Document Editor Container
 * ```ts
 * <DocumentEditorContainer></DocumentEditorContainer>
 * ```
 */
class DocumentEditorContainerComponent extends DocumentEditorContainer {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
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
applyMixins(DocumentEditorContainerComponent, [ComponentBase, Component]);

export { DocumentEditorComponent, DocumentEditorContainerComponent };
export * from '@syncfusion/ej2-documenteditor';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-documenteditor.es2015.js.map
