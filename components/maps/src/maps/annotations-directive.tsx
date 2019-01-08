import { ComplexBase } from '@syncfusion/ej2-react-base';
import { AnnotationModel } from '@syncfusion/ej2-maps';

export interface AnnotationDirTypecast {
    content?: string | Function | any;
}
/**
 * `AnnotationsDirective` directive represent a annotation of the react maps. 
 * It must be contained in a Maps component(`MapsComponent`). 
 * ```tsx
 * <MapsComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </MapsComponent>
 * ```
 */
export class AnnotationDirective extends ComplexBase<AnnotationModel| AnnotationDirTypecast, AnnotationModel| AnnotationDirTypecast> {
    public static moduleName: string = 'annotation';
}

export class AnnotationsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'annotations';
    public static moduleName: string = 'annotations';
}