import { Children, Component, PureComponent, createElement } from 'react';
import { detach, extend, getTemplateEngine, getValue, isNullOrUndefined, isObject, setTemplateEngine, setValue } from '@syncfusion/ej2-base';
import { createPortal, render } from 'react-dom';

/**
 * React Component Base
 */
const defaulthtmlkeys = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type', 'name',
    'onClick', 'onFocus', 'onBlur'];
const delayUpdate = ['accordion', 'tab', 'splitter'];
const isColEName = new RegExp('\]');
// tslint:disable
class ComponentBase extends Component {
    constructor() {
        super(...arguments);
        this.attrKeys = [];
        this.cachedTimeOut = 0;
        this.isAppendCalled = false;
        this.initRenderCalled = false;
        this.isReactForeceUpdate = false;
        this.isReact = true;
    }
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount
    // tslint:disable-next-line:no-any
    componentDidMount() {
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        // tslint:disable-next-line:no-any
        this.renderReactComponent();
        if (this.portals && this.portals.length) {
            this.renderReactTemplates();
        }
    }
    renderReactComponent() {
        let ele = this.reactElement;
        if (ele) {
            this.isAppendCalled = true;
            this.appendTo(ele);
        }
    }
    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    // tslint:disable-next-line:no-any
    /**
     * @private
     */
    shouldComponentUpdate(nextProps) {
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
    }
    /**
     * @private
     */
    updateProperties(nextProps, silent) {
        let dProps = extend({}, nextProps);
        let keys = Object.keys(nextProps);
        for (let propkey of keys) {
            let isClassName = propkey === 'className';
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
            setTimeout(() => {
                this.refreshProperties(dProps, nextProps, silent);
            });
        }
        else {
            this.refreshProperties(dProps, nextProps, silent);
        }
    }
    refreshProperties(dProps, nextProps, silent) {
        if (Object.keys(dProps).length) {
            if (!silent) {
                // tslint:disable-next-line:no-any
                this.processComplexTemplate(dProps, this);
            }
            this.setProperties(dProps, silent);
        }
        this.refreshChild(silent, nextProps);
    }
    processComplexTemplate(curObject, context) {
        let compTemplate = context.complexTemplate;
        if (compTemplate) {
            for (let prop in compTemplate) {
                let PropVal = compTemplate[prop];
                if (curObject[prop]) {
                    setValue(PropVal, getValue(prop, curObject), curObject);
                }
            }
        }
    }
    getDefaultAttributes() {
        this.isReact = true;
        let propKeys = Object.keys(this.props);
        if (!this.htmlattributes) {
            this.htmlattributes = {};
        }
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (let prop of propKeys) {
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                if (this.htmlattributes[prop] !== this.props[prop]) {
                    this.htmlattributes[prop] = this.props[prop];
                }
            }
        }
        if (!this.htmlattributes.ref) {
            /* tslint:disable:no-any */
            this.htmlattributes.ref = (ele) => {
                this.reactElement = ele;
            };
            let keycompoentns = ['autocomplete', 'combobox', 'dropdownlist', 'dropdowntree', 'multiselect',
                'listbox', 'colorpicker', 'numerictextbox', 'textbox',
                'uploader', 'maskedtextbox', 'slider', 'datepicker', 'datetimepicker', 'daterangepicker', 'timepicker'];
            if (keycompoentns.indexOf(this.getModuleName()) !== -1) {
                this.htmlattributes.key = '' + ComponentBase.reactUid;
                ComponentBase.reactUid++;
            }
        }
        return this.htmlattributes;
    }
    /* tslint:disable:no-any */
    trigger(eventName, eventProp, successHandler) {
        if (isColEName.test(eventName)) {
            let handler = getValue(eventName, this);
            if (handler) {
                handler.call(this, eventProp);
                if (successHandler) {
                    successHandler.call(this, eventProp);
                }
            }
            else if (successHandler) {
                successHandler.call(this, eventProp);
            }
        }
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
            let prevDetection = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            if (eventName === 'created') {
                setTimeout(() => {
                    if (!this.isDestroyed) {
                        this.modelObserver.notify(eventName, eventProp, successHandler);
                    }
                });
            }
            else {
                this.modelObserver.notify(eventName, eventProp, successHandler);
            }
            this.isProtectedOnChange = prevDetection;
        }
    }
    compareValues(value1, value2) {
        let typeVal = typeof value1;
        let typeVal2 = typeof value2;
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
                let tempVal = value1;
                let tempVal2 = value2;
                if (isObject(tempVal)) {
                    tempVal = [value1];
                    tempVal2 = [value2];
                }
                return this.compareObjects(tempVal, tempVal2).status;
            }
        }
        return false;
    }
    compareObjects(oldProps, newProps, propName) {
        let status = true;
        let lenSimilarity = (oldProps.length === newProps.length);
        let diffArray = [];
        if (lenSimilarity) {
            for (let i = 0, len = newProps.length; i < len; i++) {
                let curObj = {};
                let oldProp = oldProps[i];
                let newProp = newProps[i];
                let keys = Object.keys(newProp);
                for (let key of keys) {
                    let oldValue = oldProp[key];
                    let newValue = newProp[key];
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
    }
    refreshChild(silent, props) {
        if (this.checkInjectedModules) {
            let prevModule = this.getInjectedModules() || [];
            let curModule = this.getInjectedServices() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.injectedModules = prevModule;
        }
        if (this.directivekeys) {
            let changedProps = [];
            let directiveValue = this.validateChildren({}, this.directivekeys, (props || this.props));
            if (directiveValue && Object.keys(directiveValue).length) {
                if (!silent && this.skipRefresh) {
                    for (let fields of this.skipRefresh) {
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
                        let compareOutput = this.compareObjects(this.prevProperties[key], directiveValue[key], key);
                        if (compareOutput.status) {
                            delete directiveValue[key];
                        }
                        else {
                            if (compareOutput.changedProperties.length) {
                                changedProps = changedProps.concat(compareOutput.changedProperties);
                            }
                            let obj = {};
                            obj[key] = directiveValue[key];
                            this.prevProperties = extend(this.prevProperties, obj);
                        }
                    }
                }
                else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                if (changedProps.length) {
                    for (let changes of changedProps) {
                        let propInstance = getValue(changes.key + '.' + changes.index, this);
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
    }
    componentWillUnmount() {
        clearTimeout(this.cachedTimeOut);
        // tslint:disable-next-line:no-any
        if (this.initRenderCalled) {
            this.destroy();
        }
    }
    // tslint:disable:no-any 
    renderReactTemplates(callback) {
        this.isReactForeceUpdate = true;
        if (callback) {
            this.forceUpdate(callback);
        }
        else {
            this.forceUpdate();
        }
        this.isReactForeceUpdate = false;
    }
    ;
    // tslint:disable:no-any 
    clearTemplate(templateNames, index, callback) {
        var tempPortal = [];
        if (templateNames && templateNames.length) {
            Array.prototype.forEach.call(templateNames, (propName) => {
                let indexCount = 0;
                let propIndexCount = 0;
                this.portals.forEach((portal) => {
                    if (portal.propName === propName) {
                        tempPortal.push(propIndexCount);
                        propIndexCount++;
                    }
                });
                if (index && this.portals[tempPortal[index[indexCount]]].propName == propName) {
                    this.portals.splice(index, 1);
                    indexCount++;
                }
                else {
                    for (var i = 0; i < this.portals.length; i++) {
                        if (this.portals[i].propName == propName) {
                            this.portals.splice(i, 1);
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
    }
    ;
    /* tslint:disable:no-any */
    validateChildren(childCache, mapper, props) {
        let flag = false;
        let childs = Children.toArray(props.children);
        for (let child of childs) {
            let ifield = this.getChildType(child);
            let key = mapper[ifield];
            if (ifield && mapper) {
                // tslint:disable
                let childProps = this.getChildProps(Children.toArray(child.props.children), key);
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
    }
    // tslint:disable:no-any
    getChildType(child) {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    }
    getChildProps(subChild, matcher) {
        let ret = [];
        for (let child of subChild) {
            let accessProp = false;
            let key;
            if (typeof matcher === 'string') {
                accessProp = true;
                key = matcher;
            }
            else {
                key = Object.keys(matcher)[0];
            }
            let prop = child.props;
            // tslint:disable-next-line:no-any
            let field = this.getChildType(child);
            if (field === key) {
                if (accessProp || !prop.children) {
                    // tslint:disable
                    let cacheVal = extend({}, prop, {}, true);
                    // tslint:disable
                    this.processComplexTemplate(cacheVal, child.type);
                    ret.push(cacheVal);
                }
                else {
                    let cachedValue = this.validateChildren(extend({}, prop), matcher[key], prop) || prop;
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
    }
    // tslint:disable:no-any
    getInjectedServices() {
        let childs = Children.toArray(this.props.children);
        for (let child of childs) {
            /* tslint:disable:no-any */
            if (child.type.isService) {
                return child.props.services;
            }
        }
        return [];
    }
}
/**
 * @private
 */
ComponentBase.reactUid = 1;
/* tslint:enable:no-any */

// tslint:disable-next-line:no-any
function applyMixins(derivedClass, baseClass) {
    // tslint:disable:typedef
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            if (name !== 'isMounted' && name !== 'replaceState') {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
        });
    });
}

/**
 * Directory base
 */
class ComplexBase extends PureComponent {
    render() {
        return null;
    }
}
ComplexBase.isDirective = true;

/**
 * Dependency injection
 */
class Inject extends PureComponent {
    // tslint:disable-next-line:no-any
    render() {
        return null;
    }
}
Inject.isService = true;

/**
 * Template compiler for react
 */
// tslint:disable:no-any
let stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    }
    else {
        return (data, component, prop, element) => {
            let actTemplate = templateElement;
            let actData = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = extend({}, data, templateElement.data || {});
            }
            let cEle;
            if (element) {
                cEle = element;
            }
            else {
                cEle = document.createElement('div');
            }
            if (component && component.isLegacyTemplate) {
                render(actTemplate(actData), cEle);
                if (!element) {
                    detach(cEle);
                }
            }
            else {
                let rele = createElement(actTemplate, actData);
                let portal = createPortal(rele, cEle);
                portal.propName = prop;
                if (!component.portals) {
                    component.portals = [portal];
                }
                else {
                    component.portals.push(portal);
                }
            }
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
//# sourceMappingURL=ej2-react-base.es2015.js.map
