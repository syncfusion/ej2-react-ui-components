# React PDF Viewer Component

The [React PDF Viewer](https://www.syncfusion.com/react-ui-components/react-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm) component enables you to view, annotate, prepare and fill forms, and print PDF files from your web applications.

<p align="center">
    <a href="https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm">Getting started</a> . 
    <a href="https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm#/bootstrap5/pdfviewer/default">Online demos</a> . 
    <a href="https://www.syncfusion.com/react-components/react-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm">Learn more</a>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/react/react-pdf-viewer.png" alt="React PDF Viewer Component"/>
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/syncfusion/syncfusion-trusted-companies.webp" alt="Bootstrap logo">
  </a>
</p>

## Setup

### Create a React Application

You can use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to setup applications. To create React app use the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

### Adding Syncfusion&reg; PDF Viewer package

All Syncfusion&reg; react packages are published in the [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install the react PDF Viewer package, use the following command.

```bash
npm install @syncfusion/ej2-react-pdfviewer --save
```

### Adding CSS references for PDF Viewer

Add CSS references needed for a PDF Viewer in **src/index.css** from the **../node_modules/@syncfusion** package folder.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';  
@import "../node_modules/@syncfusion/ej2-react-pdfviewer/styles/material.css";
```

### Add PDF Viewer component

In the **src/index.js** file, use the following code snippet to render the Syncfusion&reg; React PDF Viewer control and import **index.css** to apply styles to the PDF Viewer:

```typescript
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import { SampleBase } from './sample-base';
export class Default extends SampleBase {
  render() {
    return (
      <div>
        <div className="control-section">
          <PdfViewerComponent
            id="container"
            documentPath="PDF_Succinctly.pdf"
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
            toolbarSettings={{ showTooltip: true, toolbarItems: ['OpenOption',  'PanTool', 'AnnotationEditTool', 'FormDesignerEditTool', ], annotationToolbarItems: ['HandWrittenSignatureTool'], formDesignerToolbarItems: ['TextboxTool', 'PasswordTool', ] }} 
            style={{ height: '640px' }}
          >
            <Inject
              services={[
                Toolbar,
                Magnification,
                Navigation,
                LinkAnnotation,
                BookmarkView,
                ThumbnailView,
                Print,
                TextSelection,
                TextSearch,
                Annotation,
                FormFields,
                FormDesigner,
              ]}
            />
          </PdfViewerComponent>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
```

## Supported frameworks

PDF Viewer component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [View PDF Document](https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started/) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
* [Annotations](https://ej2.syncfusion.com/react/documentation/pdfviewer/annotation/text-markup-annotation/) - Annotate with text markup, shapes, stamps, ink, and sticky notes.
* [Form Fields](https://ej2.syncfusion.com/react/documentation/pdfviewer/form-designer/create-fillable-PDF-forms/create-programmatically/) - Form filling and form designing can be done.
* [Signature](https://ej2.syncfusion.com/angular/documentation/pdfviewer/handwritten-signature/) - Hand-written and digital signatures are allowed.
* [Toolbar](https://ej2.syncfusion.com/react/documentation/pdfviewer/toolbar/) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
* [Navigation](https://ej2.syncfusion.com/react/documentation/pdfviewer/navigation/) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
* [Magnification](https://ej2.syncfusion.com/react/documentation/pdfviewer/magnification/) - Fit to page, fit to width, and automatic (fits to the visible area).
* [Search](https://ej2.syncfusion.com/react/documentation/pdfviewer/text-search/) - Search a text easily across the PDF document.	
* [Core Interactions](https://ej2.syncfusion.com/react/documentation/pdfviewer/interaction-mode/) - Allows scrolling, zooming, panning, selection, and page navigation.
* [Print](https://ej2.syncfusion.com/react/documentation/pdfviewer/print/) - Print the entire document or a specific page directly from the browser.
* [Globalization](https://ej2.syncfusion.com/react/documentation/pdfviewer/globalization/) - Provides inherent support to localize the UI.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-react-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/react?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/pdfviewer/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. The Syncfusion&reg; licensed software, including this component, is subject to the terms and conditions of the Syncfusion&reg; [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [React UI components](https://www.syncfusion.com/react-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-pdf-viewer-npm) for more info.

