import { PureComponent, createElement } from 'react';
import { ListView } from '@syncfusion/ej2-lists';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents ListView component for React
 * ```
 * <ListViewComponent dataSource={data}/>
 * ```
 */
class ListViewComponent extends ListView {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = false;
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
applyMixins(ListViewComponent, [ComponentBase, PureComponent]);

export { ListViewComponent };
export * from '@syncfusion/ej2-lists';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-lists.es2015.js.map
