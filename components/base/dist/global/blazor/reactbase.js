window.sf = window.sf || {};
window.sf.reactbase = (function (exports) {
'use strict';

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
var ComponentBase = /** @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attrKeys = [];
        _this.cachedTimeOut = 0;
        _this.isAppendCalled = false;
        _this.initRenderCalled = false;
        _this.isReact = true;
        return _this;
    }
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount
    // tslint:disable-next-line:no-any
    /**
     * @private
     */
    ComponentBase.prototype.UNSAFE_componentWillMount = function () {
        this.isReact = true;
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
        // tslint:disable-next-line:no-any
        if (this.props.immediateRender) {
            this.renderReactComponent();
        }
        else {
            this.cachedTimeOut = setTimeout(function () {
                _this.renderReactComponent();
            });
        }
    };
    ComponentBase.prototype.renderReactComponent = function () {
        var ele = ReactDOM.findDOMNode(this);
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
    ComponentBase.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (!this.initRenderCalled) {
            this.updateProperties(nextProps, true);
            return;
        }
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(ReactDOM.findDOMNode(this));
        }
        this.updateProperties(nextProps);
    };
    /**
     * @private
     */
    ComponentBase.prototype.updateProperties = function (nextProps, silent) {
        var _this = this;
        var dProps = sf.base.extend({}, nextProps);
        var keys = Object.keys(nextProps);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var propkey = keys_1[_i];
            var isClassName = propkey === 'className';
            if (!isClassName && !sf.base.isNullOrUndefined(this.htmlattributes[propkey]) &&
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
                    sf.base.setValue(PropVal, sf.base.getValue(prop, curObject), curObject);
                }
            }
        }
    };
    ComponentBase.prototype.getDefaultAttributes = function () {
        return this.htmlattributes;
    };
    /* tslint:disable:no-any */
    ComponentBase.prototype.trigger = function (eventName, eventProp, successHandler) {
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
            this.modelObserver.notify(eventName, eventProp, successHandler);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ComponentBase.prototype.compareValues = function (value1, value2) {
        var typeVal = typeof value1;
        var typeVal2 = typeof value2;
        if (typeVal === typeVal2) {
            if (value1.constructor !== value2.constructor) {
                return false;
            }
            if (value1 === value2) {
                return true;
            }
            if (value1 instanceof Date ||
                value1 instanceof RegExp ||
                value1 instanceof String ||
                value1 instanceof Number ||
                typeVal === 'function') {
                return value1.tostring === value2.tostring;
            }
            if (sf.base.isObject(value1) || Array.isArray(value1)) {
                var tempVal = value1;
                var tempVal2 = value2;
                if (sf.base.isObject(tempVal)) {
                    tempVal = [value1];
                    tempVal2 = [value2];
                }
                return this.compareObjects(tempVal, tempVal2).status;
            }
        }
        return false;
    };
    ComponentBase.prototype.compareObjects = function (oldProps, newProps, propName) {
        var status;
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
                            this.prevProperties = sf.base.extend(this.prevProperties, obj);
                        }
                    }
                }
                else {
                    this.prevProperties = sf.base.extend({}, directiveValue, {}, true);
                }
                if (changedProps.length) {
                    for (var _c = 0, changedProps_1 = changedProps; _c < changedProps_1.length; _c++) {
                        var changes = changedProps_1[_c];
                        var propInstance = sf.base.getValue(changes.key + '.' + changes.index, this);
                        if (propInstance && propInstance.setProperties) {
                            propInstance.setProperties(changes.value);
                        }
                        else {
                            sf.base.extend(propInstance, changes.value);
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
    /* tslint:disable:no-any */
    ComponentBase.prototype.validateChildren = function (childCache, mapper, props) {
        var flag = false;
        var childs = React.Children.toArray(props.children);
        for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
            var child = childs_1[_i];
            var ifield = this.getChildType(child);
            var key = mapper[ifield];
            if (ifield && mapper) {
                // tslint:disable
                var childProps = this.getChildProps(React.Children.toArray(child.props.children), key);
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
                    var cacheVal = sf.base.extend({}, prop, {}, true);
                    // tslint:disable
                    this.processComplexTemplate(cacheVal, child.type);
                    ret.push(cacheVal);
                }
                else {
                    var cachedValue = this.validateChildren(sf.base.extend({}, prop), matcher[key], prop) || prop;
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
        var childs = React.Children.toArray(this.props.children);
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
}(React.PureComponent));

/* tslint:enable:no-any */

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
 * React Component Base
 */
// tslint:disable
var ComponentBaseHybrid = /** @class */ (function (_super) {
    __extends$1(ComponentBaseHybrid, _super);
    function ComponentBaseHybrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attrKeys = [];
        _this.cachedTimeOut = 0;
        _this.isAppendCalled = false;
        _this.isReact = true;
        return _this;
    }
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount
    // tslint:disable-next-line:no-any
    /**
     * @private
     */
    ComponentBaseHybrid.prototype.UNSAFE_componentWillMount = function () {
        this.isReact = true;
    };
    /* tslint:disable:no-any */
    ComponentBaseHybrid.prototype.generateReactElements = function (ele) {
        var childrens = ele.children;
        if (childrens && childrens.length) {
            var childObject = [];
            for (var i = 0, length_1 = childrens.length; i < length_1; i++) {
                var child = childrens[i];
                if (typeof (child) === 'string') {
                    childObject.push(child);
                }
                else {
                    if (!child.tagName) {
                        if (child.template) {
                            childObject.push(React.createElement(child.template, child.data || {}));
                        }
                    }
                    else {
                        childObject.push(this.generateReactElements(child));
                    }
                }
            }
            return React.createElement(ele.tagName, ele.attributes, childObject);
        }
        else {
            return React.createElement(ele.tagName, ele.attributes);
        }
    };
    ComponentBaseHybrid.prototype.componentDidMount = function () {
        if (this.mount) {
            this.mount();
        }
    };
    ComponentBaseHybrid.prototype.componentDidUpdate = function () {
        this.currentContext(this.currentContext.calls, this.currentContext.args);
    };
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    // tslint:disable-next-line:no-any
    /**
     * @private
     */
    ComponentBaseHybrid.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(ReactDOM.findDOMNode(this));
        }
        var dProps = sf.base.extend({}, nextProps);
        var keys = Object.keys(nextProps);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var propkey = keys_1[_i];
            var isClassName = propkey === 'className';
            if (!isClassName && !sf.base.isNullOrUndefined(this.htmlattributes[propkey]) &&
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
        // tslint:disable-next-line:no-any
        if (this.canDelayUpdate || this.props.delayUpdate) {
            setTimeout(function () {
                _this.refreshProperties(dProps, nextProps);
            });
        }
        else {
            this.refreshProperties(dProps, nextProps);
        }
    };
    ComponentBaseHybrid.prototype.refreshProperties = function (dProps, nextProps) {
        if (Object.keys(dProps).length) {
            // tslint:disable-next-line:no-any
            this.processComplexTemplate(dProps, this);
            this.setProperties(dProps);
        }
        this.refreshChild(false, nextProps);
    };
    ComponentBaseHybrid.prototype.processComplexTemplate = function (curObject, context) {
        var compTemplate = context.complexTemplate;
        if (compTemplate) {
            for (var prop in compTemplate) {
                var PropVal = compTemplate[prop];
                if (curObject[prop]) {
                    sf.base.setValue(PropVal, sf.base.getValue(prop, curObject), curObject);
                }
            }
        }
    };
    /* tslint:disable:no-any */
    ComponentBaseHybrid.prototype.trigger = function (eventName, eventProp, successHandler) {
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
            this.modelObserver.notify(eventName, eventProp, successHandler);
            this.isProtectedOnChange = prevDetection;
        }
    };
    ComponentBaseHybrid.prototype.compareObjects = function (oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    };
    ComponentBaseHybrid.prototype.refreshChild = function (silent, props) {
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
                            var obj = {};
                            obj[key] = directiveValue[key];
                            this.prevProperties = sf.base.extend(this.prevProperties, obj);
                        }
                    }
                }
                else {
                    this.prevProperties = sf.base.extend({}, directiveValue, {}, true);
                }
                this.setProperties(directiveValue, silent);
            }
        }
    };
    ComponentBaseHybrid.prototype.componentWillUnmount = function () {
        clearTimeout(this.cachedTimeOut);
        this.destroy();
    };
    /* tslint:disable:no-any */
    ComponentBaseHybrid.prototype.validateChildren = function (childCache, mapper, props) {
        var flag = false;
        var childs = React.Children.toArray(props.children);
        for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
            var child = childs_1[_i];
            var ifield = this.getChildType(child);
            var key = mapper[ifield];
            if (ifield && mapper) {
                // tslint:disable
                var childProps = this.getChildProps(React.Children.toArray(child.props.children), key);
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
    ComponentBaseHybrid.prototype.getChildType = function (child) {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    };
    ComponentBaseHybrid.prototype.getChildProps = function (subChild, matcher) {
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
                    var cacheVal = sf.base.extend({}, prop, {}, true);
                    // tslint:disable
                    this.processComplexTemplate(cacheVal, child.type);
                    ret.push(cacheVal);
                }
                else {
                    var cachedValue = this.validateChildren(sf.base.extend({}, prop), matcher[key], prop) || prop;
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
    ComponentBaseHybrid.prototype.getInjectedServices = function () {
        var childs = React.Children.toArray(this.props.children);
        for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
            var child = childs_2[_i];
            /* tslint:disable:no-any */
            if (child.type.isService) {
                return child.props.services;
            }
        }
        return [];
    };
    return ComponentBaseHybrid;
}(React.PureComponent));

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
 * Directory base
 */
