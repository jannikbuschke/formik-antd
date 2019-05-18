[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20Formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/x2941k7vpz)

## Current status / Breaking changes

The 1.0.0 release is coming soon to provide a solid and stable api. A preview release is available.

For the v1 release some breaking changes happened/are happening:

- The `validate` prop has been removed (https://github.com/jannikbuschke/Formik-antd/issues/34).
- The `SubmitButton` component only works inside a `Form` component.
- Some undocumented/"unofficial" components have been removed (`Action` and `IDataSourceObject`)

I am currently looking for overall feedback.

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/Formik).

## Example

```jsx
import React from "react";
import { Form, Input, InputNumber, Checkbox } from "@jbuschke/formik-antd";
import { Formik } from "formik";

<Formik initialValues={{ firstName: "", age: 20, newsletter: false }} >
  <Form>
    <Input name="firstName" placeholder="First Name" />
    <InputNumber name="age" min={0} />
    <Checkbox name="newsletter">Newsletter</Checkbox>
  </Form>
</Formik>
```

## Getting started

```
npx create-react-app my-app
cd my-app
npm install Formik antd @jbuschke/formik-antd
npm run start
```

Add `import "antd/dist/antd.css` to your `index.js` file (or look at https://ant.design/docs/react/getting-started for other options).

## Concept

This library enriches several Ant Design components with a `name: string` property that connects them to a Formik form field. It is pretty simple:

1. Import a supported Ant Design component from `formik-antd` (i.e. `import { Input } from "@jbuschke/formik-antd"`.
2. Declare an instance of the component inside a `<Formik>` component.
3. Provide the `name` property (i.e. `"firstName"`).

Your components input/value state is now connected/synced with the corresponding `Formik` field!

The Ant Design components APIs stay the same, i.e. many have a `placeholder: string` prop, or the `<Input.TextArea>` has a `rows` prop to control how many rows should be shown. Visit their documentation to learn about the components.

Validating inputs and submitting is not part of this library (_showing_ validation results is, see below). It's all about wiring Antd components with Formik behaviour and state in a declarative style.

## Core Components

To learn about Antd components just visit the official docs. Most supported components are found in the [Data Entry](https://ant.design/components/auto-complete/) section.

|                       | Name           | Props                                                                                                            |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| :white_check_mark:    | Checkbox       | { name } & [CheckboxProps](https://ant.design/components/checkbox/)                                    |
| :white_check_mark:    | Checkbox.Group | { name } & [CheckboxGroupProps](https://ant.design/components/checkbox/#Checkbox-Group)                |
| :white_check_mark:    | DatePicker     | { name } & [DatePickerProps](https://ant.design/components/date-picker/)                               |
| :white_check_mark:    | Input          | { name } & [InputProps](https://ant.design/components/input/)                                          |
| :white_check_mark:    | InputNumber    | { name } & [InputNumberProps](https://ant.design/components/input-number/)                             |
| :white_check_mark:    | Input.Password | { name } & [InputPasswordProps](https://ant.design/components/input/)                                  |
| :white_check_mark:    | Radio.Group    | { name } & [RadioGroupProps](https://ant.design/components/radio/#RadioGroup)                          |
| :white_check_mark:    | Switch         | { name } & [SwitchProps](https://ant.design/components/switch/)                                        |
| :white_check_mark:    | Input.TextArea | { name } & [Input.TextAreaProps](https://ant.design/components/input/#components-input-demo-textarea)  |
| :white_check_mark:    | TimePicker     | { name } & [TimePickerProps](https://ant.design/components/input/#components-input-demo-textarea)      |
| :white_check_mark:    | AutoComplete   | { name } & [AutoCompleteProps](https://ant.design/components/auto-complete/)                           |
| :white_check_mark:    | Cascader       | { name } & [CascaderProps](https://ant.design/components/cascader/)                                    |
| :white_check_mark:    | Mention        | { name } & [MentionProps](https://ant.design/components/mention/)                                      |
| :white_check_mark:    | Rate           | { name } & [RateProps](https://ant.design/components/rate/)                                            |
| :white_check_mark:    | Slider         | { name } & [SliderProps](https://ant.design/components/slider/)                                        |
| :white_check_mark:    | TreeSelect     | { name } & [TreeSelectProps](https://ant.design/components/tree-select/)                               |
| :white_check_mark:    | Transfer       | { name } & [TransferProps](https://ant.design/components/transfer/)                                    |

## Submitting / Form

Directly under each `<Formik>` container a `<Form>` component _should_ be placed (unless you do not need it). This component composes the functionality provided by Ant Designs `<Form>` https://ant.design/components/form/ as well as Formiks (https://jaredpalmer.com/formik/docs/api/form):


```jsx
import React from "react";
import { Form, SubmitButton, /* ... */ } from "@jbuschke/formik-antd";
import { Formik } from "formik";

<Formik>
  <Form>
    {/* ... */}
    <SubmitButton />
  </Form>
</Formik>
```

## Submitting & Resetting

| Name         | Props                                           | Description                                          |
| ------------ | ----------------------------------------------- | ---------------------------------------------------- |
| SubmitButton | [Button](https://ant.design/components/button/) | triggers form submission, is enabled when form valid |
| ResetButton  | [Button](https://ant.design/components/button/) | resets the form, is enabled when form dirty          |

The SubmitButton must be placed inside a `Form` component.

## Validation

Showing validation messages can be accomplished with the  `Form.Item` component (or `FormItem` which is the same). It 
- renders *error* messages if the field has been touched and the corresponding field has a validation error (and changes the border color of enclosed input component to red).
- renders a green *success* icon messages if it's `showValidateSuccess: boolean` prop is set to true, the field has been touched and the corresponding field does not have a validation error.
- exposes some layout features and a label (visit https://ant.design/components/form/ for the details).

```jsx
<Form.Item name="firstName" >
  <InputField name="firstName" />
</Form.Item>
```

How the validation logic is implemented is not part of this library.

## Lists / Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax as described in the [Formik documentation](https://jaredpalmer.com/Formik/docs/guides/arrays).

```jsx
<InputField name="friends[0].firstName" />
```

## Playground & Contributions

If you want to dig into the source code and test locally you can use https://github.com/jannikbuschke/Formik-antd-playground (clone with the --recursive flag and follow the README, its pretty simple).

## TypeScript

Types are included.

## Typechecking limitations
Form values currently cannot be typechecked (at least to my knowledge). For example the following ideally would give a compile error:

```jsx
<Formik<{name:string}> initialValues={{name:""}}>
  <Input name="naem" />
</Formik>
```

Typescript cannot (yet) enforce types of children. In the future this hopefully will  be possible.

## License

MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://www.jannikbuschke.de/blog"><img src="https://avatars2.githubusercontent.com/u/5894881?v=4" width="100px;" alt="Jannik Buschke"/><br /><sub><b>Jannik Buschke</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jannikbuschke" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!