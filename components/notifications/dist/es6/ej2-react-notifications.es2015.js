import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Toast } from '@syncfusion/ej2-notifications';

/**
 * `ButtonDirective` represent a button of the react Toast.
 * It must be contained in a Toast component(`ToastrComponent`).
 * ```tsx
 * <ToastComponent>
 * <ButtonsDirective>
 * <ButtonDirective content='Ok' isPrimary=true></ButtonDirective>
 * <ButtonDirective content='Cancel'></ButtonDirective>
 * <ButtonsDirective>
 * </ToastComponent>
 * ```
 */
class ButtonModelPropDirective extends ComplexBase {
}
ButtonModelPropDirective.moduleName = 'buttonModelProp';
class ButtonModelPropsDirective extends ComplexBase {
}
ButtonModelPropsDirective.propertyName = 'buttons';
ButtonModelPropsDirective.moduleName = 'buttonModelProps';

/**
 * Represents the React Toast Component
 * ```html
 * <Toast></Toast>
 * ```
 */
class ToastComponent extends Toast {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'buttonModelProps': 'buttonModelProp' };
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
applyMixins(ToastComponent, [ComponentBase, PureComponent]);

export { ButtonModelPropDirective, ButtonModelPropsDirective, ToastComponent };
export * from '@syncfusion/ej2-notifications';
//# sourceMappingURL=ej2-react-notifications.es2015.js.map
