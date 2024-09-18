/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
/**
 * React Component Base
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, isNullOrUndefined, setValue, getValue, isObject, onIntlChange } from '@syncfusion/ej2-base';
/**
 * Interface for processing directives
 */
interface Directive {
    children: Object;
    type: {
        name: string;
        propertyName: string;
        isDirective: boolean;
        moduleName: string;
        isService: boolean;
    };
    value: string;
    isDirective: boolean;
    isService: boolean;
    mapper: string;
    props: { [key: string]: Object };
}


interface Changes {
    index?: number;
    value?: Object;
    key?: string;
}
interface ObjectValidator {
    status?: boolean;
    changedProperties?: Changes[];
}
const defaulthtmlkeys: string[] = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type', 'name',
    'onClick', 'onFocus', 'onBlur'];
const delayUpdate: string[] = ['accordion', 'tab', 'splitter'];
const isColEName: RegExp = /\]/;

export class ComponentBase<P, S> extends React.Component<P, S> {
    /**
     * @private
     */
    public static reactUid: number = 1;
    private setProperties: Function;
    private element: any;
    private mountingState: any = false;
    private appendTo: Function;
    private destroy: Function;
    private getModuleName: () => string;
    private prevProperties: Object;
    private checkInjectedModules: boolean;
    private curModuleName: string;
    private getInjectedModules: Function;
    private injectedModules: Object[];
    private skipRefresh: string[];
    protected htmlattributes: { [key: string]: Object };
    private controlAttributes: string[];
    public directivekeys: { [key: string]: Object };
    private attrKeys: string[] = [];
    private cachedTimeOut: number = 0;
    private isAppendCalled: boolean = false;
    private initRenderCalled: boolean = false;
    private isReactForeceUpdate: boolean = false;
    private isReact: boolean = true;
    private isshouldComponentUpdateCalled: boolean = false;
    private modelObserver: any;
    private isDestroyed: boolean;
    private isCreated: boolean = false;
    private isProtectedOnChange: boolean;
    private canDelayUpdate: boolean;
    private reactElement: HTMLElement;
    public portals: any;
    protected value: any;
    protected columns: any;
    private clsName: boolean;

    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount

    public componentDidMount(): void {
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        this.renderReactComponent();
        if (this.portals && this.portals.length) {
            this.mountingState = true;
            this.renderReactTemplates();
            this.mountingState = false;
        }
    }

    public componentDidUpdate(prev: Object): any {
        if (!this.isshouldComponentUpdateCalled && this.initRenderCalled && !this.isReactForeceUpdate) {
            if (prev !== this.props) {
                this.isshouldComponentUpdateCalled = true;
                this.updateProperties(this.props, false, prev);
            }
        }
    }

    private renderReactComponent(): void {
        const ele: Element = this.reactElement;
        if (ele && !this.isAppendCalled) {
            this.isAppendCalled = true;
            this.appendTo(ele);
        }
    }

