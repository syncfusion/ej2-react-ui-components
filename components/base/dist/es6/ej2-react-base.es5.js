import { Children, PureComponent } from 'react';
import { findDOMNode, render } from 'react-dom';
import { detach, extend, getTemplateEngine, getValue, isNullOrUndefined, setTemplateEngine, setValue } from '@syncfusion/ej2-base';

var __extends = (undefined && undefined.__extends) || (function () {
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
/**
 * React Component Base
 */
var defaulthtmlkeys = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type', 'name',
    'onClick', 'onFocus', 'onBlur'];
var delayUpdate = ['accordion', 'tab'];
// tslint:disable
var ComponentBase = /** @__PURE__ @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attrKeys = [];
        _this.cachedTimeOut = 0;
        _this.isAppendCalled = false;
        return _this;
    }
    ComponentBase.prototype.componentWillMount = function () {
        var propKeys = Object.keys(this.props);
        this.htmlattributes = {};
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var prop = propKeys_1[_i];
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                this.htmlattributes[prop] = this.props[prop];
            }
        }
    };
    ComponentBase.prototype.componentDidMount = function () {
        var _this = this;
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        var listName = ['textbox', 'input', 'maskedtextbox', 'numerictextbox', 'slider', 'button', 'calendar', 'datepicker', 'daterangepicker', 'datetimepicker', 'timepicker', 'check-box', 'radio-button', 'dropdown-btn', 'progress-btn', 'split-btn', 'contextmenu', 'sidebar', 'smithchart', 'sparkline'];
        if (listName.indexOf(this.getModuleName()) === -1) {
            this.cachedTimeOut = setTimeout(function () {
                _this.addClass();
            });
        }
        else {
            this.addClass();
        }
    };
    ComponentBase.prototype.addClass = function () {
        var ele = findDOMNode(this);
        if (ele) {
            this.isAppendCalled = true;
            this.appendTo(ele);
        }
    };
    ComponentBase.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(findDOMNode(this));
        }
        var dProps = extend({}, nextProps);
        var keys = Object.keys(nextProps);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var propkey = keys_1[_i];
            var isClassName = propkey === 'className';
            if (!isClassName && !isNullOrUndefined(this.htmlattributes[propkey]) &&
                this.htmlattributes[propkey] !== dProps[propkey]) {
                this.htmlattributes[propkey] = dProps[propkey];
            }
            if (this.props[propkey] === nextProps[propkey]) {
                delete dProps[propkey];
            }
            else if (this.attrKeys.indexOf(propkey) !== -1) {
                if (isClassName) {
                    this.element.classList.remove(this.props[propkey]);
                    this.element.classList.add(dProps[propkey]);
                }
                else if (propkey !== 'disabled') {
                    delete dProps[propkey];
                }
            }
        }
        if (dProps['children']) {
            delete dProps['children'];
        }
        if (this.canDelayUpdate) {
            setTimeout(function () {
                _this.refreshProperties(dProps, nextProps);
            });
        }
        else {
            this.refreshProperties(dProps, nextProps);
        }
    };
    ComponentBase.prototype.refreshProperties = function (dProps, nextProps) {
        if (Object.keys(dProps).length) {
            this.processComplexTemplate(dProps, this);
            this.setProperties(dProps);
        }
        this.refreshChild(false, nextProps);
    };
    ComponentBase.prototype.processComplexTemplate = function (curObject, context) {
        var compTemplate = context.complexTemplate;
        if (compTemplate) {
            for (var prop in compTemplate) {
                var PropVal = compTemplate[prop];
                if (curObject[prop]) {
                    setValue(PropVal, getValue(prop, curObject), curObject);
                }
            }
        }
    };
    ComponentBase.prototype.getDefaultAttributes = function () {
        return this.htmlattributes;
    };
    /* tslint:disable:no-any */
    ComponentBase.prototype.trigger = function (eventName, eventProp) {
        if (this.isDestroyed !== true) {
            if ((eventName === 'change' || eventName === 'input')) {
                if (this.props.onChange && eventProp.event) {
                    this.props.onChange.call(undefined, {
                        syntheticEvent: eventProp.event,
                        nativeEvent: { text: eventProp.value },
                        value: eventProp.value,
                        target: this
                    });
                }
            }
            var prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            this.modelObserver.notify(eventName, eventProp);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ComponentBase.prototype.compareObjects = function (oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    };
    ComponentBase.prototype.refreshChild = function (silent, props) {
        if (this.checkInjectedModules) {
            var prevModule = this.getInjectedModules() || [];
            var curModule = this.getInjectedServices() || [];
            for (var _i = 0, curModule_1 = curModule; _i < curModule_1.length; _i++) {
                var mod = curModule_1[_i];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.injectedModules = prevModule;
        }
        if (this.directivekeys) {
            var directiveValue = this.validateChildren({}, this.directivekeys, (props || this.props));
            if (directiveValue) {
                if (!silent && this.skipRefresh) {
                    for (var _a = 0, _b = this.skipRefresh; _a < _b.length; _a++) {
                        var fields = _b[_a];
                        delete directiveValue[fields];
                    }
                }
                if (this.prevProperties) {
                    var dKeys = Object.keys(this.prevProperties);
                    for (var i = 0; i < dKeys.length; i++) {
                        var key = dKeys[i];
                        if (this.compareObjects(this.prevProperties[key], directiveValue[key])) {
                            delete directiveValue[key];
                        }
                        else {
                            this.prevProperties = extend(this.prevProperties, directiveValue);
                        }
                    }
                }
                else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                this.setProperties(directiveValue, silent);
            }
        }
    };
    ComponentBase.prototype.componentWillUnmount = function () {
        this.destroy();
    };
    /* tslint:disable:no-any */
    ComponentBase.prototype.validateChildren = function (childCache, mapper, props) {
        var flag = false;
        var childs = Children.toArray(props.children);
        for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
            var child = childs_1[_i];
            var ifield = this.getChildType(child);
            var key = mapper[ifield];
            if (ifield && mapper) {
                // tslint:disable
                var childProps = this.getChildProps(Children.toArray(child.props.children), key);
                if (childProps.length) {
                    flag = true;
                    // tslint:disable
                    childCache[child.type.propertyName || ifield] = childProps;
                }
            }
        }
        if (flag) {
            return childCache;
        }
        return null;
    };
    // tslint:disable:no-any
    ComponentBase.prototype.getChildType = function (child) {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    };
    ComponentBase.prototype.getChildProps = function (subChild, matcher) {
        var ret = [];
        for (var _i = 0, subChild_1 = subChild; _i < subChild_1.length; _i++) {
            var child = subChild_1[_i];
            var accessProp = false;
            var key = void 0;
            if (typeof matcher === 'string') {
                accessProp = true;
                key = matcher;
            }
            else {
                key = Object.keys(matcher)[0];
            }
            var prop = child.props;
            // tslint:disable-next-line:no-any
            var field = this.getChildType(child);
            if (field === key) {
                if (accessProp || !prop.children) {
                    // tslint:disable
                    var cacheVal = extend({}, prop, {}, true);
                    // tslint:disable
                    this.processComplexTemplate(cacheVal, child.type);
                    ret.push(cacheVal);
                }
                else {
                    var cachedValue = this.validateChildren(extend({}, prop), matcher[key], prop) || prop;
                    if (cachedValue['children']) {
                        delete cachedValue['children'];
                    }
                    // tslint:disable
                    this.processComplexTemplate(cachedValue, child.type);
                    ret.push(cachedValue);
                }
            }
        }
        return ret;
    };
    // tslint:disable:no-any
    ComponentBase.prototype.getInjectedServices = function () {
        var childs = Children.toArray(this.props.children);
        for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
            var child = childs_2[_i];
            /* tslint:disable:no-any */
            if (child.type.isService) {
                return child.props.services;
            }
        }
        return [];
    };
    return ComponentBase;
}(PureComponent));

