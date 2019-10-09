import { PureComponent, createElement } from 'react';
import { BarcodeGenerator, DataMatrixGenerator, QRCodeGenerator } from '@syncfusion/ej2-barcode-generator';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents react Barcode Component
 * ```tsx
 * <BarcodeGeneratorComponent></BarcodeGeneratorComponent>
 * ```
 */
class BarcodeGeneratorComponent extends BarcodeGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
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
applyMixins(BarcodeGeneratorComponent, [ComponentBase, PureComponent]);

/**
 * Represents react QRCode Component
 * ```tsx
 * <QRCodeGeneratorComponent></QRCodeGeneratorComponent>
 * ```
 */
class QRCodeGeneratorComponent extends QRCodeGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
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
applyMixins(QRCodeGeneratorComponent, [ComponentBase, PureComponent]);

/**
 * Represents react DataMatrix Component
 * ```tsx
 * <DataMatrixGeneratorComponent></DataMatrixGeneratorComponent>
 * ```
 */
class DataMatrixGeneratorComponent extends DataMatrixGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.immediateRender = true;
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
applyMixins(DataMatrixGeneratorComponent, [ComponentBase, PureComponent]);

export { BarcodeGeneratorComponent, QRCodeGeneratorComponent, DataMatrixGeneratorComponent };
export * from '@syncfusion/ej2-barcode-generator';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-barcode-generator.es2015.js.map
