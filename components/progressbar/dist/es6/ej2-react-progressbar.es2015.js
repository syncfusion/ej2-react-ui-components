import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { ProgressBar } from '@syncfusion/ej2-progressbar';

/**
 * `ProgressBarAnnotationsDirective` directive represent a annotation of the react progressbar.
 * ```tsx
 * <progressbarComponent>
 * <ProgressBarAnnotationsDirective>
 * <ProgressBarAnnotationDirective></ProgressBarAnnotationDirective>
 * </ProgressBarAnnotationsDirective>
 * </progressbarComponent>
 * ```
 */
class ProgressBarAnnotationDirective extends ComplexBase {
}
ProgressBarAnnotationDirective.moduleName = 'progressBarAnnotation';
class ProgressBarAnnotationsDirective extends ComplexBase {
}
ProgressBarAnnotationsDirective.propertyName = 'annotations';
ProgressBarAnnotationsDirective.moduleName = 'progressBarAnnotations';

/**
 * Represents react ProgressBar Component
 * ```tsx
 * <ProgressBarComponent></ProgressBarComponent>
 * ```
 */
class ProgressBarComponent extends ProgressBar {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'progressBarAnnotations': 'progressBarAnnotation' };
        this.immediateRender = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), this.props.children);
        }
    }
}
applyMixins(ProgressBarComponent, [ComponentBase, PureComponent]);

export { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent };
export * from '@syncfusion/ej2-progressbar';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-progressbar.es2015.js.map
