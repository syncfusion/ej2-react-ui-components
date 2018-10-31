import { PureComponent, createElement } from 'react';
import { AutoComplete, ComboBox, DropDownList, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { ComponentBase, applyMixins } from '@syncfusion/ej2-react-base';

/**
 * The DropDownList component contains a list of predefined values, from which the user can choose a single value.
 * ```
 * <DropDownListComponent dataSource={data}/>
 * ```
 */
class DropDownListComponent extends DropDownList {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(DropDownListComponent, [ComponentBase, PureComponent]);

/**
 *The ComboBox component allows the user to type a value or choose an option from the list of predefined options.
 * ```
 * <ComboBoxComponent dataSource={data}/>
 * ```
 */
class ComboBoxComponent extends ComboBox {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(ComboBoxComponent, [ComponentBase, PureComponent]);

/**
 *The AutoComplete component provides the matched suggestion list when type into the input, from which the user can select one.
 * ```
 * <AutoCompleteComponent dataSource={data}/>
 * ```
 */
class AutoCompleteComponent extends AutoComplete {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
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
applyMixins(AutoCompleteComponent, [ComponentBase, PureComponent]);

/**
* The MultiSelect allows the user to pick a values from the predefined list of values.
 * ```
 * <MultiSelectComponent dataSource={data}/>
 * ```
 */
class MultiSelectComponent extends MultiSelect {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
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
applyMixins(MultiSelectComponent, [ComponentBase, PureComponent]);

export { DropDownListComponent, ComboBoxComponent, AutoCompleteComponent, MultiSelectComponent };
export * from '@syncfusion/ej2-dropdowns';
export { Inject } from '@syncfusion/ej2-react-base';
//# sourceMappingURL=ej2-react-dropdowns.es2015.js.map
