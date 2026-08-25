/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
/**
 * Util for React Base
 */
import * as React from 'react';
/**
 * Apply mixins for the React components.
 *
 * @param {any} derivedClass ?
 * @param {any[]} baseClass ?
 * @returns {void} ?
 * @private
 */
export function applyMixins(derivedClass: any, baseClass: any[]): void {
    baseClass.forEach((baseClass: any)  => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((name: string) => {
            if (name !== 'isMounted' && name !== 'replaceState' && name !== 'render') {
                derivedClass.prototype[`${name}`] = baseClass.prototype[`${name}`];
            }
        });
    });
}

type MouseEventHandler<T = Element> = React.EventHandler<React.MouseEvent<T>>;
type FocusEventHandler<T = Element> = React.EventHandler<React.FocusEvent<T>>;
export interface DefaultHtmlAttributes {
    ref?: React.Ref<any>;
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
    isLegacyTemplate?: boolean;
    delayUpdate?: string | boolean;
    onChange?: any;
    /**
     * Specifies the array of the template names where the state value updates need to be ignored.
     *
     * ```html
     * <TreeViewComponent fields={fields} statelessTemplates={['nodeTemplate']} nodeTemplate={nodeTemplate} />
     * ```
     *
     * If the templates are defined in nested directives of the component, then pass the statelessTemplates property array value as "directiveTemplates" instead of the template names.
     *
     * ```html
     * <GridComponent  dataSource={siteCedarData} statelessTemplates={['directiveTemplates']}>
     *     <ColumnsDirective>
     *         <ColumnDirective field="name" headerText="asset" textAlign="Left" />
     *         <ColumnDirective field="status" headerText="status" textAlign="Center" template={renderStatusCell} />
     *     </ColumnsDirective>
     * </GridComponent>
     * ```
     *
     * This support will prevent the re-rendering of the component template during state updates.
     * It will increase the performance of the components if you prevent state updates for the templates that are not required.
     */
    statelessTemplates?: string[];
}
