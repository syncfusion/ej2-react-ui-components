import { ComplexBase } from '@syncfusion/ej2-react-base';
import { NodeFixedUserHandleModel } from '@syncfusion/ej2-diagrams';


/**
 * `Node` directive represent a annotation of the react Diagram. 
 * It must be contained in a Diagram component(`DiagramComponent`). 
 * ```tsx
 * <DiagramComponent>
 * <NodesDirective>
 * <NodeDirective>
 * <NodeFixedUserHandlesDirective>
 * <NodeFixedUserHandleDirective>
 * </NodeFixedUserHandleDirective>
 * </NodeFixedUserHandlesDirective>
 * </NodeDirective>
 * </NodesDirective>
 * </DiagramComponent>
 * ```
 */
export class NodeFixedUserHandleDirective extends ComplexBase<NodeFixedUserHandleModel, NodeFixedUserHandleModel> {
    public static moduleName: string = 'nodeFixedUserHandle';
}

export class NodeFixedUserHandlesDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'fixedUserHandles';
    public static moduleName: string = 'nodeFixedUserHandles';
}
