/**
 * React Component Base
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, isNullOrUndefined, setValue, getValue } from '@syncfusion/ej2-base';
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


const defaulthtmlkeys: string[] = ['alt', 'className', 'disabled', 'form', 'id',
    'readOnly', 'style', 'tabIndex', 'title', 'type', 'name',
    'onClick', 'onFocus', 'onBlur'];
const delayUpdate: string[] = ['accordion', 'tab', 'splitter'];

 // tslint:disable
export class ComponentBase<P, S> extends React.PureComponent<P, S> {
    private setProperties: Function;
    private element: any;
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
    private isReact: boolean = true;
    private modelObserver: any;
    private isDestroyed: boolean;
    private isProtectedOnChange: boolean;
    private canDelayUpdate: boolean;
    public componentWillMount(): void {
        this.isReact = true;
        let propKeys: string[] = Object.keys(this.props);
        this.htmlattributes = {};
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (let prop of propKeys) {
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                this.htmlattributes[prop] = (<{ [key: string]: Object }>this.props)[prop];
            }
        }
    }

    public componentDidMount(): void {
        this.refreshChild(true);
        this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
        // Used timeout to resolve template binding
        // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
        if((this.props as any).immediateRender){
            this.renderReactComponent();
        } else {
            this.cachedTimeOut = setTimeout(() => {
                this.renderReactComponent();
            });
        }
    }
    
    private renderReactComponent(): void {
        let ele: Element = ReactDOM.findDOMNode(this);
            if (ele) {
                this.isAppendCalled = true;
                this.appendTo(ele);
            }
    }

    // tslint:disable-next-line:no-any
    public componentWillReceiveProps(nextProps: any): void {
        if (!this.isAppendCalled) {
            clearTimeout(this.cachedTimeOut);
            this.isAppendCalled = true;
            this.appendTo(ReactDOM.findDOMNode(this));
        }
        let dProps: Object = extend({}, nextProps);
        let keys: string[] = Object.keys(nextProps);
        for (let propkey of keys) {
            let isClassName: boolean = propkey === 'className';
            if (!isClassName && !isNullOrUndefined(this.htmlattributes[propkey]) &&
                this.htmlattributes[propkey] !== dProps[propkey]) {
                this.htmlattributes[propkey] = dProps[propkey]
            }
            if (this.props[propkey] === nextProps[propkey]) {
                delete dProps[propkey];
            } else if (this.attrKeys.indexOf(propkey) !== -1) {
                if (isClassName) {
                    this.element.classList.remove(this.props[propkey]);
                    this.element.classList.add(dProps[propkey]);
                } else if (propkey !== 'disabled') {
                    delete dProps[propkey];
                }
            }
        }
        if (dProps['children']) {
            delete dProps['children'];
        }
         // tslint:disable-next-line:no-any
        if (this.canDelayUpdate || (this.props as any).delayUpdate) {
            setTimeout(() => {
                this.refreshProperties(dProps, nextProps);
            })
        } else {
            this.refreshProperties(dProps, nextProps);
        }
    }
    public refreshProperties(dProps: Object, nextProps: Object): void {
        if (Object.keys(dProps).length) {
            // tslint:disable-next-line:no-any
            this.processComplexTemplate(dProps, (this as any));
            this.setProperties(dProps);
        }
        this.refreshChild(false, nextProps);
    }

    private processComplexTemplate(curObject: Object, context: {complexTemplate: Object}){
        let compTemplate: Object = context.complexTemplate
        if(compTemplate){
            for(let  prop in compTemplate){
                let PropVal: string = compTemplate[prop];
                if(curObject[prop]){
                    setValue(PropVal, getValue(prop, curObject), curObject);
                }
            }
        }
    }

    public getDefaultAttributes(): Object {
        return this.htmlattributes;
    }
      /* tslint:disable:no-any */
    public trigger(eventName: string, eventProp?: any, successHandler?: any): void {
      
        if (this.isDestroyed !== true) {
            if ((eventName === 'change' || eventName === 'input')) {
                if ((this.props as any).onChange && eventProp.event) {
                    (this.props as any).onChange.call(undefined, {
                        syntheticEvent: eventProp.event,
                        nativeEvent: { text: eventProp.value },
                        value: eventProp.value,
                        target: this
                    });
                }
            }
            let prevDetection: boolean = this.isProtectedOnChange;
            this.isProtectedOnChange = false;
            this.modelObserver.notify(eventName, eventProp, successHandler);
            this.isProtectedOnChange = prevDetection;
        }
    
    }
    public compareObjects(oldProps: Object, newProps: Object) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps);
    }
    private refreshChild(silent: boolean, props?: Object): void {
        if (this.checkInjectedModules) {
            let prevModule: Object[] = this.getInjectedModules() || [];
            let curModule: Object[] = this.getInjectedServices() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.injectedModules = prevModule;
        }
        if (this.directivekeys) {
            let directiveValue: { [key: string]: Object } = <{ [key: string]: Object }>this.validateChildren(
                {}, this.directivekeys, (<{ children: React.ReactNode }>(props || this.props)));
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
                        } else {
                            let obj: Object = {};
                            obj[key] = directiveValue[key];
                            this.prevProperties = extend(this.prevProperties, obj);
                        }
                    }
                } else {
                    this.prevProperties = extend({}, directiveValue, {}, true);
                }
                this.setProperties(directiveValue, silent);
            }
        }
    }

    public componentWillUnmount(): void {
        this.destroy();
    }

    /* tslint:disable:no-any */
    private validateChildren(
        childCache: { [key: string]: Object },
        mapper: { [key: string]: Object },
        props: { children: React.ReactNode }): Object {
        let flag: boolean = false;
        let childs: React.ReactNode[] & Directive[] = (<React.ReactNode[] & Directive[]>React.Children.toArray(props.children));
        for (let child of childs) {
            let ifield: any = (this.getChildType(child as any) as any);
            let key: string & { [key: string]: Object } = <string & { [key: string]: Object }>mapper[ifield];
            if (ifield && mapper) {
                // tslint:disable
                let childProps: object[] = this.getChildProps(React.Children.toArray((child as any).props.children), key);
                if (childProps.length) {
                    flag = true;
                    // tslint:disable
                    childCache[(child as any).type.propertyName || ifield] = childProps;
                }
            }
        }
        if (flag) {
            return childCache;
        }
        return null;
    }
    // tslint:disable:no-any
    private getChildType(child: any): string {
        if (child.type && child.type.isDirective) {
            return child.type.moduleName || '';
        }
        return '';
    }
    public getChildProps(subChild: React.ReactNode[], matcher: { [key: string]: Object } & string): Object[] {
        let ret: Object[] = [];
        for (let child of subChild) {
            let accessProp: boolean = false;
            let key: string;
            if (typeof matcher === 'string') {
                accessProp = true;
                key = <string>matcher;
            } else {
                key = Object.keys(matcher)[0];
            }
            let prop: Object = (child as Directive).props;
            // tslint:disable-next-line:no-any
            let field: string = this.getChildType(<any>child);
            if (field === key) {
                if (accessProp || !(<Directive>prop).children) {
                     // tslint:disable
                    let cacheVal: Object = extend({}, prop, {}, true);
                     // tslint:disable
                    this.processComplexTemplate(cacheVal, (child as any ).type);
                    ret.push(cacheVal);
                } else {
                    let cachedValue: Object = this.validateChildren(
                        <{ [key: string]: Object }>extend({}, prop), <{ [key: string]: Object }>matcher[key],
                        <{ children: React.ReactNode; }>prop) || prop;
                    if (cachedValue['children']) {
                        delete cachedValue['children'];
                    }
                     // tslint:disable
                    this.processComplexTemplate(cachedValue, (child as any ).type);
                    ret.push(cachedValue);
                }
            }
        }

        return ret;
    }
    // tslint:disable:no-any
    public getInjectedServices(): Object[] {
        let childs: React.ReactNode[] & Directive[] = (<React.ReactNode[] & Directive[]>React.Children.toArray(this.props.children));
        for (let child of childs) {
            /* tslint:disable:no-any */
            if ((child as any).type.isService) {
                return (child as any).props.services;
            }
        }
        return [];
    }
}
/* tslint:enable:no-any */
