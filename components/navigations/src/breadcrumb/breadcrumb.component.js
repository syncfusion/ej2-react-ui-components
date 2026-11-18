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
import { Breadcrumb } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
/**
 * `BreadcrumbComponent` represents the react Breadcrumb Component.
 * ```ts
 * <BreadcrumbComponent items={breadcrumbItems} />
 * ```
 */
var BreadcrumbComponent = /** @class */ (function (_super) {
    __extends(BreadcrumbComponent, _super);
    function BreadcrumbComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initRenderCalled = false;
        _this.checkInjectedModules = false;
        _this.directivekeys = { 'breadcrumbItems': 'breadcrumbItem' };
        _this.statelessTemplateProps = ["itemTemplate"];
        _this.templateProps = null;
        _this.immediateRender = false;
        _this.isReactMock = true;
        _this.portals = [];
        return _this;
    }
    BreadcrumbComponent.prototype.render = function () {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            _super.prototype.render.call(this);
            this.initRenderCalled = true;
        }
        else {
            return React.createElement('nav', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    };
    return BreadcrumbComponent;
}(Breadcrumb));
export { BreadcrumbComponent };
applyMixins(BreadcrumbComponent, [ComponentBase, React.Component]);
