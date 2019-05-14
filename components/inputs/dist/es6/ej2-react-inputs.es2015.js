import { PureComponent, createElement } from 'react';
import { ColorPicker, MaskedTextBox, NumericTextBox, Slider, TextBox, Uploader } from '@syncfusion/ej2-inputs';
import { ComplexBase, ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * Represents the React TextBox Component
 * ```html
 * <TextBox value={value}></TextBox>
 * ```
 */
class TextBoxComponent extends TextBox {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(TextBoxComponent, [ComponentBase, PureComponent]);

/**
 * Represents the React NumericTextBox Component
 * ```html
 * <NumericTextBox value={value}></NumericTextBox>
 * ```
 */
class NumericTextBoxComponent extends NumericTextBox {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(NumericTextBoxComponent, [ComponentBase, PureComponent]);

/**
 * Represents the React MaskedTextBox Component
 * ```html
 * <MaskedTextBox value={value}></MaskedTextBox>
 * ```
 */
class MaskedTextBoxComponent extends MaskedTextBox {
    constructor(props) {
        super(props);
        this.controlAttributes = ['name'];
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(MaskedTextBoxComponent, [ComponentBase, PureComponent]);

/**
 * Represents the React Slider Component
 * ```html
 * <Slider value={value}></Slider>
 * ```
 */
class SliderComponent extends Slider {
    constructor(props) {
        super(props);
        this.controlAttributes = ['name'];
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(SliderComponent, [ComponentBase, PureComponent]);

/**
 * `FilesDirective` represent a file of the react uploader.
 * It must be contained in a Uploader component(`UploaderComponent`).
 * ```tsx
 * <UploaderComponent multiple={true}>
 *   <FilesDirective>
 *    <FileDirective name='Java' size=23000 type='pdf'><FileDirective>
 *    <FileDirective name='C++' size=30000 type='.docx'><FileDirective>
 *   </FilesDirective>
 * </UploaderComponent>
 * ```
 */
class UploadedFilesDirective extends ComplexBase {
}
UploadedFilesDirective.moduleName = 'uploadedFiles';
class FilesDirective extends ComplexBase {
}
FilesDirective.propertyName = 'files';
FilesDirective.moduleName = 'files';

/**
 * Represents the React Uploader Component
 * ```html
 * <UploaderComponent></UploaderComponent>
 * ```
 */
class UploaderComponent extends Uploader {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'files': 'uploadedFiles' };
        this.immediateRender = false;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(UploaderComponent, [ComponentBase, PureComponent]);

/**
 * Represents the React ColorPicker Component
 * ```html
 * <ColorPickerComponent></ColorPickerComponent>
 * ```
 */
class ColorPickerComponent extends ColorPicker {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.immediateRender = true;
    }
    render() {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('input', this.getDefaultAttributes());
        }
    }
}
applyMixins(ColorPickerComponent, [ComponentBase, PureComponent]);

export { TextBoxComponent, NumericTextBoxComponent, MaskedTextBoxComponent, SliderComponent, UploadedFilesDirective, FilesDirective, UploaderComponent, ColorPickerComponent };
export * from '@syncfusion/ej2-inputs';
//# sourceMappingURL=ej2-react-inputs.es2015.js.map
