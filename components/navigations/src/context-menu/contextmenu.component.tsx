import * as React from 'react';
import { ContextMenu, ContextMenuModel } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * `ContextMenuComponent` represents the react ContextMenu Component.
 * ```ts
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ContextMenuComponent target='#target' items={menuItems} />
 * ```
 */
export class ContextMenuComponent extends ContextMenu {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<ContextMenuModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    private checkTemplate: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<ContextMenuModel & DefaultHtmlAttributes>;
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
            return React.createElement('ul', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(ContextMenuComponent, [ComponentBase, React.PureComponent]);
