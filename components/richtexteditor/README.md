# React RichTextEditor Component

The [React Rich Text Editor](https://www.syncfusion.com/react-ui-components/react-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) component is a feature-rich WYSIWYG HTML editor and WYSIWYG Markdown editor. The Rich Text Editor is widely used to create blogs, forum posts, notes sections, comment sections, messaging applications, and more. The control provides an efficient user interface for a better editing experience with mobile support. It has a variety of tools to edit and format rich content, and it return a valid HTML markup or Markdown (MD) content. It allows users to insert images, links, tables, media files and lists with modular architectures.

<p align="center">
    <a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm">Getting started</a> . 
    <a href="https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm#/bootstrap5/rich-text-editor/tools">Online demos</a> . 
    <a href="https://www.syncfusion.com/react-components/react-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm">Learn more</a>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/react/react-rich-text-editor.gif" alt="React RichTextEditor Component"/>
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

### Adding Syncfusion Rich Text Editor package

To install RichTextEditor component and its dependent packages, use the following command.

```
npm install @syncfusion/ej2-react-richtexteditor --save

```

### Adding CSS references for Rich Text Editor

Add CSS references needed for Rich Text Editor in **src/App.css** from **../node_modules/@syncfusion** package folder.

```css
@import '../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-icons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-lists/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css';
@import '../../node_modules/@syncfusion/ej2-richtexteditor/styles/bootstrap5.css';
```

### Add Rich Text Editor Component

In **src/App.tsx** file, use the following code snippet to render the Syncfusion React Rich Text Editor control and import **App.css** to apply styles to the richtexteditor:

```typescript
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import './App.css';

function App() {
    return (
            <div className="App">
                <RichTextEditorComponent>
                    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
                    <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
                </RichTextEditorComponent>
            </div>
        );
};
export default App;
```

## Supported frameworks

RichTextEditor component is also offered in the following frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Showcase samples

* [React HTML editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/tools)
* [Blog posting using react rich text editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/blog-posting)
* [React Markdown editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor)
* [React live HTML editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/online-html-editor)

## Key features

* [Edit mode](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/iframe) - HTML content is possible to edit in a `div` element or an `iframe` in the rich text editor.
* [Markdown editor](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor-preview) - The rich text editor allows you to edit Markdown content using the Markdown syntax.
* [Markdown content preview](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor-preview) - Preview of the modified Markdown content in the editor, you can give users the ability to see what the formatted content will look like before they save it.
* [HTML code editing](https://ej2.syncfusion.com/react/documentation/rich-text-editor/miscellaneous/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/rich-text-editor/#code-view) - The rich text editor allows users to edit the HTML code directly in the HTML code view. This can be useful for users who are familiar with HTML and want to have more control over the formatting and layout of their content.
* [Tools](https://ej2.syncfusion.com/react/documentation/rich-text-editor/toolbar/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#toolbar-items) - The rich text editor handles a wide range of features, including inserting images, hyperlinks, tables, formatting tools, and more.
* [Toolbar appearance](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/types) - The rich text editor can provide a fully customizable toolbar that allows users to access the various formatting and editing options that are available.
* [Undo and redo](https://ej2.syncfusion.com/react/documentation/rich-text-editor/miscellaneous/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#undoredo-manager) - Users can use undo and redo actions to reverse or repeat actions they took while editing the content.
* [Module injection](https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#module-injection) - It is possible to create a editor that utilizes a modular library to load the necessary functionality on demand. This can be useful for optimizing the performance of the editor.
* [Third-party integration](https://ej2.syncfusion.com/react/documentation/rich-text-editor/third-party-integration/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) - It is possible to integrate a third-party library into a rich text editor to add additional functionality or features to the editor like `Code-mirror`, `Embedly` and more.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-react-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/react?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm)
* Live chat

## Changelog
 
Check the changelog [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/richtexteditor/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion’s licensed software, including this component, is subject to the terms and conditions of Syncfusion's [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [React UI components](https://www.syncfusion.com/react-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://github.com/syncfusion/ej2-react-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) for more info.

&copy; Copyright 2022 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.