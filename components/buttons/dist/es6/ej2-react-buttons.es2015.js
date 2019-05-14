import { PureComponent, createElement } from 'react';
import { Button, CheckBox, ChipList, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

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
        this.immediateRender = true;
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
        this.immediateRender = true;
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
        this.immediateRender = true;
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
        this.immediateRender = true;
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

/**
 * `ChipDirective` directive represent a chip of the React ChipList.
 * ```html
 * <ChipListComponent>
 *   <ChipsDirective>
 *    <ChipDirective text='chip1'></ChipDirective>
 *    <ChipDirective text='chip2'></ChipDirective>
 *   </ChipsDirective>
 * </ChipListComponent>
 * ```
 */
class ChipDirective extends ComplexBase {
}
ChipDirective.moduleName = 'chip';
class ChipsDirective extends ComplexBase {
}
ChipsDirective.propertyName = 'chips';
ChipsDirective.moduleName = 'chips';

/**
 * Represents the Essential JS 2 React ChipList Component.
 * ```ts
 * <ChipListComponent></ChipListComponent>
 * ```
 */
class ChipListComponent extends ChipList {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'chips': 'chip' };
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
applyMixins(ChipListComponent, [ComponentBase, PureComponent]);

export { ButtonComponent, CheckBoxComponent, RadioButtonComponent, SwitchComponent, ChipDirective, ChipsDirective, ChipListComponent };
export * from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-react-buttons.es2015.js.map
