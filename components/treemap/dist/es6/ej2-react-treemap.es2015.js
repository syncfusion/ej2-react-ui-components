import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { TreeMap } from '@syncfusion/ej2-treemap';

/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * It must be contained in a TreeMap component(`TreeMapComponent`).
 * ```tsx
 * <TreeMapComponent>
 * <LevelsDirective>
 * <LevelDirective></LevelDirective>
 * </LevelsDirective>
 * </TreeMapComponent>
 * ```
 */
class LevelDirective extends ComplexBase {
}
LevelDirective.moduleName = 'level';
class LevelsDirective extends ComplexBase {
}
LevelsDirective.propertyName = 'levels';
LevelsDirective.moduleName = 'levels';

class ColorMappingDirective extends ComplexBase {
}
ColorMappingDirective.moduleName = 'colorMapping';
class ColorMappingsDirective extends ComplexBase {
}
ColorMappingsDirective.propertyName = 'colorMapping';
ColorMappingsDirective.moduleName = 'colorMappings';

/**
 * Represents react TreeMap Component
 * ```tsx
 * <TreeMapComponent></TreeMapComponent>
 * ```
 */
class TreeMapComponent extends TreeMap {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'levels': { 'level': { 'colorMappings': 'colorMapping' } } };
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
applyMixins(TreeMapComponent, [ComponentBase, Component]);

export { LevelDirective, LevelsDirective, ColorMappingDirective, ColorMappingsDirective, TreeMapComponent };
export * from '@syncfusion/ej2-treemap';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-treemap.es2015.js.map
