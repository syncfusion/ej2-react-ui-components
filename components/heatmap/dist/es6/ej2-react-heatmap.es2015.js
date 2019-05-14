import { PureComponent, createElement } from 'react';
import { HeatMap } from '@syncfusion/ej2-heatmap';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents react HeatMap Component
 * ```tsx
 * <HeatMapComponent></HeatMapComponent>
 * ```
 */
class HeatMapComponent extends HeatMap {
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
applyMixins(HeatMapComponent, [ComponentBase, PureComponent]);

export { HeatMapComponent };
export * from '@syncfusion/ej2-heatmap';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-heatmap.es2015.js.map
