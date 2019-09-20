import * as React from 'react';
import { Accordion, AccordionModel } from '@syncfusion/ej2-navigations';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';


export interface AccordionTypecast {
    headerTemplate?: string | Function | any;
    itemTemplate?: string | Function | any;
}
/**
 * `AccordionComponent` represents the react Accordion Component.
 * ```ts
 * <AccordionComponent ></AccordionComponent
 * ```
 */
export class AccordionComponent extends Accordion {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<AccordionModel & DefaultHtmlAttributes| AccordionTypecast>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'accordionItems': 'accordionItem'};
    private immediateRender: boolean = false;
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<AccordionModel & DefaultHtmlAttributes| AccordionTypecast>;
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

applyMixins(AccordionComponent, [ComponentBase, React.PureComponent]);
