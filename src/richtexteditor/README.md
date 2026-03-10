# React Rich Text Editor Component | React Markdown Editor

The [React Rich Text Editor](https://www.syncfusion.com/react-ui-components/react-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) is a feature-rich WYSIWYG HTML editor and Markdown editor. The Rich Text Editor is widely used to create blogs, forum posts, notes sections, comment sections, messaging applications, and more. The control provides an efficient user interface for a better editing experience with mobile support. It has a variety of tools to edit and format rich content, and it return a valid HTML markup or Markdown (MD) content. It allows users to insert images, links, tables, media files and lists with modular architectures.

<div align="center">
    <h4>
        <a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm">📖Getting started</a> &#x2022; 
        <a href="https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm#/bootstrap5/rich-text-editor/tools">🚀Online demos</a> &#x2022; 
        <a href="https://www.syncfusion.com/react-components/react-wysiwyg-rich-text-editor?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm">🌐Learn more</a>
    </h4>
</div>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/javascript/javascript-rich-text-editor-new.gif" alt="React RichTextEditor Component"/>
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Bootstrap logo">
  </a>
</p>

## ⚡️ Quick Start

Syncfusion<sup>®</sup> Rich Text Editor is easy to integrate into React applications. Just install the package, configure styles, inject required modules, and render the component.

### 🛠️ Installation

Install the Rich Text Editor and its dependencies using npm:

```bash
npm install @syncfusion/ej2-react-richtexteditor --save
```

This command will:

- Add the `@syncfusion/ej2-react-richtexteditor` package and its peer dependencies to your `package.json` file.

### ⚙️ Setup

#### 1. Create a React Application

Use `Vite` to scaffold a new React + TypeScript project:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

#### 2. Add CSS References

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

### 🔌 Inject Required Services

To enable features like toolbar, image, link, and HTML editing, inject the required services using the `<Inject />` directive.

```typescript
import * as React from 'react';
import './App.css';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';

function App() {
  return (
    <div className="App">
      <RichTextEditorComponent>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;
```
<blockquote>
    <p>ℹ️ <b>Note:</b></p>
    <span>For detailed information on module injection and available services, refer to the Syncfusion Rich Text Editor Module <a href="https://ej2.syncfusion.com/react/documentation/rich-text-editor/module">Documentation</a>.</span>
</blockquote>

### 🧩 Add the Rich Text Editor Component

In **src/App.tsx** file, use the following code snippet to render the Syncfusion<sup>®</sup> React Rich Text Editor component.

```tsx
import * as React from 'react';
import './App.css';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';

function App() {
  return (
    <div className="App">
      <RichTextEditorComponent>
        <p>Start editing your content here.</p>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default App;
```

## 🛠️ Supported frameworks

Rich Text Editor control is also offered in following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## 🏗️ Showcase samples

* [React HTML editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/tools)
* [Blog posting using react rich text editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/blog-posting)
* [React Markdown editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor)
* [React live HTML editor demo](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/online-html-editor)

## ✨ Key features

* [Edit mode](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/iframe) - HTML content is possible to edit in a `div` element or an `iframe` in the rich text editor.

* [@Mentions](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/mention-integration) - Easily mention users, tags, or items with an autocomplete suggestion list.

* [Slash Menu Support](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/smart-suggestion) - Quickly insert content blocks using the `/` command.

* [Checklist Suport](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/tools) - Allows users to create checklists (to-do lists) directly within the editor. Users can easily add interactive checkbox items to their content.

* [Accessibility & WCAG 2.0 Compliance](https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility) - Ensures full accessibility support, making it user-friendly for people who rely on assistive technologies (AT) or keyboard navigation.

* [Preventing Cross-Site Scripting (XSS)](https://ej2.syncfusion.com/aspnetcore/documentation/rich-text-editor/prevent-cross-site-scripting/?utm_source=npm&utm_medium=listing&utm_campaign=javascript-richtexteditor-npm) - The Rich Text Editor allows users to edit the content with security by preventing cross-site scripting (XSS).

* [HTML code editing](https://ej2.syncfusion.com/react/documentation/rich-text-editor/miscellaneous/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/rich-text-editor/#code-view) - The rich text editor allows users to edit the HTML code directly in the HTML code view.

* [Markdown editor](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor-preview) - The rich text editor allows you to edit Markdown content using the Markdown syntax.

* [Markdown content preview](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/markdown-editor-preview) - Preview of the modified Markdown content in the editor, you can give users the ability to see what the formatted content will look like before they save it.

* [Tools](https://ej2.syncfusion.com/react/documentation/rich-text-editor/toolbar/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#toolbar-items) - The rich text editor handles a wide range of features, including inserting images, hyperlinks, tables, formatting tools, and more.

* [Toolbar appearance](https://ej2.syncfusion.com/react/demos/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#/bootstrap5/rich-text-editor/types) - The rich text editor can provide a fully customizable toolbar that allows users to access the various formatting and editing options that are available.

* [Export and Import](https://ej2.syncfusion.com/react/demos/#/bootstrap5/rich-text-editor/export-document) - Supports exporting content to PDF, and Word formats.

* [Copy and paste](https://ej2.syncfusion.com/react/documentation/rich-text-editor/paste-cleanup) - Copy and paste from Microsoft Word, Outlook, or other editors or sources while preserving formatting, styles, and structure.

* [Undo and redo](https://ej2.syncfusion.com/react/documentation/rich-text-editor/undo-redo) - Users can use undo and redo actions to reverse or repeat actions they took while editing the content.

* [Module injection](https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm/#module-injection) - It is possible to create a editor that utilizes a modular library to load the necessary functionality on demand. This can be useful for optimizing the performance of the editor.

* [Third-party integration](https://ej2.syncfusion.com/react/documentation/rich-text-editor/third-party-integration/?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) - It is possible to integrate a third-party library into a rich text editor to add additional functionality or features to the editor like `Code-mirror`, `Embedly` and more.

## 📚 Resources

* [Documentation](https://ej2.syncfusion.com/react/documentation/rich-text-editor/getting-started)
* [AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistants/overview)
* [Theme Studio](https://ej2.syncfusion.com/themestudio/)
* [What's New](https://www.syncfusion.com/products/whatsnew/react?utm_medium=listing&utm_source=github)
* [Road Map](https://www.syncfusion.com/products/roadmap/react)
* [E-Books](https://www.syncfusion.com/succinctly-free-ebooks?searchkey=react&type=all)

## 🤝 Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/react-js2?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-react-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/react?utm_source=npm&utm_medium=listing&utm_campaign=react-richtexteditor-npm)
* Live chat

## 🔄 Change log
 
Check the changelog [here](https://github.com/syncfusion/ej2-react-ui-components/blob/master/components/richtexteditor/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## ⚖️ License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 140+ [React UI components](https://www.syncfusion.com/react-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://github.com/syncfusion/ej2-react-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=react-rich-text-editor-npm) for more info.

&copy; Copyright 2025 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential<sup>®</sup> Studio license and copyright applies to this distribution.