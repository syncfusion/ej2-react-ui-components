import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';
import { PureComponent, createElement } from 'react';
import { CircularGauge } from '@syncfusion/ej2-circulargauge';

/**
 * `Axis` directive represent a axes of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
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
 * `Annotations` directive represent a annotations of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
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
 * `Ranges` directive represent a ranges of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
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
 * `Pointers` directive represent a pointers of the react circular gauge.
 * It must be contained in a CircularGauge component(`CircularGauge`).
 * ```tsx
 * <CircularGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </CircularGaugeComponent>
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
 * Represents react Circular Gauge Component
 * ```tsx
 * <CircularGaugeComponent></CircularGaugeComponent>
 * ```
 */
class CircularGaugeComponent extends CircularGauge {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'axes': { 'axis': { 'annotations': 'annotation', 'ranges': 'range', 'pointers': 'pointer' } } };
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
applyMixins(CircularGaugeComponent, [ComponentBase, PureComponent]);

export { AxisDirective, AxesDirective, AnnotationDirective, AnnotationsDirective, RangeDirective, RangesDirective, PointerDirective, PointersDirective, CircularGaugeComponent };
export * from '@syncfusion/ej2-circulargauge';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-circulargauge.es2015.js.map
