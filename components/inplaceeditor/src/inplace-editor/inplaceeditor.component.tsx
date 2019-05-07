import * as React from 'react';
import { InPlaceEditor, InPlaceEditorModel } from '@syncfusion/ej2-inplace-editor';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface InPlaceEditorTypecast {
    template?: string | Function | any;
}
/**
 * `InPlaceEditor` represents the react InPlaceEditor.
 * ```tsx
 * <InPlaceEditor />
 * ```
 */
export class InPlaceEditorComponent extends InPlaceEditor {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<InPlaceEditorModel & DefaultHtmlAttributes| InPlaceEditorTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private checkTemplate: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<InPlaceEditorModel & DefaultHtmlAttributes| InPlaceEditorTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(InPlaceEditorComponent, [ComponentBase, React.PureComponent]);
