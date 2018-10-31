import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';

/**
 * `Axis` directive represent a axes of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class AxisDirective extends ComplexBase {
}
AxisDirective.moduleName = 'axis';
class AxesDirective extends ComplexBase {
}
AxesDirective.propertyName = 'axes';
AxesDirective.moduleName = 'axes';

/**
 * `Ranges` directive represent a ranges of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class RangeDirective extends ComplexBase {
}
RangeDirective.moduleName = 'range';
class RangesDirective extends ComplexBase {
}
RangesDirective.propertyName = 'ranges';
RangesDirective.moduleName = 'ranges';

/**
 * `Pointers` directive represent a pointers of the react linear gauge.
 * It must be contained in a LinearGauge component(`LinearGauge`).
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class PointerDirective extends ComplexBase {
}
PointerDirective.moduleName = 'pointer';
class PointersDirective extends ComplexBase {
}
PointersDirective.propertyName = 'pointers';
PointersDirective.moduleName = 'pointers';

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
class AnnotationDirective extends ComplexBase {
}
AnnotationDirective.moduleName = 'annotation';
class AnnotationsDirective extends ComplexBase {
}
AnnotationsDirective.propertyName = 'annotations';
AnnotationsDirective.moduleName = 'annotations';

/**
 * Represents react Linear Gauge Component
 * ```tsx
 * <LinearGaugeComponent></LinearGaugeComponent>
 * ```
 */
class LinearGaugeComponent extends LinearGauge {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'axes': { 'axis': { 'ranges': 'range', 'pointers': 'pointer' } }, 'annotations': 'annotation' };
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
applyMixins(LinearGaugeComponent, [ComponentBase, PureComponent]);

export { AxisDirective, AxesDirective, RangeDirective, RangesDirective, PointerDirective, PointersDirective, AnnotationDirective, AnnotationsDirective, LinearGaugeComponent };
export * from '@syncfusion/ej2-lineargauge';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-lineargauge.es2015.js.map