    // Lifecycle methods are changed by React team and so we can deprecate this method and use
    // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops
    /**
     * @param {Object} nextProps - Specifies the property value.
     * @returns {boolean} - Returns boolean value.
     * @private
     */
    public shouldComponentUpdate(nextProps: Object): boolean {
        this.isshouldComponentUpdateCalled = true;
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

    private updateProperties(nextProps: Object, silent?: boolean, prev?: Object): void {
        const dProps: Object = extend({}, nextProps);
        const keys: string[] = Object.keys(nextProps);
        const prevProps: Object = extend({}, prev || this.props);
        // The statelessTemplates props value is taken from sample level property or default component property.
        const statelessTemplates: string[] = !isNullOrUndefined(prevProps['statelessTemplates']) ? prevProps['statelessTemplates'] :
            (!isNullOrUndefined(this['statelessTemplateProps']) ? this['statelessTemplateProps'] : []);
        for (const propkey of keys) {
            const isClassName: boolean = propkey === 'className';
            if (propkey === 'children'){
                continue;
            }
            if (!isClassName && !isNullOrUndefined(this.htmlattributes[`${propkey}`]) &&
                this.htmlattributes[`${propkey}`] !== dProps[`${propkey}`]) {
                this.htmlattributes[`${propkey}`] = dProps[`${propkey}`];
            }
            if (this.compareValues(prevProps[`${propkey}`], nextProps[`${propkey}`])) {
                delete dProps[`${propkey}`];
            } else if (this.attrKeys.indexOf(propkey) !== -1) {
                if (isClassName) {
                    this.clsName = true;
                    const propsClsName: string[] = prevProps[`${propkey}`].split(' ');
                    for (let i: number = 0; i < propsClsName.length; i++) {
                        this.element.classList.remove(propsClsName[parseInt(i.toString(), 10)]);
                    }
                    const dpropsClsName: string[] = dProps[`${propkey}`].split(' ');
                    for (let j: number = 0; j < dpropsClsName.length; j++) {
                        this.element.classList.add(dpropsClsName[parseInt(j.toString(), 10)]);
                    }
                } else if (propkey !== 'disabled' && !Object.prototype.hasOwnProperty.call((this as any).properties, propkey)) {
                    delete dProps[`${propkey}`];
                }
            }
            else if (propkey === 'value' && nextProps[`${propkey}`] === this[`${propkey}`]) {
                delete dProps[`${propkey}`];
            }
            else if (statelessTemplates.indexOf(propkey) > -1 && ((propkey === 'content' && typeof dProps[`${propkey}`] === 'function') || (nextProps[`${propkey}`].toString() === this[`${propkey}`].toString()))) {
                delete dProps[`${propkey}`];
            }
        }
        if (dProps['children']) {
            delete dProps['children'];
        }
        if (this.initRenderCalled && (this.canDelayUpdate || (prevProps as any).delayUpdate)) {
            setTimeout(() => {
                this.refreshProperties(dProps, nextProps, silent);
            });
        } else {
            this.refreshProperties(dProps, nextProps, silent);
        }
    }
    public refreshProperties(dProps: Object, nextProps: Object, silent?: boolean): void {
        const statelessTemplates: string[] = !isNullOrUndefined(this.props['statelessTemplates']) ? this.props['statelessTemplates'] : [];
        if (Object.keys(dProps).length) {
            if (!silent) {
                this.processComplexTemplate(dProps, (this as any));
            }
            this.setProperties(dProps, silent);
        }
        if (statelessTemplates.indexOf('directiveTemplates') === -1) {
            this.refreshChild(silent, nextProps);
        }
    }

    private processComplexTemplate(curObject: Object, context: { complexTemplate: Object }): void {
        const compTemplate: Object = context.complexTemplate;
        if (compTemplate) {
            for (const prop in compTemplate) {
                if (Object.prototype.hasOwnProperty.call(compTemplate, prop)) {
                    const PropVal: string = compTemplate[`${prop}`];
                    if (curObject[`${prop}`]) {
                        setValue(PropVal, getValue(prop, curObject), curObject);
                    }
                }
            }
        }
    }

    public getDefaultAttributes(): Object {
        this.isReact = true;
        const propKeys: string[] = Object.keys(this.props);
        //let stringValue: string[] = ['autocomplete', 'dropdownlist', 'combobox'];
        const ignoreProps: string[] = ['children', 'statelessTemplates', 'immediateRender', 'isLegacyTemplate', 'delayUpdate'];
        // if ((stringValue.indexOf(this.getModuleName()) !== -1) && (!isNullOrUndefined(this.props["value"]))) {
        //     this.value = (<{ [key: string]: Object }>this.props)["value"];
        // }
        if (!this.htmlattributes) {
            this.htmlattributes = {};
        }
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (const prop of propKeys) {
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1 || (Object.keys((this as any).properties).indexOf(`${prop}`) === -1 && ignoreProps.indexOf(`${prop}`) === -1)) {
                if (this.htmlattributes[`${prop}`] !== (<{ [key: string]: Object }>this.props)[`${prop}`]) {
                    this.htmlattributes[`${prop}`] = (<{ [key: string]: Object }>this.props)[`${prop}`];
                }
            }
        }
        if (!this.htmlattributes.ref) {
            this.htmlattributes.ref = (ele: any ) => {
                this.reactElement = ele;
            };
            const keycompoentns: string[] = ['autocomplete', 'combobox', 'dropdownlist', 'dropdowntree', 'multiselect',
                'listbox', 'colorpicker', 'numerictextbox', 'textbox', 'smarttextarea',
                'uploader', 'maskedtextbox', 'slider', 'datepicker', 'datetimepicker', 'daterangepicker', 'timepicker', 'checkbox', 'switch', 'radio', 'rating', 'textarea', 'multicolumncombobox'];
            if (keycompoentns.indexOf(this.getModuleName()) !== -1) {
                this.htmlattributes.key = '' + ComponentBase.reactUid;
                ComponentBase.reactUid++;
                if ((this as any).type && !this.htmlattributes['type']) {
                    this.htmlattributes['type'] = (this as any).multiline ? 'hidden' : (this as any).type;
                }
                if ((this as any).name && !this.htmlattributes['name']) {
                    this.htmlattributes['name'] = (this as any).name;
                }
            }

        }
        if (this.clsName) {
            const clsList: string[] = this.element.classList;
            const className: any =  this.htmlattributes['className'];
            for (let i: number = 0; i < clsList.length; i++){
                if ((className.indexOf(clsList[parseInt(i.toString(), 10)]) === -1)){
                    this.htmlattributes['className'] = this.htmlattributes['className'] + ' ' + clsList[parseInt(i.toString(), 10)];
                }
            }
        }
        return this.htmlattributes;
    }

