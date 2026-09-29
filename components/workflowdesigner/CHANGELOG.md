# Changelog

## [Unreleased]

## 35.1.37 (2026-09-29)

### Workflow Designer

The Workflow Designer component is used to build, visualize, and simulate automation workflows. It provides a canvas for arranging trigger, control-flow, and action steps, a property panel for configuring them, and a built-in simulation engine that executes the workflow while delegating real-world side effects to the host application.

- **Steps** - Steps are the nodes of a workflow. Eighteen step types are supported: `ManualTrigger`, `ScheduledTrigger`, `WebhookTrigger`, `FormInputTrigger`, `SetVariable`, `Filter`, `Sort`, `ApiRequest`, `Delay`, `Condition`, `Switch`, `Loop`, `Approve`, `Notify`, `AI`, `Formatter`, `Custom`, and `End`. Each type has its own typed property contract.
- **Connectors** - The flow between two steps is represented using a connector. Branching steps expose named output ports - `Condition` emits `true` and `false`, `Approve` emits `approved` and `declined`, `Loop` emits `loop` and `done`, and `Switch` emits one port per configured branch plus a default port.
- **Sticky Notes** - Free-form notes can be placed on the canvas to annotate a workflow without affecting execution.
- **Node Catalogue** - A searchable catalogue of the available step types, with labels and icons, for adding steps to the canvas.
- **Property Panel** - A configuration panel that renders type-specific editors for the selected step, including conditional fields that appear based on other property values.
- **Interactive Features** - Selection, node and connector handles, insertion, duplication, drag positioning, and multi-level undo and redo improve the run time editing experience.
- **Automatic Layout** - Flowchart layout arranges steps and connectors automatically based on the workflow structure.
- **Toolbars** - A top toolbar and a canvas toolbar expose execution, layout, zoom, undo and redo, import, and export commands. A command palette provides keyboard access to the same actions.
- **Simulation** - Workflows can be executed on the canvas with live step highlighting, configurable execution speed, real-time or accelerated delays, and start, stop, reset, resume, and run-from-step control.
- **Host-Delegated Execution** - Steps whose effects belong to the host raise events that suspend the run until the host completes them. `approvalRequested`, `notifyRequested`, and `customExecutionRequested` are host-owned, while `apiRequestRequested` and `aiRequested` are raised alongside the built-in executors.
- **Simulation Log** - A collapsible, searchable log records every step execution with status and timing, and an execution details pane shows the input, output, and JSON context for any selected entry.
- **Debugging** - Breakpoints, step inspection, pinned sample payloads, and replay of the last failed run support diagnosing workflow behaviour.
- **Expressions and Runtime Context** - Step properties accept expressions that are resolved at run time against a shared runtime context holding trigger input, per-step responses, and user-defined variables. Secrets are redacted from logged output.
- **Validation** - Workflows are validated for missing triggers, unreachable steps, duplicate identifiers, invalid ports, and missing required properties, with errors, warnings, and information messages reported per step and connection.
- **Error Handling** - Per-step retry policies, timeouts, and error routing control how failures are handled during execution.
- **AI Assist** - Workflows can be generated or updated from a natural language prompt. The component owns the prompt orchestration and schema, while the host supplies the model and credentials.
- **Copilot Review** - A proposed workflow can be previewed as a diff against the current canvas and validated before it is applied, so changes are never applied without confirmation.
- **Connector Catalogue** - A searchable catalogue of connector definitions and their actions for configuring API-based steps.
- **Serialization** - A workflow's state persists when saved in JSON format, and can be loaded back using serialization.
- **Exporting and Importing** - Workflows can be exported to and imported from a file, and a schema migrator upgrades definitions saved by earlier versions.
- **Versioning and Governance** - Workflows can be published, compared, rolled back, and promoted between environments, with autosave and draft recovery for unsaved work.
- **Accessibility** - Live region announcements report selection and execution changes to screen readers.