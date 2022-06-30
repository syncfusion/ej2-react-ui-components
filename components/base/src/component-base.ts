/**
 * React Component Base
 */
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
 import { extend, isNullOrUndefined, setValue, getValue, isObject } from '@syncfusion/ej2-base';
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
 let reactUid: number = 0;
 const isColEName: RegExp = new RegExp('\]');
 
 // tslint:disable
 export class ComponentBase<P, S> extends React.Component<P, S> {
     /**
      * @private
      */
     public static reactUid: number = 1;
     private setProperties: Function;
     private element: any;
     private mountingState:any = false;
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
     public portals:any;
     protected value: any;
     protected columns: any;
     private clsName: boolean;

     // Lifecycle methods are changed by React team and so we can deprecate this method and use
     // Reference link:https://reactjs.org/docs/react-component.html#unsafe_componentWillMount
     // tslint:disable-next-line:no-any
    
     public componentDidMount(): void {
         this.refreshChild(true);
         this.canDelayUpdate = delayUpdate.indexOf(this.getModuleName()) !== -1;
         // Used timeout to resolve template binding
         // Reference link: https://github.com/facebook/react/issues/10309#issuecomment-318433235
         // tslint:disable-next-line:no-any
         this.renderReactComponent();
         if (this.portals && this.portals.length) {
             this.mountingState = true;
             this.renderReactTemplates();
             this.mountingState = false;
         }
     }
     
     public componentDidUpdate(prev: Object): any {
        if(!this.isshouldComponentUpdateCalled && this.initRenderCalled && !this.isReactForeceUpdate) {
            this.isshouldComponentUpdateCalled = true;
            if (prev !== this.props) {
                this.refreshProperties(this.props, true);   
            }
        }
     }

     private renderReactComponent(): void {
         let ele: Element = this.reactElement;
         if (ele && !this.isAppendCalled) {
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
     public shouldComponentUpdate(nextProps: Object): boolean {
         this.isshouldComponentUpdateCalled = true
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
         return true
     }
     /**
      * @private
      */
     private updateProperties(nextProps: Object, silent?: boolean): void {
         let dProps: Object = extend({}, nextProps);
         let keys: string[] = Object.keys(nextProps);
         for (let propkey of keys) {
             let isClassName: boolean = propkey === 'className';
             if(propkey === 'children'){
                 continue;
             }
             if (!isClassName && !isNullOrUndefined(this.htmlattributes[propkey]) &&
                 this.htmlattributes[propkey] !== dProps[propkey]) {
                 this.htmlattributes[propkey] = dProps[propkey]
             }
             if (this.compareValues(this.props[propkey], nextProps[propkey])) {
                 delete dProps[propkey];
             } else if (this.attrKeys.indexOf(propkey) !== -1) {
                 if (isClassName) {
                     this.clsName = true;
                     let propsClsName = this.props[propkey].split(' ');
                     for (let i: number = 0; i < propsClsName.length; i++) {
                        this.element.classList.remove(propsClsName[i]);
                     }
                     let dpropsClsName = dProps[propkey].split(' ');
                     for (let j: number = 0; j < dpropsClsName.length; j++) {
                        this.element.classList.add(dpropsClsName[j]);
                     }
                 } else if (propkey !== 'disabled') {
                     delete dProps[propkey];
                 }
             }
             else if (propkey === 'value' && nextProps[propkey] === this[propkey]) {
                delete dProps[propkey];
            }
            else if ((propkey === 'valueTemplate' || propkey === 'itemTemplate' || propkey === 'headerTemplate') && nextProps[propkey].toString() === this[propkey].toString()) {
                delete dProps[propkey];
            }
            else if(propkey === 'content' && typeof dProps[propkey] === 'function') {
                delete dProps[propkey];
            }
         }
         if (dProps['children']) {
             delete dProps['children'];
         }
         // tslint:disable-next-line:no-any
         if (this.initRenderCalled && (this.canDelayUpdate || (this.props as any).delayUpdate)) {
             setTimeout(() => {
                 this.refreshProperties(dProps, nextProps, silent);
             })
         } else {
             this.refreshProperties(dProps, nextProps, silent);
         }
     }
     public refreshProperties(dProps: Object, nextProps: Object, silent?: boolean): void {
         if (Object.keys(dProps).length) {
             if (!silent) {
                 // tslint:disable-next-line:no-any
                 this.processComplexTemplate(dProps, (this as any));
             }
             this.setProperties(dProps, silent);
         }
         this.refreshChild(silent, nextProps);
     }
 
     private processComplexTemplate(curObject: Object, context: { complexTemplate: Object }) {
         let compTemplate: Object = context.complexTemplate
         if (compTemplate) {
             for (let prop in compTemplate) {
                 let PropVal: string = compTemplate[prop];
                 if (curObject[prop]) {
                     setValue(PropVal, getValue(prop, curObject), curObject);
                 }
             }
         }
     }
 
     public getDefaultAttributes(): Object {
        this.isReact = true;
        let propKeys: string[] = Object.keys(this.props);
        let stringValue: string[] = ["autocomplete", "dropdownlist", "combobox"];
        // if ((stringValue.indexOf(this.getModuleName()) !== -1) && (!isNullOrUndefined(this.props["value"]))) {
        //     this.value = (<{ [key: string]: Object }>this.props)["value"];
        // }
        if(!this.htmlattributes) {
            this.htmlattributes = {};
        }
        this.attrKeys = defaulthtmlkeys.concat(this.controlAttributes || []);
        for (let prop of propKeys) {
            if (prop.indexOf('data-') !== -1 || prop.indexOf('aria-') !== -1 || this.attrKeys.indexOf(prop) !== -1) {
                if( this.htmlattributes[prop] !== (<{ [key: string]: Object }>this.props)[prop]) {
                    this.htmlattributes[prop] = (<{ [key: string]: Object }>this.props)[prop];
                }
            }
        }
        if(!this.htmlattributes.ref) {
              /* tslint:disable:no-any */
            this.htmlattributes.ref = (ele: any ) => {
                this.reactElement = ele;
            };
         let keycompoentns: string[] = ['autocomplete', 'combobox', 'dropdownlist', 'dropdowntree', 'multiselect',
             'listbox', 'colorpicker', 'numerictextbox', 'textbox',
             'uploader', 'maskedtextbox', 'slider','datepicker','datetimepicker','daterangepicker','timepicker','checkbox','switch','radio'];
         if (keycompoentns.indexOf(this.getModuleName()) !== -1) {
                this.htmlattributes.key = '' + ComponentBase.reactUid;
                ComponentBase.reactUid++;
             }

        }
        if (this.clsName) {
            let clsList: string[] = this.element.classList;
            let className: any =  this.htmlattributes['className'];
            for(let i: number = 0; i < clsList.length; i++){
                if ((className.indexOf(clsList[i]) == -1)){
                    this.htmlattributes['className'] = this.htmlattributes['className'] + ' '+ clsList[i];
                }  
            }
            this.clsName = false;
        }
        return this.htmlattributes;
    }

     /* tslint:disable:no-any */
     public trigger(eventName: string, eventProp?: any, successHandler?: any): void {
        if (this.isDestroyed !== true && this.modelObserver) {    
         if (isColEName.test(eventName)) {
             let handler: Function = getValue(eventName, this);
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
             if(eventName === 'created') {
                 setTimeout(()=>{
                     this.isCreated = true;
                     if(!this.isDestroyed) {
                         this.modelObserver.notify(eventName, eventProp, successHandler);    
                     }
                 })
             } else {
             this.modelObserver.notify(eventName, eventProp, successHandler);
             }
             this.isProtectedOnChange = prevDetection;
         }
 
     }
     private compareValues(value1: any, value2: any): boolean {
         let typeVal: string = typeof value1;
         let typeVal2: string = typeof value2;
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
         }
         return false;
     }
     public compareObjects(oldProps: any, newProps: any, propName?: string): ObjectValidator {
         let status: boolean = true;
         let lenSimilarity: boolean = (oldProps.length === newProps.length);
         let diffArray: Changes[] = [];
         if (lenSimilarity) {
             for (let i = 0, len = newProps.length; i < len; i++) {
                 let curObj: { [key: string]: Object } = {};
                 let oldProp: { [key: string]: Object } = oldProps[i];
                 let newProp: { [key: string]: Object } = newProps[i];
                 let keys: string[] = Object.keys(newProp);
                 if (keys.length !== 0) {
                     for (let key of keys) {
                         let oldValue: any = oldProp[key];
                         let newValue: any = newProp[key];
                         if (key === 'items') {
                            for(var _j=0; _j < newValue.length; _j++) {
                                if (this.getModuleName() === 'richtexteditor' && typeof(newValue[_j]) === 'object') {
                                    return {status: true};
                                }
                            }
                        }
                         if (this.getModuleName()=== 'grid' && key === 'field') {
                            curObj[key] = newValue;
                        }
                         if (!oldProp.hasOwnProperty(key) || !this.compareValues(oldValue, newValue)) {
                             if (!propName) {
                                 return { status: false };
                             }
                             status = false;
                             curObj[key] = newValue;
                         } 
                     }
                 }
                 else if (newProp[i] === oldProp[i]) {
                    status = true;
                 }
                 else {
                     if (!propName) {
                         return { status: false };
                     }
                     status = false;
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
             let changedProps: Changes[] = [];
             let directiveValue: { [key: string]: Object } = <{ [key: string]: Object }>this.validateChildren(
                 {}, this.directivekeys, (<{ children: React.ReactNode }>(props || this.props)));
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
                         } else {
                             if (compareOutput.changedProperties.length) {
                                 changedProps = changedProps.concat(compareOutput.changedProperties);
                             }
                             let obj: Object = {};
                             obj[key] = directiveValue[key];
                             this.prevProperties = extend(this.prevProperties, obj);
                         }
                     }
                 } else {
                     this.prevProperties = extend({}, directiveValue, {}, true);
                 }
                 if (changedProps.length) {
                     if (this.getModuleName() === 'grid' && key === 'columns') {
                         for (var _c1 = 0, allColumns = this.columns; _c1 < allColumns.length; _c1++) {
                             let compareField1: any = getValue('field', allColumns[_c1]);
                             let compareField2: any = getValue(_c1 + '.value.field', changedProps);
                             if (compareField1 === compareField2) {
                                 var propInstance: any = getValue(changedProps[_c1].key + '.' + changedProps[_c1].index, this);
                                 if (propInstance && propInstance.setProperties) {
                                     propInstance.setProperties(changedProps[_c1].value);
                                 }
                                 else {
                                     extend(propInstance, changedProps[_c1].value);
                                 }
                             }
                             else {
                                this.setProperties(directiveValue, silent);
                             }
                         }
                     }
                     else {
                         for (let changes of changedProps) {
                             let propInstance: any = getValue(changes.key + '.' + changes.index, this);
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
         var modulesName = ['dropdowntree', 'checkbox'];
         // tslint:disable-next-line:no-any
         if (this.initRenderCalled && this.isAppendCalled && this.element && ((!modulesName.indexOf(this.getModuleName())) ? document.body.contains(this.element) : true) && !this.isDestroyed && this.isCreated) {
             this.destroy();
         }
 
     }

    // tslint:disable:no-any
    public appendReactElement (element: any, container: HTMLElement) {
        let portal: any = (ReactDOM as any).createPortal(element, container);
        if (!this.portals) {
            this.portals = [portal];
        }
        else {
            this.portals.push(portal);
        }
    };
    // tslint:disable:no-any
    public renderReactTemplates (callback?: any): void {
        this.isReactForeceUpdate = true;
        if (callback) {
            this.forceUpdate(callback);
        } else {
            this.forceUpdate();
        }
        this.isReactForeceUpdate = false;
    }
 // tslint:disable:no-any 
     public clearTemplate(templateNames: string[], index?: any, callback?: any) {
         var tempPortal: any = [];
         if (templateNames && templateNames.length) {
             Array.prototype.forEach.call(templateNames, (propName: string) => {
                 let indexCount: number = 0;
                 let propIndexCount: number = 0;
                 this.portals.forEach((portal: any) => {
                     if (portal.propName === propName) {
                         tempPortal.push(propIndexCount);
                         propIndexCount++;
                     }
                 });
                 if (index && this.portals[tempPortal[index[indexCount]]].propName == propName) {
                     this.portals.splice(index, 1);
                     indexCount++;
                 } else {
                     for (var i = 0; i < this.portals.length; i++) {
                         if (this.portals[i].propName == propName) {
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
     };
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
                     this.processComplexTemplate(cacheVal, (child as any).type);
                     ret.push(cacheVal);
                 } else {
                     let cachedValue: Object = this.validateChildren(
                         <{ [key: string]: Object }>extend({}, prop), <{ [key: string]: Object }>matcher[key],
                         <{ children: React.ReactNode; }>prop) || prop;
                     if (cachedValue['children']) {
                         delete cachedValue['children'];
                     }
                     // tslint:disable
                     this.processComplexTemplate(cachedValue, (child as any).type);
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
 
