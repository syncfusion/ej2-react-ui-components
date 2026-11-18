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
 * `BreadcrumbItemDirective` represent a item of the React Breadcrumb.
 * It must be contained in a Breadcrumb component(`BreadcrumbComponent`).
 * ```tsx
 * <BreadcrumbComponent>
 *   <BreadcrumbItemsDirective>
 *    <BreadcrumbItemDirective text='Home' url='/'></BreadcrumbItemDirective>
 *    <BreadcrumbItemDirective text='Index' url='./index'></BreadcrumbItemDirective>
 *   </BreadcrumbItemsDirective>
 * </BreadcrumbComponent>
 * ```
 */
var BreadcrumbItemDirective = /** @class */ (function (_super) {
    __extends(BreadcrumbItemDirective, _super);
    function BreadcrumbItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItemDirective.moduleName = 'breadcrumbItem';
    return BreadcrumbItemDirective;
}(ComplexBase));
export { BreadcrumbItemDirective };
var BreadcrumbItemsDirective = /** @class */ (function (_super) {
    __extends(BreadcrumbItemsDirective, _super);
    function BreadcrumbItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItemsDirective.propertyName = 'items';
    BreadcrumbItemsDirective.moduleName = 'breadcrumbItems';
    return BreadcrumbItemsDirective;
}(ComplexBase));
export { BreadcrumbItemsDirective };
