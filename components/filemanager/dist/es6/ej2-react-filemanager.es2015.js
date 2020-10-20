import { Component, createElement } from 'react';
import { FileManager } from '@syncfusion/ej2-filemanager';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 Represents the Essential JS 2 react FileManager Component.
 * ```tsx
 * <FileManagerComponent showThumbnail={false}></FileManagerComponent>
 * ```
 */
class FileManagerComponent extends FileManager {
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
applyMixins(FileManagerComponent, [ComponentBase, Component]);

export { FileManagerComponent };
export * from '@syncfusion/ej2-filemanager';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-filemanager.es2015.js.map
