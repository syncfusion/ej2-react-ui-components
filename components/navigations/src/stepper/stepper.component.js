var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Stepper } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * `StepperComponent` represents the react Stepper Component.
 * ```ts
 * <StepperComponent steps={stepItems} />
 * ```
 */
var StepperComponent = /** @class */ (function (_super) {
    __extends(StepperComponent, _super);
    function StepperComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'steps': 'step' };
        _this.statelessTemplateProps = null;
        _this.templateProps = null;
        _this.immediateRender = false;
        _this.isReactMock = true;
        _this.portals = [];
        return _this;
    }
    StepperComponent.prototype.render = function () {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('nav', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return StepperComponent;
}(Stepper));
export { StepperComponent };
applyMixins(StepperComponent, [ComponentBase, React.Component]);
