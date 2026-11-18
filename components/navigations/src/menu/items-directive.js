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
var MenuItemDirective = /** @class */ (function (_super) {
    __extends(MenuItemDirective, _super);
    function MenuItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemDirective.moduleName = 'menuItem';
    return MenuItemDirective;
}(ComplexBase));
export { MenuItemDirective };
var MenuItemsDirective = /** @class */ (function (_super) {
    __extends(MenuItemsDirective, _super);
    function MenuItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemsDirective.propertyName = 'items';
    MenuItemsDirective.moduleName = 'menuItems';
    return MenuItemsDirective;
}(ComplexBase));
export { MenuItemsDirective };
