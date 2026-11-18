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
 * `AccordionItemDirective` represent a item of the React Accordion.
 * It must be contained in a Accordion component(`AccordionComponent`).
 * ```tsx
 * <AccordionComponent>
 *   <AccordionItemsDirective>
 *    <AccordionItemDirective  header='Header1'></AccordionItemDirective>
 *    <AccordionItemDirective  header='Header2' content='Content2'></AccordionItemDirective>
 *   <AccordionItemsDirective>
 * </AccordionComponent>
 * ```
 */
var AccordionItemDirective = /** @class */ (function (_super) {
    __extends(AccordionItemDirective, _super);
    function AccordionItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionItemDirective.moduleName = 'accordionItem';
    return AccordionItemDirective;
}(ComplexBase));
export { AccordionItemDirective };
var AccordionItemsDirective = /** @class */ (function (_super) {
    __extends(AccordionItemsDirective, _super);
    function AccordionItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionItemsDirective.propertyName = 'items';
    AccordionItemsDirective.moduleName = 'accordionItems';
    return AccordionItemsDirective;
}(ComplexBase));
export { AccordionItemsDirective };
