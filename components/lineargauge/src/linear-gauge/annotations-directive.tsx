import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AnnotationModel } from '@syncfusion/ej2-lineargauge';

export interface AnnotationDirTypecast {
    content?: string | Function | any;
}
/**
 * `Annotations` directive represent a annotations of the react linear gauge. 
 * It must be contained in a LinearGauge component(`LinearGauge`). 
 * ```tsx
 * <LinearGaugeComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </LinearGaugeComponent>
 * ```
 */
export class AnnotationDirective extends ComplexBase<AnnotationModel| AnnotationDirTypecast & { children?: React.ReactNode }, AnnotationModel| AnnotationDirTypecast> {
    public static moduleName: string = 'annotation';
}

export class AnnotationsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'annotations';
    public static moduleName: string = 'annotations';
}
