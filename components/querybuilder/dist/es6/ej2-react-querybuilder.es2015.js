import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';

/**
 * `ColumnDirective` represent a column of the react QueryBuilder.
 * It must be contained in a QueryBuilder component(`GridComponent`).
 * ```tsx
 * <QueryBuilderComponent dataSource={data}>
 *   <ColumnsDirective>
 *     <ColumnDirective field='ID' label='ID' type='number'></ColumnDirective>
 *     <ColumnDirective field='Date' label='Date' type='date' format='dd/MM/yyyy'></ColumnDirective>
 *   <ColumnsDirective>
 * </QueryBuilderComponent>
 * ```
 */
class ColumnDirective extends ComplexBase {
}
ColumnDirective.moduleName = 'column';
class ColumnsDirective extends ComplexBase {
}
ColumnsDirective.propertyName = 'columns';
ColumnsDirective.moduleName = 'columns';

/**
 * Represents the React QueryBuilder Component
 * ```html
 * <QueryBuilderComponent></QueryBuilderComponent>
 * ```
 */
class QueryBuilderComponent extends QueryBuilder {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'columns': 'column' };
        this.immediateRender = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(QueryBuilderComponent, [ComponentBase, PureComponent]);

export { ColumnDirective, ColumnsDirective, QueryBuilderComponent };
export * from '@syncfusion/ej2-querybuilder';
//# sourceMappingURL=ej2-react-querybuilder.es2015.js.map
