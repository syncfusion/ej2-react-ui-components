/**
 * Template compiler for react
 */
import { setTemplateEngine, getTemplateEngine, detach } from '@syncfusion/ej2-base';
import * as ReactDOM from 'react-dom';
 // tslint:disable:no-any
let stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();
export function compile(templateElement: any, helper?: Object):
    (data: Object | JSON, component?: any, propName?: any) => Object {
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    } else {
        return (data: any): any => {
            let ele: Element = document.createElement('div');
            document.body.appendChild(ele);
            ReactDOM.render(templateElement(data), ele);
            detach(ele);
            return ele.children;
        };
    }
}

setTemplateEngine({ compile: (compile as any) });