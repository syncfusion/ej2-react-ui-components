import { PureComponent, createElement } from 'react';
import { PivotFieldList, PivotView } from '@syncfusion/ej2-pivotview';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `PivotViewComponent` represents the react PivotView.
 * ```tsx
 * <PivotViewComponent/>
 * ```
 */
class PivotViewComponent extends PivotView {
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
applyMixins(PivotViewComponent, [ComponentBase, PureComponent]);

/**
 * `PivotFieldListComponent` represents the react PivotFieldList.
 * ```tsx
 * <PivotFieldListComponent/>
 * ```
 */
class PivotFieldListComponent extends PivotFieldList {
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
applyMixins(PivotFieldListComponent, [ComponentBase, PureComponent]);

export { PivotViewComponent, PivotFieldListComponent };
export * from '@syncfusion/ej2-pivotview';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-pivotview.es2015.js.map
