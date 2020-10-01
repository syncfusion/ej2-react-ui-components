import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';

/**
 * `ButtonDirective` represent a button of the react dialog.
 * It must be contained in a Dialog component(`DialogComponent`).
 * ```tsx
 * <DialogComponent showCloseIcon={true}>
 *   <ButtonsDirective>
 *     <DialogbuttonDirective buttonModal={this.okButton}></DialogbuttonDirective>
 *     <DialogbuttonDirective buttonModal={this.cancelButton}></DialogbuttonDirective>
 *   <ButtonsDirective>
 * </DialogComponent>
 * ```
 */
class DialogButtonDirective extends ComplexBase {
}
DialogButtonDirective.moduleName = 'dialogButton';
class ButtonsDirective extends ComplexBase {
}
ButtonsDirective.propertyName = 'buttons';
ButtonsDirective.moduleName = 'buttons';

/**
 * Represents the React Dialog Component
 * ```html
 * <Dialog></Dialog>
 * ```
 */
class DialogComponent extends Dialog {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'buttons': 'dialogButton' };
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
applyMixins(DialogComponent, [ComponentBase, Component]);

/**
 * Represents the React Tooltip component that displays a piece of information about the target element on mouse hover.
 * ```html
 * <Tooltip content='Tooltip content'>Show Tooltip</Tooltip>
 * ```
 */
class TooltipComponent extends Tooltip {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(TooltipComponent, [ComponentBase, Component]);

export { DialogButtonDirective, ButtonsDirective, DialogComponent, TooltipComponent };
export * from '@syncfusion/ej2-popups';
//# sourceMappingURL=ej2-react-popups.es2015.js.map
