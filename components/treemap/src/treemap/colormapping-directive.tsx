import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ColorMappingModel } from '@syncfusion/ej2-treemap';



export class ColorMappingDirective extends ComplexBase<ColorMappingModel, ColorMappingModel> {
    public static moduleName: string = 'colorMapping';
}

export class ColorMappingsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'colorMapping';
    public static moduleName: string = 'colorMappings';
}
