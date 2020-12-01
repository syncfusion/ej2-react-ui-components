import { Children, Component, PureComponent, createElement } from 'react';
import { extend, getTemplateEngine, getValue, isNullOrUndefined, isObject, setTemplateEngine, setValue } from '@syncfusion/ej2-base';
import { createPortal } from 'react-dom';

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
var delayUpdate = ['accordion', 'tab', 'splitter'];
// tslint:disable
var ComponentBase = /** @__PURE__ @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attrKeys = [];
        _this.cachedTimeOut = 0;
        _this.isAppendCalled = false;
        _this.initRenderCalled = false;
        _this.isReactForeceUpdate = false;
        _this.isReact = true;
        return _this;
    }
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.componentDidMount = function () {
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        // tslint:disable-next-line:no-any
        this.renderReactComponent();
        if (this.portals && this.portals.length) {
            this.renderReactTemplates();
        }
    };
    ComponentBase.prototype.renderReactComponent = function () {
        var ele = this.reactElement;
        if (ele) {
            this.isAppendCalled = true;
            this.appendTo(ele);
        }
    };
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    // tslint:disable-next-line:no-any
    /**
     * @private
     */
    ComponentBase.prototype.shouldComponentUpdate = function (nextProps) {
        if (!this.initRenderCalled) {
            this.updateProperties(nextProps, true);
            return true;
        }
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(this.reactElement);
        }
        this.updateProperties(nextProps);
        return true;
    };
    /**
     * @private
     */
    ComponentBase.prototype.updateProperties = function (nextProps, silent) {
        var _this = this;
        var dProps = extend({}, nextProps);
        var keys = Object.keys(nextProps);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var propkey = keys_1[_i];
            var isClassName = propkey === 'className';
            if (propkey === 'children') {
                continue;
            }
            if (!isClassName && !isNullOrUndefined(this.htmlattributes[propkey]) &&
                this.htmlattributes[propkey] !== dProps[propkey]) {
                this.htmlattributes[propkey] = dProps[propkey];
            }
            if (this.compareValues(this.props[propkey], nextProps[propkey])) {
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
        // tslint:disable-next-line:no-any
        if (this.initRenderCalled && (this.canDelayUpdate || this.props.delayUpdate)) {
            setTimeout(function () {
                _this.refreshProperties(dProps, nextProps, silent);
            });
        }
        else {
            this.refreshProperties(dProps, nextProps, silent);
        }
    };
    ComponentBase.prototype.refreshProperties = function (dProps, nextProps, silent) {
        if (Object.keys(dProps).length) {
            if (!silent) {
                // tslint:disable-next-line:no-any
                this.processComplexTemplate(dProps, this);
            }
            this.setProperties(dProps, silent);
        }
        this.refreshChild(silent, nextProps);
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
        var _this = this;
        this.isReact = true;
        var propKeys = Object.keys(this.props);
        if (!this.htmlattributes) {
            this.htmlattributes = {};
        }
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (var _i = 0, propKeys_1 = propKeys; _i < propKeys_1.length; _i++) {
            var prop = propKeys_1[_i];
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                if (this.htmlattributes[prop] !== this.props[prop]) {
                    this.htmlattributes[prop] = this.props[prop];
                }
            }
        }
        if (!this.htmlattributes.ref) {
            /* tslint:disable:no-any */
            this.htmlattributes.ref = function (ele) {
                _this.reactElement = ele;
            };
            var keycompoentns = ['autocomplete', 'combobox', 'dropdownlist', 'dropdowntree', 'multiselect',
                'listbox', 'colorpicker', 'numerictextbox', 'textbox',
                'uploader', 'maskedtextbox', 'slider', 'datepicker', 'datetimepicker', 'daterangepicker', 'timepicker'];
            if (keycompoentns.indexOf(this.getModuleName()) !== -1) {
                this.htmlattributes.key = '' + ComponentBase.reactUid;
                ComponentBase.reactUid++;
            }
        }
        return this.htmlattributes;
    };
    /* tslint:disable:no-any */
    ComponentBase.prototype.trigger = function (eventName, eventProp, successHandler) {
        var _this = this;
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
            if (eventName === 'created') {
                setTimeout(function () {
                    if (!_this.isDestroyed) {
                        _this.modelObserver.notify(eventName, eventProp, successHandler);
                    }
                });
            }
            else {
                this.modelObserver.notify(eventName, eventProp, successHandler);
            }
            this.isProtectedOnChange = prevDetection;
        }
    };
    ComponentBase.prototype.compareValues = function (value1, value2) {
        var typeVal = typeof value1;
        var typeVal2 = typeof value2;
        if (typeVal === typeVal2) {
            if (value1 === value2) {
                return true;
            }
            if ((!isNullOrUndefined(value1) && value1.constructor) !== (!isNullOrUndefined(value2) && value2.constructor)) {
                return false;
            }
            if (value1 instanceof Date ||
                value1 instanceof RegExp ||
                value1 instanceof String ||
                value1 instanceof Number) {
                return value1.toString() === value2.toString();
            }
            if (isObject(value1) || Array.isArray(value1)) {
                var tempVal = value1;
                var tempVal2 = value2;
                if (isObject(tempVal)) {
                    tempVal = [value1];
                    tempVal2 = [value2];
                }
                return this.compareObjects(tempVal, tempVal2).status;
            }
        }
        return false;
    };
    ComponentBase.prototype.compareObjects = function (oldProps, newProps, propName) {
        var status = true;
        var lenSimilarity = (oldProps.length === newProps.length);
        var diffArray = [];
        if (lenSimilarity) {
            for (var i = 0, len = newProps.length; i < len; i++) {
                var curObj = {};
                var oldProp = oldProps[i];
                var newProp = newProps[i];
                var keys = Object.keys(newProp);
                for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                    var key = keys_2[_i];
                    var oldValue = oldProp[key];
                    var newValue = newProp[key];
                    if (!oldProp.hasOwnProperty(key) || !this.compareValues(newValue, oldValue)) {
                        if (!propName) {
                            return { status: false };
                        }
                        status = false;
                        curObj[key] = newValue;
                    }
                }
                if (Object.keys(curObj).length) {
                    diffArray.push({ index: i, value: curObj, key: propName });
                }
            }
        }
        else {
            status = false;
        }
        return { status: status, changedProperties: diffArray };
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
            var changedProps = [];
            var directiveValue = this.validateChildren({}, this.directivekeys, (props || this.props));
            if (directiveValue && Object.keys(directiveValue).length) {
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
                        if (!directiveValue.hasOwnProperty(key)) {
                            continue;
                        }
                        var compareOutput = this.compareObjects(this.prevProperties[key], directiveValue[key], key);
                        if (compareOutput.status) {
                            delete directiveValue[key];
                        }
                        else {
                            if (compareOutput.changedProperties.length) {
                                changedProps = changedProps.concat(compareOutput.changedProperties);
                            }
                            var obj = {};
                            obj[key] = directiveValue[key];
                            this.prevProperties = extend(this.prevProperties, obj);
                        }
                    }
                }
                else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                if (changedProps.length) {
                    for (var _c = 0, changedProps_1 = changedProps; _c < changedProps_1.length; _c++) {
                        var changes = changedProps_1[_c];
                        var propInstance = getValue(changes.key + '.' + changes.index, this);
                        if (propInstance && propInstance.setProperties) {
                            propInstance.setProperties(changes.value);
                        }
                        else {
                            extend(propInstance, changes.value);
                        }
                    }
                }
                else {
                    this.setProperties(directiveValue, silent);
                }
            }
        }
    };
    ComponentBase.prototype.componentWillUnmount = function () {
        clearTimeout(this.cachedTimeOut);
        // tslint:disable-next-line:no-any
        if (this.initRenderCalled) {
            this.destroy();
        }
    };
    // tslint:disable:no-any 
    ComponentBase.prototype.renderReactTemplates = function (callback) {
        this.isReactForeceUpdate = true;
        if (callback) {
            this.forceUpdate(callback);
        }
        else {
            this.forceUpdate();
        }
        this.isReactForeceUpdate = false;
    };
    
    // tslint:disable:no-any 
    ComponentBase.prototype.clearTemplate = function (templateNames, index, callback) {
        var _this = this;
        var tempPortal = [];
        if (templateNames && templateNames.length) {
            Array.prototype.forEach.call(templateNames, function (propName) {
                var indexCount = 0;
                var propIndexCount = 0;
                _this.portals.forEach(function (portal) {
                    if (portal.propName === propName) {
                        tempPortal.push(propIndexCount);
                        propIndexCount++;
                    }
                });
                if (index && _this.portals[tempPortal[index[indexCount]]].propName == propName) {
                    _this.portals.splice(index, 1);
                    indexCount++;
                }
                else {
                    for (var i = 0; i < _this.portals.length; i++) {
                        if (_this.portals[i].propName == propName) {
                            _this.portals.splice(i, 1);
                            i--;
                        }
                    }
                }
            });
        }
        else {
            this.portals = [];
        }
        this.renderReactTemplates(callback);
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
    /**
     * @private
     */
    ComponentBase.reactUid = 1;
    return ComponentBase;
}(Component));

/* tslint:enable:no-any */

// tslint:disable-next-line:no-any
function applyMixins(derivedClass, baseClass) {
    // tslint:disable:typedef
    baseClass.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            if (name !== 'isMounted' && name !== 'replaceState') {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
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
        return function (data, component, prop, element) {
            var actTemplate = templateElement;
            var actData = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = extend({}, data, templateElement.data || {});
            }
            var cEle;
            if (element) {
                cEle = element;
            }
            else {
                cEle = document.createElement('div');
            }
            var rele = createElement(actTemplate, actData);
            var portal = createPortal(rele, cEle);
            portal.propName = prop;
            if (!component.portals) {
                component.portals = [portal];
            }
            else {
                component.portals.push(portal);
            }
            // ReactDOM.render((actTemplate as Function)(actData), ele);
            // detach(ele);
            if (!element) {
                return [cEle];
            }
        };
    }
}
setTemplateEngine({ compile: compile });

/**
 * index for component base
 */

export { ComponentBase, applyMixins, ComplexBase, Inject, compile };
//# sourceMappingURL=ej2-react-base.es5.js.map
