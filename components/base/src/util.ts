/**
 * Util for React Base
 */
import * as React from 'react';
// tslint:disable-next-line:no-any
export function applyMixins(derivedClass: any, baseClass: any[]): void {
    // tslint:disable:typedef
    baseClass.forEach(baseClass  => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
 // tslint:enable:typedef


export interface DefaultHtmlAttributes {
    alt?: string;
    className?: string;
    disabled?: boolean;
    form?: string;
    id?: string;
    readOnly?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
    title?: string;
    type?: string;
    onClick?: MouseEventInit;
    onFocus?: FocusEventInit;
    onBlur?: FocusEventInit;
}
