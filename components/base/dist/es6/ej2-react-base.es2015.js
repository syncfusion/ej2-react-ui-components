import { Children, PureComponent } from 'react';
import { findDOMNode, render } from 'react-dom';
import { detach, extend, getTemplateEngine, getValue, isNullOrUndefined, setTemplateEngine, setValue } from '@syncfusion/ej2-base';

/**
 * React Component Base
 */
const defaulthtmlkeys = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type', 'name',
    'onClick', 'onFocus', 'onBlur'];
const delayUpdate = ['accordion', 'tab', 'splitter'];
// tslint:disable
class ComponentBase extends PureComponent {
    constructor() {
        super(...arguments);
        this.attrKeys = [];
        this.cachedTimeOut = 0;
        this.isAppendCalled = false;
        this.isReact = true;
    }
    componentWillMount() {
        this.isReact = true;
        let propKeys = Object.keys(this.props);
        this.htmlattributes = {};
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (let prop of propKeys) {
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                this.htmlattributes[prop] = this.props[prop];
            }
        }
    }
    componentDidMount() {
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        if (this.props.immediateRender) {
            this.renderReactComponent();
        }
        else {
            this.cachedTimeOut = setTimeout(() => {
                this.renderReactComponent();
            });
        }
    }
    renderReactComponent() {
        let ele = findDOMNode(this);
        if (ele) {
            this.isAppendCalled = true;
            this.appendTo(ele);
        }
    }
    // tslint:disable-next-line:no-any
    componentWillReceiveProps(nextProps) {
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(findDOMNode(this));
        }
        let dProps = extend({}, nextProps);
        let keys = Object.keys(nextProps);
        for (let propkey of keys) {
            let isClassName = propkey === 'className';
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
        // tslint:disable-next-line:no-any
        if (this.canDelayUpdate || this.props.delayUpdate) {
            setTimeout(() => {
                this.refreshProperties(dProps, nextProps);
            });
        }
        else {
            this.refreshProperties(dProps, nextProps);
        }
    }
    refreshProperties(dProps, nextProps) {
        if (Object.keys(dProps).length) {
            // tslint:disable-next-line:no-any
            this.processComplexTemplate(dProps, this);
            this.setProperties(dProps);
        }
        this.refreshChild(false, nextProps);
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
        return this.htmlattributes;
    }
    /* tslint:disable:no-any */
    trigger(eventName, eventProp, successHandler) {
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
            this.modelObserver.notify(eventName, eventProp, successHandler);
            this.isProtectedOnChange = prevDetection;
        }
    }
    compareObjects(oldProps, newProps) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
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
            let directiveValue = this.validateChildren({}, this.directivekeys, (props || this.props));
            if (directiveValue) {
                if (!silent && this.skipRefresh) {
                    for (let fields of this.skipRefresh) {
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
                            let obj = {};
                            obj[key] = directiveValue[key];
                            this.prevProperties = extend(this.prevProperties, obj);
                        }
                    }
                }
                else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                this.setProperties(directiveValue, silent);
            }
        }
    }
    componentWillUnmount() {
        clearTimeout(this.cachedTimeOut);
        this.destroy();
    }
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
/* tslint:enable:no-any */

// tslint:disable-next-line:no-any
function applyMixins(derivedClass, baseClass) {
    // tslint:disable:typedef
    baseClass.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
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
        return (data) => {
            let ele = document.createElement('div');
            document.body.appendChild(ele);
            let actTemplate = templateElement;
            let actData = data;
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
//# sourceMappingURL=ej2-react-base.es2015.js.map
