import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { DashboardLayout, Splitter } from '@syncfusion/ej2-layouts';

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
applyMixins(SplitterComponent, [ComponentBase, Component]);

/**
 * `PanelsDirective` represent a presets of the react dashboardlayout.
 * It must be contained in a dashboardlayout component(`DashBoardLayoutComponent`).
 * ```tsx
 * <DashBoardLayoutComponent>
 * <PanelsDirective>
 * <PanelDirective></PanelDirective>
 * <PanelDirective></PanelDirective>
 * </PanelsDirective>
 * </DashBoardLayoutComponent>
 * ```
 */
class PanelDirective extends ComplexBase {
}
PanelDirective.moduleName = 'panel';
PanelDirective.complexTemplate = { 'panelsHeader': 'panels.header', 'panelsContent': 'panels.content' };
class PanelsDirective extends ComplexBase {
}
PanelsDirective.propertyName = 'panels';
PanelsDirective.moduleName = 'panels';

/**
 * Represents the Essential JS 2 React DashboardLayout Component.
 * ```ts
 * <DashBoardLayoutComponent></DashBoardLayoutComponent>
 * ```
 */
class DashboardLayoutComponent extends DashboardLayout {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'panels': 'panel' };
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
applyMixins(DashboardLayoutComponent, [ComponentBase, Component]);

export { PaneDirective, PanesDirective, SplitterComponent, PanelDirective, PanelsDirective, DashboardLayoutComponent };
export * from '@syncfusion/ej2-layouts';
//# sourceMappingURL=ej2-react-layouts.es2015.js.map
