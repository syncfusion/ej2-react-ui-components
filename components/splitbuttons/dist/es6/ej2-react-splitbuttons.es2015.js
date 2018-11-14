import { PureComponent, createElement } from 'react';
import { DropDownButton, ProgressButton, SplitButton } from '@syncfusion/ej2-splitbuttons';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * `DropDownButtonComponent` represents the react DropDownButton Component.
 * ```ts
 * <DropDownButtonComponent content='DropDownButton'></DropDownButtonComponent>
 * ```
 */
class DropDownButtonComponent extends DropDownButton {
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
applyMixins(DropDownButtonComponent, [ComponentBase, PureComponent]);

/**
 * `SplitButtonComponent` represents the react SplitButton Component.
 * ```ts
 * <SplitButtonComponent content='Split Button'></SplitButtonComponent>
 * ```
 */
class SplitButtonComponent extends SplitButton {
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
applyMixins(SplitButtonComponent, [ComponentBase, PureComponent]);

/**
 * `ProgressButtonComponent` represents the react ProgressButton Component.
 * ```ts
 * <ProgressButtonComponent content='Progress Button'></ProgressButtonComponent>
 * ```
 */
class ProgressButtonComponent extends ProgressButton {
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
applyMixins(ProgressButtonComponent, [ComponentBase, PureComponent]);

export { DropDownButtonComponent, SplitButtonComponent, ProgressButtonComponent };
export * from '@syncfusion/ej2-splitbuttons';
//# sourceMappingURL=ej2-react-splitbuttons.es2015.js.map
