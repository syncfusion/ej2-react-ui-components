import { ComplexBase } from '@syncfusion/ej2-react-base';
import { LevelSettingsModel } from '@syncfusion/ej2-treemap';

export interface LevelSettingsDirTypecast {
    headerTemplate?: string | Function;
}
/**
 * `LevelsDirective` directive represent a levels of the react treemap. 
 * It must be contained in a TreeMap component(`TreeMapComponent`). 
 * ```tsx
 * <TreeMapComponent>
 * <LevelsDirective>
 * <LevelDirective></LevelDirective>
 * </LevelsDirective>
 * </TreeMapComponent>
 * ```
 */
export class LevelDirective extends ComplexBase<LevelSettingsModel| LevelSettingsDirTypecast, LevelSettingsModel| LevelSettingsDirTypecast> {
    public static moduleName: string = 'level';
}

export class LevelsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'levels';
    public static moduleName: string = 'levels';
}