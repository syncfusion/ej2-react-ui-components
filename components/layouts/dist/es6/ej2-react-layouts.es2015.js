import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Splitter } from '@syncfusion/ej2-layouts';

/**
 * PanesDirective` represent a panes of the react splitter.
 * It must be contained in a Splitter component(`SplitterComponent`).
 * ```tsx
 * <SplitterComponent>
 *   <PaneSettingsDirective>
 *     <PaneDirective size={this.Pane1Size}></PaneDirective>
 *     <PaneDirective size={this.Pane2Size}></PaneDirective>
 *   <PaneSettingsDirective>
 * </SplitterComponent>
 * ```
 */
class PaneDirective extends ComplexBase {
}
PaneDirective.moduleName = 'pane';
class PanesDirective extends ComplexBase {
}
PanesDirective.propertyName = 'paneSettings';
PanesDirective.moduleName = 'panes';

/**
 * Represents the React Splitter Component
 * ```html
 * <Splitter></Splitter>
 * ```
 */
class SplitterComponent extends Splitter {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'panes': 'pane' };
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
applyMixins(SplitterComponent, [ComponentBase, PureComponent]);

export { PaneDirective, PanesDirective, SplitterComponent };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-react-layouts.es2015.js.map
