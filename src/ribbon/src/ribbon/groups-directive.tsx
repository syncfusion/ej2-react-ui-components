import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RibbonGroupModel } from '@syncfusion/ej2-ribbon';


/**
 * `RibbonGroupDirective` represent a group in the React Ribbon. 
 * ```tsx
 * <RibbonComponent>
 *   <RibbonTabsDirective>
 *     <RibbonTabDirective></RibbonTabDirective>
 *     <RibbonTabDirective>
 *       <RibbonGroupsDirective>
 *         <RibbonGroupDirective></RibbonGroupDirective>
 *         <RibbonGroupDirective></RibbonGroupDirective>
 *       </RibbonGroupsDirective>
 *     </RibbonTabDirective>
 *   <RibbonTabsDirective>
 * </RibbonComponent>
 * ```
 */
export class RibbonGroupDirective extends ComplexBase<RibbonGroupModel & { children?: React.ReactNode }, RibbonGroupModel> {
    public static moduleName: string = 'ribbonGroup';
}

export class RibbonGroupsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'groups';
    public static moduleName: string = 'ribbonGroups';
}
