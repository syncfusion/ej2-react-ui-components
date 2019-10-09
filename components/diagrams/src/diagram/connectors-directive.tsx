import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ConnectorModel } from '@syncfusion/ej2-diagrams';


/**
 * `ConnectorsDirective` directive represent a connectors of the react diagram. 
 * It must be contained in a Diagram component(`DiagramComponent`). 
 * ```tsx
 * <DiagramComponent>
 * <ConnectorsDirective>
 * <ConnectorDirective></ConnectorDirective>
 * </ConnectorsDirective>
 * </DiagramComponent>
 * ```
 */
export class ConnectorDirective extends ComplexBase<ConnectorModel, ConnectorModel> {
    public static moduleName: string = 'connector';
}

export class ConnectorsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'connectors';
    public static moduleName: string = 'connectors';
}
