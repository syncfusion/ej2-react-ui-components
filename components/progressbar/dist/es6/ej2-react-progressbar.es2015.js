import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { Component, createElement } from 'react';
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
        this.portals = [];
    }
    render() {
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(ProgressBarComponent, [ComponentBase, Component]);

export { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent };
export * from '@syncfusion/ej2-progressbar';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-progressbar.es2015.js.map
