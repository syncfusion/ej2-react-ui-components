import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
import { Kanban } from '@syncfusion/ej2-kanban';

/**
 * `ColumnsDirective` represent a columns of the react Kanban board.
 * It must be contained in a Kanban component(`KanbanComponent`).
 * ```tsx
 * <KanbanComponent>
 *  <ColumnsDirective>
 *   <ColumnDirective keyField='Open' textField='To Do'></ColumnDirective>
 *   <ColumnDirective keyField='Close' textField='Completed'></ColumnDirective>
 *  <ColumnsDirective>
 * </KanbanComponent>
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
 * `StackedHeadersDirective` represent a stacked header of the react Kanban board.
 * It must be contained in a Kanban component(`KanbanComponent`).
 * ```tsx
 * <KanbanComponent>
 *  <StackedHeadersDirective>
 *   <StackedHeaderDirective keyField='Open' text='To Do'></StackedHeaderDirective>
 *   <StackedHeaderDirective keyField='Close' text='Completed'></StackedHeaderDirective>
 *  <StackedHeadersDirective>
 * </KanbanComponent>
 * ```
 */
class StackedHeaderDirective extends ComplexBase {
}
StackedHeaderDirective.moduleName = 'stackedHeader';
class StackedHeadersDirective extends ComplexBase {
}
StackedHeadersDirective.propertyName = 'stackedHeaders';
StackedHeadersDirective.moduleName = 'stackedHeaders';

/**
 * `KanbanComponent` represents the react Kanban.
 * ```tsx
 * <KanbanComponent/>
 * ```
 */
class KanbanComponent extends Kanban {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'columns': 'column', 'stackedHeaders': 'stackedHeader' };
        this.immediateRender = false;
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(KanbanComponent, [ComponentBase, Component]);

export { ColumnDirective, ColumnsDirective, StackedHeaderDirective, StackedHeadersDirective, KanbanComponent };
export * from '@syncfusion/ej2-kanban';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-kanban.es2015.js.map
