/**
 * Template compiler for react
 */
import { setTemplateEngine, getTemplateEngine, detach, extend } from '@syncfusion/ej2-base';
import * as ReactDOM from 'react-dom';
// tslint:disable:no-any
let stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();
export function compile(templateElement: any, helper?: Object):
    (data: Object | JSON, component?: any, propName?: any) => Object {
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    } else {
        return (data: any, component: any): any => {

            let actTemplate: Function | Object = templateElement;
            let actData: Object = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = extend({}, data, templateElement.data || {});
            }
            if (component && component.isReactHybrid) {
                return [{ template: actTemplate, data: data }];
            } else {
                let ele: Element = document.createElement('div');
                document.body.appendChild(ele);
                ReactDOM.render((actTemplate as Function)(actData), ele);
                detach(ele);
                return ele.children;
            }
        };
    }
}

setTemplateEngine({ compile: (compile as any) });