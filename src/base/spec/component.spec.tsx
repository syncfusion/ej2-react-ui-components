import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ReactStyler, ReactStyler1, ReactStyler2, FieldDirective, FieldsDirective, InnerFieldDirective, InnerFieldsDirective, } from './sample-component';
import { Inject, ComponentBase } from '../src/index';
import {isNullOrUndefined} from '@syncfusion/ej2-base';
/**
 * 
 */
class DummyInject {
    public value: string;
    public access: Object;
    constructor() {
        this.value = 'test';
    }
}

class Sample extends React.PureComponent<{ content?: string ,name?:string,disabled?:boolean}, { content?: string ,name?:string,disabled?:boolean, dummyVal?:string}>{
    constructor(props: any) {
        super(props);
        this.state = { content: 'initial' ,name:'snm',disabled:false};
    }
    public changeState(): void {
        this.setState({name:'ff',disabled:true});
    }
    public duplicateUpdte(): void {
        this.setState({content: new Date().toDateString()})
    }
    
    public triggerChange(): void {

    }
    public render(): any {
        return <div>
            <ReactStyler disabled={false}></ReactStyler>
            <button onClick={this.duplicateUpdte.bind(this)} id="dup-state">DuplicateUpdate</button>
            <button onClick={this.changeState.bind(this)} id="change-state">ChangeState</button>
            <ReactStyler1 ref='ReactStyler1' id="snm" className={this.state.name} headerText = "string" statelessTemplates={['content']}
             disabled={this.state.disabled} content={this.state.content}   onChange= {this.triggerChange} change={this.triggerChange}>
             <FieldsDirective><FieldDirective name={this.state.content} status='processed' headerText='string'>
            <InnerFieldsDirective>
                <InnerFieldDirective name='snm' status='processed'></InnerFieldDirective>
                <InnerFieldDirective name='snm1' status='processed1'></InnerFieldDirective>
            </InnerFieldsDirective>
        </FieldDirective>
            <FieldDirective name='snm1' status='processed1' headerText='string'></FieldDirective></FieldsDirective></ReactStyler1 ></div>
    }
}

class Sample1 extends React.PureComponent<{ content?: string,name?:string }, { content?: string ,name?:string}>{
    constructor(props: any) {
        super(props);
        this.state = { content: 'initial',name:'snm' };
    }
    public render(): any {
        return <ReactStyler2 ref='ReactStyler2'  content={this.state.content} statelessTemplates={['content']}><FieldsDirective><FieldDirective name={this.state.content} status='processed'>
            <InnerFieldsDirective>
                <InnerFieldDirective name='snm' status='processed'></InnerFieldDirective>
                <InnerFieldDirective name='snm1' status='processed1'></InnerFieldDirective>
            </InnerFieldsDirective>
        </FieldDirective>
            <FieldDirective name='snm1' status='processed1'></FieldDirective></FieldsDirective></ReactStyler2 >
    }
}
/**
 * Checking for instance creation
 */
