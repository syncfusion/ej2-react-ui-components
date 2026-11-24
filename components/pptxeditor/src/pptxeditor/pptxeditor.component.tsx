import * as React from 'react';
import { PptxEditor, PptxEditorModel } from '@syncfusion/ej2-pptxeditor';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface PptxEditorTypecast {
}
/**
 * `PptxEditorComponent` represents the react PPTX Editor.
 * ```
 * <PptxEditorComponent id='editor' enableToolbar={true} enableThumbnail={true} enableSlideShow={true} documentLoad={onLoad}/>
 * ```
 */
export class PptxEditorComponent extends PptxEditor {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<PptxEditorModel | DefaultHtmlAttributes| PptxEditorTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    private statelessTemplateProps: string[] = null;
    private templateProps: string[] = null;
    private immediateRender: boolean = false;
    private isReactMock: boolean = true;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<PptxEditorModel | DefaultHtmlAttributes| PptxEditorTypecast>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public portals: any = [];
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };
    constructor(props: any) {
        super(props);
    }

    public render(): any {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !(this as any).isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(),[].concat(this.props.children,this.portals));
        }

    }
}

applyMixins(PptxEditorComponent, [ComponentBase, React.Component]);
