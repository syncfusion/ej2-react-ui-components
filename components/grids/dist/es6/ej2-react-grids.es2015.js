import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { Grid, Pager } from '@syncfusion/ej2-grids';

/**
 * `ColumnDirective` represent a column of the react Grid.
 * It must be contained in a Grid component(`GridComponent`).
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * <ColumnsDirective>
 * </GridComponent>
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
 * `AggregateDirective` represent a aggregate row of the react Grid.
 * It must be contained in a Grid component(`GridComponent`).
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * </ColumnsDirective>
 * <AggregatesDirective>
 * <AggregateDirective>
 * <AggregateColumnsDirective>
 * <AggregateColumnDirective field='ID' type='Min'></AggregateColumnsDirective>
 * </<AggregateColumnsDirective>
* </AggregateDirective>
 * </AggregatesDirective>
 * </GridComponent>
 * ```
 */
class AggregateDirective extends ComplexBase {
}
AggregateDirective.moduleName = 'aggregate';
class AggregatesDirective extends ComplexBase {
}
AggregatesDirective.propertyName = 'aggregates';
AggregatesDirective.moduleName = 'aggregates';

/**
 * `AggregateColumnDirective represent a aggregate column of the react Grid.
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * </ColumnsDirective>
 * <AggregatesDirective>
 * <AggregateDirective>
 * <AggregateColumnsDirective>
 * <AggregateColumnDirective field='ID' type='Min'></AggregateColumnsDirective>
 * </AggregateColumnsDirective>
 * </AggregateDirective>
 * </AggregatesDirective>
 * </GridComponent>
 * ```
 */
class AggregateColumnDirective extends ComplexBase {
}
AggregateColumnDirective.moduleName = 'aggregateColumn';
class AggregateColumnsDirective extends ComplexBase {
}
AggregateColumnsDirective.propertyName = 'columns';
AggregateColumnsDirective.moduleName = 'aggregateColumns';

/**
 * `GridComponent` represents the react Grid.
 * ```tsx
 * <GridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
class GridComponent extends Grid {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'columns': 'column', 'aggregates': { 'aggregate': { 'aggregateColumns': 'aggregateColumn' } } };
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
applyMixins(GridComponent, [ComponentBase, PureComponent]);

/**
 * `PagerComponent` represents the react Pager.
 * ```tsx
 * <PagerComponent/>
 * ```
 */
class PagerComponent extends Pager {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(PagerComponent, [ComponentBase, PureComponent]);

export { ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective, AggregateColumnDirective, AggregateColumnsDirective, GridComponent, PagerComponent };
export * from '@syncfusion/ej2-grids';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-grids.es2015.js.map