/* tslint:enable:no-any */

// tslint:disable-next-line:no-any
function applyMixins(derivedClass, baseClass) {
    // tslint:disable:typedef
    baseClass.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}

var __extends$1 = (undefined && undefined.__extends) || (function () {
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
/**
 * Directory base
 */
var ComplexBase = /** @__PURE__ @class */ (function (_super) {
    __extends$1(ComplexBase, _super);
    function ComplexBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexBase.prototype.render = function () {
        return null;
    };
    ComplexBase.isDirective = true;
    return ComplexBase;
}(PureComponent));

var __extends$2 = (undefined && undefined.__extends) || (function () {
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
/**
 * Dependency injection
 */
var Inject = /** @__PURE__ @class */ (function (_super) {
    __extends$2(Inject, _super);
    function Inject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tslint:disable-next-line:no-any
    Inject.prototype.render = function () {
        return null;
    };
    Inject.isService = true;
    return Inject;
}(PureComponent));

/**
 * Template compiler for react
 */
// tslint:disable:no-any
var stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    }
    else {
        return function (data) {
            var ele = document.createElement('div');
            document.body.appendChild(ele);
            var actTemplate = templateElement;
            var actData = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = extend({}, data, templateElement.data || {});
            }
            render(actTemplate(actData), ele);
            detach(ele);
            return ele.children;
        };
    }
}
setTemplateEngine({ compile: compile });

/**
 * index for component base
 */

export { ComponentBase, applyMixins, ComplexBase, Inject, compile };
//# sourceMappingURL=ej2-react-base.es5.js.map
