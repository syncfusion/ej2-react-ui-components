import * as React from 'react';
import { RichTextEditor, RichTextEditorModel } from '@syncfusion/ej2-richtexteditor';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface RichTextEditorTypecast {
    valueTemplate?: string | Function;
}
/**
 * `RichTextEditor` represents the react RichTextEditor.
 * ```tsx
 * <RichTextEditor/>
 * ```
 */
export class RichTextEditorComponent extends RichTextEditor {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<RichTextEditorModel & DefaultHtmlAttributes| RichTextEditorTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<RichTextEditorModel & DefaultHtmlAttributes| RichTextEditorTypecast>;
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

applyMixins(RichTextEditorComponent, [ComponentBase, React.PureComponent]);