    public trigger(eventName: string, eventProp?: any, successHandler?: any): void {
        if (this.isDestroyed !== true && this.modelObserver) {
            if (isColEName.test(eventName)) {
                const handler: Function = getValue(eventName, this);
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
            if ((eventName === 'change' || eventName === 'input')) {
                if ((this.props as any).onChange && (eventProp as any).event) {
                    (this.props as any).onChange.call(undefined, {
                        syntheticEvent: (eventProp as any).event,
                        nativeEvent: { text: (eventProp as any).value },
                        value: (eventProp as any).value,
                        target: this
                    });
                }
            }
            const prevDetection: boolean = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            if (eventName === 'created') {
                setTimeout(() => {
                    this.isCreated = true;
                    if (!this.isDestroyed) {
                        this.modelObserver.notify(eventName, eventProp, successHandler);
                    }
                }, 10);
            } else {
                this.modelObserver.notify(eventName, eventProp, successHandler);
            }
            this.isProtectedOnChange = prevDetection;
        }

    }
    private compareValues(value1: any, value2: any): boolean {
        const typeVal: string = typeof value1;
        const typeVal2: string = typeof value2;
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
                value1 instanceof Number
            ) {
                return value1.toString() === value2.toString();
            }
            if (isObject(value1) || Array.isArray(value1)) {
                let tempVal: Object[] = value1;
                let tempVal2: Object[] = value2;
                if (isObject(tempVal)) {
                    tempVal = [value1];
                    tempVal2 = [value2];
                }
                return this.compareObjects(tempVal, tempVal2).status;
            }
            if (value1.moduleName &&
                value1.moduleName === value2.moduleName &&
                (value1.moduleName === 'query' ||
                value1.moduleName === 'datamanager')) {
                if (JSON.stringify(value1) === JSON.stringify(value2)) {
                    return true;
                }
            }
        }
        return false;
    }
    public compareObjects(oldProps: any, newProps: any, propName?: string): ObjectValidator {
        let status: boolean = true;
        const lenSimilarity: boolean = (oldProps.length === newProps.length);
        const diffArray: Changes[] = [];
        const templateProps: any = !isNullOrUndefined(this['templateProps']) ? this['templateProps'] : [];
        if (lenSimilarity) {
            for (let i: number = 0, len: number = newProps.length; i < len; i++) {
                const curObj: { [key: string]: Object } = {};
                const oldProp: { [key: string]: Object } = oldProps[parseInt(i.toString(), 10)];
                const newProp: { [key: string]: Object } = newProps[parseInt(i.toString(), 10)];
                const keys: string[] = Object.keys(newProp);
                if (keys.length !== 0) {
                    for (const key of keys) {
                        const oldValue: any = oldProp[`${key}`];
                        const newValue: any = newProp[`${key}`];
                        if (key === 'items') {
                            for (let _j: number = 0; _j < newValue.length; _j++) {
                                if (this.getModuleName() === 'richtexteditor' && typeof(newValue[parseInt(_j.toString(), 10)]) === 'object') {
                                    return {status: true};
                                }
                            }
                        }
                        if (this.getModuleName() === 'grid' && key === 'field') {
                            curObj[`${key}`] = newValue;
                        }
                        if (!Object.prototype.hasOwnProperty.call(oldProp, key) || !((templateProps.length > 0 && templateProps.indexOf(`${key}`) === -1 && typeof(newValue) === 'function') ? this.compareValues(oldValue.toString(), newValue.toString()) : this.compareValues(oldValue, newValue))) {
                            if (!propName) {
                                return { status: false };
                            }
                            status = false;
                            curObj[`${key}`] = newValue;
                        }
                    }
                }
                else if (newProps[parseInt(i.toString(), 10)] === oldProps[parseInt(i.toString(), 10)]) {
                    status = true;
                }
                else {
                    if (!propName) {
                        return { status: false };
                    }
                    status = false;
                }
                if (this.getModuleName() === 'grid' && propName === 'columns' && isNullOrUndefined(curObj['field'])) {
                    curObj['field'] = undefined;
                }
                if (Object.keys(curObj).length) {
                    diffArray.push({ index: i, value: curObj, key: propName });
                }
            }
        } else {
            status = false;
        }
        return { status: status, changedProperties: diffArray };
    }
    private refreshChild(silent: boolean, props?: Object): void {
        if (this.checkInjectedModules) {
            const prevModule: Object[] = this.getInjectedModules() || [];
            const curModule: Object[] = this.getInjectedServices() || [];
            for (const mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.injectedModules = prevModule;
        }
        if (this.directivekeys) {
            let changedProps: Changes[] = []; let key: string = '';
            const directiveValue: { [key: string]: Object } = <{ [key: string]: Object }>this.validateChildren(
                {}, this.directivekeys, (<{ children: React.ReactNode }>(props || this.props)));
            if (directiveValue && Object.keys(directiveValue).length) {
                if (!silent && this.skipRefresh) {
                    for (const fields of this.skipRefresh) {
                        delete directiveValue[`${fields}`];
                    }
                }
                if (this.prevProperties) {
                    const dKeys: any = Object.keys(this.prevProperties);
                    for (let i: number = 0; i < dKeys.length; i++) {
                        key = dKeys[parseInt(i.toString(), 10)];
                        if (!Object.prototype.hasOwnProperty.call(directiveValue, key)) {
                            continue;
                        }
                        const compareOutput: any = this.compareObjects(this.prevProperties[`${key}`], directiveValue[`${key}`], key);
                        if (compareOutput.status) {
                            delete directiveValue[`${key}`];
                        } else {
                            if (compareOutput.changedProperties.length) {
                                changedProps = changedProps.concat(compareOutput.changedProperties);
                            }
                            const obj: Object = {};
                            obj[`${key}`] = directiveValue[`${key}`];
                            this.prevProperties = extend(this.prevProperties, obj);
                        }
                    }
                } else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                if (changedProps.length) {
                    if (this.getModuleName() === 'grid' && key === 'columns') {
                        for (let _c1: number = 0, allColumns: any = this.columns; _c1 < allColumns.length; _c1++) {
                            const compareField1: any = getValue('field', allColumns[parseInt(_c1.toString(), 10)]);
                            const compareField2: any = getValue(_c1 + '.value.field', changedProps);
                            if (compareField1 === compareField2) {
                                const propInstance: any = getValue(changedProps[parseInt(_c1.toString(), 10)].key + '.' + changedProps[parseInt(_c1.toString(), 10)].index, this);
                                if (propInstance && propInstance.setProperties) {
                                    propInstance.setProperties(changedProps[parseInt(_c1.toString(), 10)].value);
                                }
                                else {
                                    extend(propInstance, changedProps[parseInt(_c1.toString(), 10)].value);
                                }
                            }
                            else {
                                this.setProperties(directiveValue, silent);
                            }
                        }
                    }
                    else {
                        for (const changes of changedProps) {
                            const propInstance: any = getValue(changes.key + '.' + changes.index, this);
                            if (propInstance && propInstance.setProperties) {
                                propInstance.setProperties(changes.value);
                            }
                            else {
                                extend(propInstance, changes.value);
                            }
                        }
                    }
                }
                else {
                    this.setProperties(directiveValue, silent);
                }
            }
        }
    }

    public componentWillUnmount(): void {
        clearTimeout(this.cachedTimeOut);
        const modulesName: string[] = ['dropdowntree', 'checkbox'];
        const hasModule: boolean = ((!modulesName.indexOf(this.getModuleName())) ? document.body.contains(this.element) : true);
        if (this.initRenderCalled && this.isAppendCalled && this.element && hasModule && !this.isDestroyed && this.isCreated) {
            this.destroy();
        }
        onIntlChange.offIntlEvents();
    }

    public appendReactElement (element: any, container: HTMLElement): void {
        const portal: any = (ReactDOM as any).createPortal(element, container);
        if (!this.portals) {
            this.portals = [portal];
        }
        else {
            this.portals.push(portal);
        }
    }
    public renderReactTemplates (callback?: any): void {
        this.isReactForeceUpdate = true;
        if (callback) {
            this.forceUpdate(callback);
        } else {
            this.forceUpdate();
        }
        this.isReactForeceUpdate = false;
    }
    public clearTemplate(templateNames: string[], index?: any, callback?: any): void {
        const tempPortal: any = [];
        if (templateNames && templateNames.length) {
            Array.prototype.forEach.call(templateNames, (propName: string) => {
                let propIndexCount: number = 0;
                this.portals.forEach((portal: any) => {
                    if (portal.propName === propName) {
                        tempPortal.push(propIndexCount);
                        propIndexCount++;
                    }
                });
                if (!isNullOrUndefined(index) && this.portals[index as number] && this.portals[index as number].propName === propName) {
                    this.portals.splice(index, 1);
                } else {
                    for (let i: number = 0; i < this.portals.length; i++) {
                        if (this.portals[parseInt(i.toString(), 10)].propName === propName) {
                            this.portals.splice(i, 1);
                            i--;
                        }
                    }
                }
            });
        } else {
            this.portals = [];
        }
        this.renderReactTemplates(callback);
    }
    private validateChildren(
        childCache: { [key: string]: Object },
        mapper: { [key: string]: Object },
        props: { children: React.ReactNode }): Object {
        let flag: boolean = false;
        const childs: React.ReactNode[] & Directive[] = (<React.ReactNode[] & Directive[]>React.Children.toArray(props.children));
        for (const child of childs) {
            const ifield: any = (this.getChildType(child as any) as any);
            const key: string & { [key: string]: Object } = <string & { [key: string]: Object }>mapper[`${ifield}`];
            if (ifield && mapper) {
                const childProps: object[] = this.getChildProps(React.Children.toArray((child as any).props.children), key);
                if (childProps.length) {
                    flag = true;
                    childCache[(child as any).type.propertyName || ifield] = childProps;
                }
            }
        }
        if (flag) {
            return childCache;
        }
        return null;
    }
    private getChildType(child: any): string {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    }
    public getChildProps(subChild: React.ReactNode[], matcher: { [key: string]: Object } & string): Object[] {
        const ret: Object[] = [];
        for (const child of subChild) {
            let accessProp: boolean = false;
            let key: string;
            if (typeof matcher === 'string') {
                accessProp = true;
                key = <string>matcher;
            } else {
                key = Object.keys(matcher)[0];
            }
            const prop: Object = (child as Directive).props;
            const field: string = this.getChildType(<any>child);
            if (field === key) {
                if (accessProp || !(<Directive>prop).children) {
                    const cacheVal: Object = extend({}, prop, {}, true);
                    this.processComplexTemplate(cacheVal, (child as any).type);
                    ret.push(cacheVal);
                } else {
                    const cachedValue: Object = this.validateChildren(
                        <{ [key: string]: Object }>extend({}, prop), <{ [key: string]: Object }>matcher[`${key}`],
                        <{ children: React.ReactNode; }>prop) || prop;
                    if (cachedValue['children']) {
                        delete cachedValue['children'];
                    }
                    this.processComplexTemplate(cachedValue, (child as any).type);
                    ret.push(cachedValue);
                }
            }
        }

        return ret;
    }
    public getInjectedServices(): Object[] {
        const childs: React.ReactNode[] & Directive[] = (<React.ReactNode[] & Directive[]>React.Children.toArray(this.props.children));
        for (const child of childs) {
            if ((child as any).type && (child as any).type.isService) {
                return (child as any).props.services;
            }
        }
        return [];
    }
}
