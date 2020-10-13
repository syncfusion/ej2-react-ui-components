import { Component, createElement } from 'react';
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
applyMixins(BarcodeGeneratorComponent, [ComponentBase, Component]);

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
applyMixins(QRCodeGeneratorComponent, [ComponentBase, Component]);

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
applyMixins(DataMatrixGeneratorComponent, [ComponentBase, Component]);

export { BarcodeGeneratorComponent, QRCodeGeneratorComponent, DataMatrixGeneratorComponent };
export * from '@syncfusion/ej2-barcode-generator';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-barcode-generator.es2015.js.map
