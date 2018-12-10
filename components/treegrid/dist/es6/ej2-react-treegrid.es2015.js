import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { TreeGrid } from '@syncfusion/ej2-treegrid';

/**
 * `ColumnDirective` represent a column of the react TreeGrid.
 * It must be contained in a TreeGrid component(`TreeGridComponent`).
 * ```tsx
 * <TreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}>
 * <ColumnsDirective>
 * <ColumnDirective field='ID' width='100'></ColumnDirective>
 * <ColumnDirective field='name' headerText='Name' width='100'></ColumnDirective>
 * <ColumnsDirective>
 * </TreeGridComponent>
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
 * `AggregateDirective` represent a aggregate row of the react TreeGrid.
 * It must be contained in a TreeGrid component(`TreeGridComponent`).
 * ```tsx
 * <TreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}>
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
 * </TreeGridComponent>
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
 * `AggregateColumnDirective represent a aggregate column of the react TreeGrid.
 * ```tsx
 * <TreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}>
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
 * </TreeGridComponent>
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
 * `TreeTreeGridComponent` represents the react TreeTreeGrid.
 * ```tsx
 * <TreeTreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
class TreeGridComponent extends TreeGrid {
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
applyMixins(TreeGridComponent, [ComponentBase, PureComponent]);

export { ColumnDirective, ColumnsDirective, AggregateDirective, AggregatesDirective, AggregateColumnDirective, AggregateColumnsDirective, TreeGridComponent };
export * from '@syncfusion/ej2-treegrid';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-treegrid.es2015.js.map
