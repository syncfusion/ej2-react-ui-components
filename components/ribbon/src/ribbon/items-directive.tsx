import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RibbonItemModel } from '@syncfusion/ej2-ribbon';

export interface RibbonItemDirTypecast {
    itemTemplate?: string | Function | any;
}
/**
 * `RibbonItemDirective` represent a item in the React Ribbon. 
 * ```tsx
 * <RibbonComponent>
 *   <RibbonTabsDirective>
 *     <RibbonTabDirective></RibbonTabDirective>
 *     <RibbonTabDirective>
 *       <RibbonGroupsDirective>
 *         <RibbonGroupDirective>
 *             <RibbonCollectionsDirective>
 *                 <RibbonCollectionDirective>
 *                     <RibbonItemsDirective>
 *                         <RibbonItemDirective></RibbonItemDirective>
 *                         <RibbonItemDirective></RibbonItemDirective>
 *                     </RibbonItemsDirective>
 *                 </RibbonCollectionDirective>
 *             </RibbonCollectionsDirective>
 *         </RibbonGroupDirective>
 *       </RibbonGroupsDirective>
 *     </RibbonTabDirective>
 *   <RibbonTabsDirective>
 * </RibbonComponent>
 * ```
 */
export class RibbonItemDirective extends ComplexBase<RibbonItemModel| RibbonItemDirTypecast & { children?: React.ReactNode }, RibbonItemModel| RibbonItemDirTypecast> {
    public static moduleName: string = 'ribbonItem';
}

export class RibbonItemsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'items';
    public static moduleName: string = 'ribbonItems';
}
