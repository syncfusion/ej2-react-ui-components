/**
 * 
 */
import { ComponentBase, ComplexBase } from '../src/index';
import { applyMixins, DefaultHtmlAttributes } from '../src/index';
import {compile} from '@syncfusion/ej2-base';
import * as React from 'react';
import { Component,ChildProperty, Property, Collection, Event, NotifyPropertyChanges, INotifyPropertyChanged } from '@syncfusion/ej2-base';
export interface StylerModel {
    size?: string;
    enablePersistence?: boolean;
    enableRtl?: boolean;
    locale?: string;
    created?: Function;
    disabled?: boolean;
    destroyed?: Function;
    content?: string;
    template?: string | Function | any;
    headerText?: string | Function | any;
    change?: any;
    onChange?:any;
}

export class LocalField extends ChildProperty<LocalField> {
    @Property()
    public status: string;
    @Property()
    public name: string;
    @Property()
    public header: Object;
}
export interface FieldModel {
      status?: string;
      name?: string;
      template?:string | Function;
      headerText ?: string;
}
@NotifyPropertyChanges
export class Styler extends Component<HTMLElement> implements INotifyPropertyChanged {
    @Property('12px')
    public size: string;
    @Property(false)
    public enablePersistence: boolean;
    @Property('SampleContent')
    public content: string;
    @Property({ color: 'red' })
    public settings: { color: string, size: number };
    @Property()
    public template:string;
     @Property()
    public disbled:boolean;
    @Property([])
    public items: string[];
    @Property()
    public event1: Function;
    @Property({})
    public header: Object;
    @Collection([], LocalField)
    public fields: FieldModel[];
    @Property('true')
    public enableTouch: boolean;
    @Property()
    public event2: Function;
    @Property()
    public event3: Function;
    @Event()
    public created: Function;
    @Event()
    public destroyed: Function;
    @Event()
    public change: Function;
    @Event()
    public input: Function;
    public val:any;
    constructor(fontObj?: StylerModel, id?: string | HTMLElement) {
        super(fontObj, id);
    }
    public touchModule: Touch;
 
    public preRender(): void { }
    public getModuleName(): string {
        return 'Styler';
    }
    public getPersistData(): string {
        return this.ignoreOnPersist(['size']);
    }
    public render(): void {
        this.element.classList.add('e-styler');
        this.element.style.fontSize = this.size;
        this.element.innerHTML = this.content;
        if(this.template) {
            let compiledString: Function = compile(this.template);
            let ele: HTMLElement = document.createElement('div');
            //this.element.appendChild(ele);
            //document.body.appendChild(ele);
            this.val = ele;
          //  debugger;
            ele.appendChild(compiledString({test:'access'}, this,'template')[0]);
        }
        this.trigger('change',{event:{},value:'snm'});
    }
    public destroy(): void {
        this.element.classList.remove('e-styler');
        super.destroy();
    }
    public onPropertyChanged(newProp: any, oldProp: any): void {
        this.element.style.fontSize = newProp['size'];
    }
}


export class ReactStyler extends Styler {
    public state: any;
    public setState: any;
    private portals: React.ReactElement[] = [];
    public  initRenderCalled: boolean = false;
    public checkInjectedModules: boolean =  true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> & Readonly<StylerModel &
     DefaultHtmlAttributes & {form?: string}>;
    public forceUpdate: (callBack?: () => any) => void;
    private getDefaultAttributes: Function;
    public context: any;
    private complexTemplate:Object = {headerText: 'header.text'};
    public isReactComponent: Object;
    public controlAttributes: string[] =['form'];
    public refs: {
        [key: string]: any
    };
    constructor(props: any) {
        super(props)
    }

    public render(): any {
        if (this.element && !this.initRenderCalled) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return (
                React.createElement("button", this.getDefaultAttributes(),React.createElement((React as any).Fragment, null,[].concat(this.portals, this.props.children)),
                )
            );
        }
    }
}
export class FieldDirective extends  ComplexBase<FieldModel, FieldModel> {
    public static moduleName:string = 'field';
    public static complexTemplate:Object = {headerText: 'header.text'};
}

export class FieldsDirective extends  ComplexBase<{},{}> {
     public static propertyName: string = 'fields';
     public static moduleName:string = 'fields';
}

export class InnerFieldsDirective extends ComplexBase<{},{}> {
   public static propertyName: string = 'innerFields';
   public static moduleName:string = 'innerFields';
}

export class InnerFieldDirective extends ComplexBase<FieldModel, FieldModel> {
    public static moduleName:string = 'innerField';
}

applyMixins(ReactStyler, [ComponentBase, React.PureComponent]);
export class ReactStyler1 extends ReactStyler {
   public checkInjectedModules: boolean =  false;
   public directivekeys: { [key: string]: Object } = { fields : {field: {innerFields: 'innerField'}} };
}

export class ReactStyler2 extends ReactStyler1 {
   private skipRefresh: string[]= ['fields'];
}
