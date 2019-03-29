import { ComplexBase } from '@syncfusion/ej2-react-base';
import { TabItemModel } from '@syncfusion/ej2-navigations';

export interface TabItemDirTypecast {
    content?: string | Function | any;
    headerText?: string | Function | any;
}
/**
 * `TabItemDirective` directive represent a column of the react Tab. 
 * It must be contained in a Tab component(`Tab`). 
 * ```ts
 * <TabComponent 
 *  <TabItemsDirective>
 *   <TabItemDirective header= { 'Header 1' } content= { 'Content 1' } />
 *   <TabItemDirective header= { 'Header 2' } content= { 'Content 2' } />
 *  <TabItemsDirective>
 * </TabComponent>
 * ```
 */
export class TabItemDirective extends ComplexBase<TabItemModel| TabItemDirTypecast, TabItemModel| TabItemDirTypecast> {
    public static moduleName: string = 'tabItem';
    public static complexTemplate: Object = {'headerText': 'header.text'};
}

export class TabItemsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'items';
    public static moduleName: string = 'tabItems';
}