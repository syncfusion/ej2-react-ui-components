/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
/**
 * Template compiler for react
 */
import { setTemplateEngine, getTemplateEngine, extend } from '@syncfusion/ej2-base';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
/**
 * Compile the string value to DOM elements.
 */
const stringCompiler: (template: string | Function, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();
/**
 * Compile the template property to the DOM elements.
 *
 * @param {any} templateElement ?
 * @param {Object} helper ?
 * @returns {Function} ?
 * @private
 */
export function compile(templateElement: any, helper?: Object):
(data: Object | JSON, component?: any, propName?: any, element?: any) => Object {
    if (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
        return stringCompiler(templateElement, helper);
    } else {
        return (data: any, component: any, prop: string, element: any): any => {
            let actTemplate: any = templateElement;
            let actData: Object = data;
            if (typeof actTemplate === 'object') {
                actTemplate = templateElement.template;
                actData = extend({}, data, templateElement.data || {});
            }
            let cEle: Element;
            if (element) {
                cEle = element;
            } else {
                cEle = document.createElement('div');
            }
            const rele: any = React.createElement(actTemplate, actData);
            const portal: any = (ReactDOM as any).createPortal(rele, cEle);
            portal.propName = prop;
            if (!component.portals) {
                component.portals = [portal];
            } else {
                component.portals.push(portal);
            }

            if (!element) {
                return [cEle];
            }
        };
    }
}

setTemplateEngine({ compile: (compile as any) });
