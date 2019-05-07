import * as React from 'react';
import { QueryBuilder, QueryBuilderModel } from '@syncfusion/ej2-querybuilder';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the React QueryBuilder Component
 * ```html
 * <QueryBuilderComponent></QueryBuilderComponent>
 * ```
 */
export class QueryBuilderComponent extends QueryBuilder {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<QueryBuilderModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'columns': 'column'};
    private immediateRender: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<QueryBuilderModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(QueryBuilderComponent, [ComponentBase, React.PureComponent]);
