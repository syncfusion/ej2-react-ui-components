import { PureComponent, createElement } from 'react';
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
applyMixins(FileManagerComponent, [ComponentBase, PureComponent]);

export { FileManagerComponent };
export * from '@syncfusion/ej2-filemanager';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-filemanager.es2015.js.map
