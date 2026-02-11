/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Dependency injection
 */
import * as React from 'react';

export class Inject extends React.PureComponent<{ services: Object[] }, {}> {
    public static isService: boolean = true;
    public render(): any {
        return null;
    }

}
