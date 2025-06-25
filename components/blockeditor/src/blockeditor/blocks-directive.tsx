import { ComplexBase } from '@syncfusion/ej2-react-base';
import { BlockModel } from '@syncfusion/ej2-blockeditor';


/**
 * `Block` directive represent a block of the React BlockEditor. 
 * It must be contained in a BlockEditor component(`BlockEditor`). 
 * ```tsx
 * <BlockEditor>
 *   <Blocks>
 *     <Block></Block>
 *     <Block></Block>
 *   <Blocks>
 * </BlockEditor>
 * ```
 */
export class BlockDirective extends ComplexBase<BlockModel & { children?: React.ReactNode }, BlockModel> {
    public static moduleName: string = 'block';
}

export class BlocksDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'blocks';
    public static moduleName: string = 'blocks';
}
