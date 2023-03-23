import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RibbonCollectionModel } from '@syncfusion/ej2-ribbon';


/**
 * `RibbonCollectionDirective` represent a collection in the React Ribbon. 
 * ```tsx
 * <RibbonComponent>
 *   <RibbonTabsDirective>
 *     <RibbonTabDirective></RibbonTabDirective>
 *     <RibbonTabDirective>
 *       <RibbonGroupsDirective>
 *         <RibbonGroupDirective>
 *             <RibbonCollectionsDirective>
 *                 <RibbonCollectionDirective></RibbonCollectionDirective>
 *                 <RibbonCollectionDirective></RibbonCollectionDirective>
 *             </RibbonCollectionsDirective>
 *         </RibbonGroupDirective>
 *       </RibbonGroupsDirective>
 *     </RibbonTabDirective>
 *   <RibbonTabsDirective>
 * </RibbonComponent>
 * ```
 */
export class RibbonCollectionDirective extends ComplexBase<RibbonCollectionModel & { children?: React.ReactNode }, RibbonCollectionModel> {
    public static moduleName: string = 'ribbonCollection';
}

export class RibbonCollectionsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'collections';
    public static moduleName: string = 'ribbonCollections';
}
