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
import { ComplexBase } from '@syncfusion/ej2-react-base';
/**
 * `StepDirective` represents a step of the React Stepper.
 * It must be contained in a Stepper component(`StepperComponent`).
 * ```tsx
 * <StepperComponent>
 *  <StepsDirective>
 *   <StepDirective iconCss= { 'e-icons e-folder' } text= { 'Step 1' } />
 *   <StepDirective iconCss= { 'e-icons e-folder' } text= { 'Step 2' } />
 *  </StepsDirective>
 * </StepperComponent>
 * ```
 */
var StepDirective = /** @class */ (function (_super) {
    __extends(StepDirective, _super);
    function StepDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepDirective.moduleName = 'step';
    return StepDirective;
}(ComplexBase));
export { StepDirective };
var StepsDirective = /** @class */ (function (_super) {
    __extends(StepsDirective, _super);
    function StepsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepsDirective.propertyName = 'steps';
    StepsDirective.moduleName = 'steps';
    return StepsDirective;
}(ComplexBase));
export { StepsDirective };
