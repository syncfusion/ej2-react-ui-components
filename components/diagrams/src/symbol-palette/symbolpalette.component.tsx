import * as React from 'react';
import { SymbolPalette, SymbolPaletteModel } from '@syncfusion/ej2-diagrams';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents react SymbolPalette Component
 * ```tsx
 * <SymbolPaletteComponent></SymbolPaletteComponent>
 * ```
 */
export class SymbolPaletteComponent extends SymbolPalette {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<SymbolPaletteModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = true;
    public directivekeys: { [key: string]: Object } = {'palettes': 'palette'};
    private checkTemplate: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<SymbolPaletteModel & DefaultHtmlAttributes>;
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

applyMixins(SymbolPaletteComponent, [ComponentBase, React.PureComponent]);
