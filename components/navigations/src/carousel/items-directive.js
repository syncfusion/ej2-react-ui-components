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
 * `CarouselItemDirective` represent a item of the React Carousel.
 * It must be contained in a Carousel component(`CarouselComponent`).
 * ```tsx
 * <CarouselComponent>
 *   <CarouselItemsDirective>
 *    <CarouselItemDirective template='#item1'></CarouselItemDirective>
 *    <CarouselItemDirective template='#item2'></CarouselItemDirective>
 *   </CarouselItemsDirective>
 * </CarouselComponent>
 * ```
 */
var CarouselItemDirective = /** @class */ (function (_super) {
    __extends(CarouselItemDirective, _super);
    function CarouselItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselItemDirective.moduleName = 'carouselItem';
    return CarouselItemDirective;
}(ComplexBase));
export { CarouselItemDirective };
var CarouselItemsDirective = /** @class */ (function (_super) {
    __extends(CarouselItemsDirective, _super);
    function CarouselItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselItemsDirective.propertyName = 'items';
    CarouselItemsDirective.moduleName = 'carouselItems';
    return CarouselItemsDirective;
}(ComplexBase));
export { CarouselItemsDirective };
