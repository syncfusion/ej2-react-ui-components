import { ComplexBase } from '@syncfusion/ej2-react-base';
import { RibbonTabModel } from '@syncfusion/ej2-ribbon';


/**
 * `RibbonTabDirective` represent a tab of the React Ribbon. 
 * It must be contained in a Ribbon component(`RibbonComponent`). 
 * ```tsx
 * <RibbonComponent>
 *   <RibbonTabsDirective>
 *     <RibbonTabDirective></RibbonTabDirective>
 *     <RibbonTabDirective></RibbonTabDirective>
 *   <RibbonTabsDirective>
 * </RibbonComponent>
 * ```
 */
export class RibbonTabDirective extends ComplexBase<RibbonTabModel & { children?: React.ReactNode }, RibbonTabModel> {
    public static moduleName: string = 'ribbonTab';
}

export class RibbonTabsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'tabs';
    public static moduleName: string = 'ribbonTabs';
}