let instance: any = new ComponentBase();
function templateFunction(prop:any){
    return (
    <div>
        {prop.test}
    </div>);
}
describe('test', () => {
    let ele: HTMLElement;
    let result: any;
    beforeEach(() => {
        ele = document.createElement('div');
        document.body.appendChild(ele);
    });
    it('Component intialized poperly', (done: Function) => {
        result = ReactDom.render(<ReactStyler />, ele);
       setTimeout( () =>{
        expect(ele.firstElementChild.classList.contains('e-control')).toBe(true);
        expect((ele.firstElementChild as any).ej2_instances[0].getModuleName()).toBe('Styler');
        done();
       },15) 
    });
    describe('HTML attributes processed properly', () => {
        beforeEach(() => {
            result = ReactDom.render(<ReactStyler content='sde' title='titleAttribute' form='testform'
                id='attribute' data-check='dataAttribute' aria-pressed='false' delayUpdate={false}
                immediateRender={true} isLegacyTemplate={true} statelessTemplates={['content']} />, ele);
        });
        it('Check deafulat html attributes', () => {
            expect(ele.firstElementChild.id).toBe('attribute');
        });
        it('Check data attributes', () => {
            expect(ele.firstElementChild.getAttribute('data-check')).toBe('dataAttribute');
        });
        it('Check aria attributes', () => {
            expect(ele.firstElementChild.getAttribute('aria-pressed')).toBe('false');
        });
        it('Check custom control  attributes', () => {
            expect(ele.firstElementChild.getAttribute('form')).toBe('testform');
        });
        it('Check base and component attributes', () => {
            // Base attribute should not be append to the DOM element.
            expect(ele.firstElementChild.getAttribute('content')).toBe(null);
            expect(ele.firstElementChild.getAttribute('delayUpdate')).toBe(null);
            expect(ele.firstElementChild.getAttribute('immediateRender')).toBe(null);
            expect(ele.firstElementChild.getAttribute('isLegacyTemplate')).toBe(null);
            expect(ele.firstElementChild.getAttribute('statelessTemplates')).toBe(null);
            // Base properties are maintained within the instance.
            expect(result.content).toBe('sde');
            expect(result.delayUpdate).toBe(false);
            expect(result.immediateRender).toBe(true);
            expect(result.isLegacyTemplate).toBe(true);
            expect(result.statelessTemplates.length).toBe(1);
            expect(result.statelessTemplates[0]).toBe('content');
        });
    });
    it('Check injectable', () => {
        result = ReactDom.render(<ReactStyler ><Inject services={[DummyInject]} /></ReactStyler>, ele);
        expect(result.getInjectedModules().length).toBe(1);
    });
    it('component doesnot have injectable', () => {
        result = ReactDom.render(<ReactStyler1
             template={{template:templateFunction,data:{}}}><Inject services={[DummyInject]} /></ReactStyler1>, ele);
        expect(result.getInjectedModules()).toBe(undefined);
    });
    it('component doesnot have injectable with empty data', () => {
        result = ReactDom.render(<ReactStyler1
             template={{template:templateFunction}}><Inject services={[DummyInject]} /></ReactStyler1>, ele);
        expect(result.getInjectedModules()).toBe(undefined);
    });
    describe('Directive child processed properly ', () => {
        beforeEach((done: Function) => {
            result = ReactDom.render(<ReactStyler1 template={templateFunction}><FieldsDirective><FieldDirective name='snm' status='processed'
             template={templateFunction}>
                <InnerFieldsDirective>
                    <InnerFieldDirective name='snm' status='processed'></InnerFieldDirective>
                    <InnerFieldDirective name='snm1' status='processed1'></InnerFieldDirective>
                </InnerFieldsDirective>
            </FieldDirective>
                <FieldDirective name='snm1' status='processed1'></FieldDirective></FieldsDirective></ReactStyler1>, ele);
                setTimeout(()=>{
                    done();
                },10)
        });
        it('Check first level directive value', () => {
            expect(result.fields.length).toBe(2);
            expect(result.fields[0].name).toBe('snm');
        });
        it('check template value string template',()=>{
            expect(result.val.innerHTML).toContain('access');
        });
        it('Check second level directive value', () => {
            expect(result.fields[0].innerFields.length).toBe(2);
            expect(result.fields[0].innerFields[0].name).toBe('snm');
        });

    });
    it('without directive name specified  child processed is not performed ', () => {
        result = ReactDom.render(<ReactStyler template={templateFunction}><FieldsDirective><FieldDirective name='snm' status='processed' />
            <FieldDirective name='snm' status='processed'></FieldDirective></FieldsDirective></ReactStyler>, ele);
         expect(result.fields.length).toBe(0);
    });
    it('check template value for react template compiler ', (done: Function) => {
        result = ReactDom.render(<ReactStyler template={templateFunction}><FieldsDirective><FieldDirective name='snm' status='processed' />
            <FieldDirective name='snm' status='processed'></FieldDirective></FieldsDirective></ReactStyler>, ele);
       setTimeout( ()=>{
        expect(result.val.innerHTML).toContain('access');
        done();
       },10);
    });
    describe('PropertyChange', () => {
        beforeEach((done: Function) => {
            result = ReactDom.render(<Sample />, ele);
            setTimeout( ()=>{
                done();
               },10);
        });
        it('check initial value', () => {
            expect(result.refs.ReactStyler1.content).toBe('initial');
            expect(result.refs.ReactStyler1.fields[0].name).toBe('initial');
        });
        it('check after value change', () => {
            result.setState({ content: 'changed' });
            expect(result.refs.ReactStyler1.content).toBe('changed');
            expect(result.refs.ReactStyler1.fields[0].name).toBe('changed');
        });
        it('check onpropertychange calling', () => {
            let propChangeSpy: jasmine.Spy = jasmine.createSpy('changed');
            ReactStyler1.prototype.onPropertyChanged = propChangeSpy;
            result.setState({ content: 'rePlaced' });
            expect(propChangeSpy).toHaveBeenCalled();
            document.getElementById('dup-state').click();
            document.getElementById('change-state').click();
        });
        it('check the dynamic template with multi level',()=>{
            expect(result.refs.ReactStyler1.fields[0].header.text).toBe('string');
        });
        it('check the dynamic template with single level',()=>{
            expect(result.refs.ReactStyler1.fields[1].header.text).toBe('string');
        });
    });
    describe('Prevent directive child Propertyrefresh', () => {
        beforeEach((done: Function) => {
            result = ReactDom.render(<Sample1 />, ele);
            setTimeout( ()=>{
                done();
               },10);
        });
        it('check after value change', () => {
            result.setState({ content: 'changed' });
            expect(result.refs.ReactStyler2.content).toBe('changed');
            expect(result.refs.ReactStyler2.fields[0].name).toBe('initial');
            result.refs.ReactStyler2.canDelayUpdate =  true;
            result.setState({ content: 'Networkcheck' });
        });
    });
    describe('destroy calls working propelry ', () => {
        beforeEach((done: Function) => {
            result = ReactDom.render(<ReactStyler1 ><FieldsDirective><div>test</div></FieldsDirective></ReactStyler1>, ele);
            setTimeout(()=>{
                done();
            },10)
        });
        it('', () => {
            let spy: jasmine.Spy = jasmine.createSpy('destroy');
            ReactStyler.prototype.destroy = spy;
            result = ReactDom.render(<Sample />, ele);
            expect(spy).toHaveBeenCalled();
        });
    });
    afterEach(() => {
        document.body.removeChild(ele);
    });
});
