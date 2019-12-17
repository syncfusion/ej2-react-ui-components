import { ComplexBase } from '@syncfusion/ej2-react-base';
import { PanelModel } from '@syncfusion/ej2-layouts';

export interface PanelDirTypecast {
    header?: string | Function | any;
    content?: string | Function | any;
    panelsHeader?: string | Function | any;
    panelsContent?: string | Function | any;
}
/**
 * `PanelsDirective` represent a presets of the react dashboardlayout. 
 * It must be contained in a dashboardlayout component(`DashBoardLayoutComponent`). 
 * ```tsx
 * <DashBoardLayoutComponent> 
 * <PanelsDirective>
 * <PanelDirective></PanelDirective>
 * <PanelDirective></PanelDirective>
 * </PanelsDirective>
 * </DashBoardLayoutComponent>
 * ```
 */
export class PanelDirective extends ComplexBase<PanelModel| PanelDirTypecast, PanelModel| PanelDirTypecast> {
    public static moduleName: string = 'panel';
    public static complexTemplate: Object = {'panelsHeader': 'panels.header', 'panelsContent': 'panels.content'};
}

export class PanelsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'panels';
    public static moduleName: string = 'panels';
}
