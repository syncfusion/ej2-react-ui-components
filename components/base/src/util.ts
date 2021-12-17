/**
 * Util for React Base
 */
 import * as React from 'react';
 // tslint:disable-next-line:no-any
 export function applyMixins(derivedClass: any, baseClass: any[]): void {
     // tslint:disable:typedef
     baseClass.forEach(baseClass  => {
         Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
             if (name !== 'isMounted' && name !== 'replaceState') {
                 derivedClass.prototype[name] = baseClass.prototype[name];
             }
         });
     });
 }
  // tslint:enable:typedef
 
  type MouseEventHandler<T = Element> = React.EventHandler<React.MouseEvent<T>>;
  type FocusEventHandler<T = Element> = React.EventHandler<React.FocusEvent<T>>;
 export interface DefaultHtmlAttributes {
     alt?: string;
     className?: string;
     disabled?: boolean;
     form?: string;
     id?: string;
     name?: string;
     readOnly?: boolean;
     style?: React.CSSProperties;
     tabIndex?: number;
     title?: string;
     type?: string;
     onClick?: MouseEventHandler;
     onFocus?: FocusEventHandler;
     onBlur?: FocusEventHandler;
     immediateRender?: boolean;
     delayUpdate?: string | boolean;
     // tslint:disable-next-line:no-any
     onChange?: any;
 
 }
 