import * as React from 'react';

/**
 * Directory base
 */
export class ComplexBase<P, S> extends React.PureComponent<P, S> {
    public static isDirective: boolean = true;
    public render(): JSX.Element | null {
        return null;
    }
}
