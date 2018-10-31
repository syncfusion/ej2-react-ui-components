import { PureComponent, createElement } from 'react';
import { Button, CheckBox, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `ButtonComponent` represents the react Button Component.
 * ```ts
 * <ButtonComponent></ButtonComponent>
 * ```
 */
class ButtonComponent extends Button {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('button', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(ButtonComponent, [ComponentBase, PureComponent]);

/**
 * Represents the react CheckBox Component.
 * ```ts
 * <CheckBoxComponent label='Default'></CheckBoxComponent>
 * ```
 */
class CheckBoxComponent extends CheckBox {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(CheckBoxComponent, [ComponentBase, PureComponent]);

/**
 * Represents the react RadioButton Component.
 * ```ts
 * <RadioButtonComponent label='Default'></RadioButtonComponent>
 * ```
 */
class RadioButtonComponent extends RadioButton {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(RadioButtonComponent, [ComponentBase, PureComponent]);

/**
 * Represents the react Switch Component.
 * ```ts
 * <SwitchComponent></SwitchComponent>
 * ```
 */
class SwitchComponent extends Switch {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(SwitchComponent, [ComponentBase, PureComponent]);

export { ButtonComponent, CheckBoxComponent, RadioButtonComponent, SwitchComponent };
export * from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-react-buttons.es2015.js.map