var ComplexBase = /** @class */ (function (_super) {
    __extends$2(ComplexBase, _super);
    function ComplexBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexBase.prototype.render = function () {
        return null;
    };
    ComplexBase.isDirective = true;
    return ComplexBase;
}(React.PureComponent));

var __extends$3 = (undefined && undefined.__extends) || (function () {
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
var Inject = /** @class */ (function (_super) {
    __extends$3(Inject, _super);
    function Inject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tslint:disable-next-line:no-any
    Inject.prototype.render = function () {
        return null;
    };
    Inject.isService = true;
    return Inject;
}(React.PureComponent));

/**
 * Template compiler for react
 */
// tslint:disable:no-any
var stringCompiler = sf.base.getTemplateEngine();
function compile(templateElement, helper) {
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    }
    else {
        return function (data, component) {
            var actTemplate = templateElement;
            var actData = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = sf.base.extend({}, data, templateElement.data || {});
            }
            if (component && component.isReactHybrid) {
                return [{ template: actTemplate, data: data }];
            }
            else {
                var ele = document.createElement('div');
                document.body.appendChild(ele);
                ReactDOM.render(actTemplate(actData), ele);
                sf.base.detach(ele);
                return ele.children;
            }
        };
    }
}
sf.base.setTemplateEngine({ compile: compile });

/**
 * index for component base
 */

exports.ComponentBase = ComponentBase;
exports.ComponentBaseHybrid = ComponentBaseHybrid;
exports.applyMixins = applyMixins;
exports.ComplexBase = ComplexBase;
exports.Inject = Inject;
exports.compile = compile;

return exports;

});
sfBlazor.libs.push("reactbase")
sfBlazor.loadDependencies(["react","reactdom","base"], () => {
    sf.reactbase = sf.reactbase({});
});
