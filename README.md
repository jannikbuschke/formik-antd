[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/oko82yzn6)

## Current status / Breaking changes

The 1.0.0 release is coming soon to provide a solid and stable api. A preview release is available.

 For this to happen some changes are _likely_ going to happening / already happened:

- The `validate` prop will be removed (https://github.com/jannikbuschke/formik-antd/issues/34).
- The `SubmitButton` component only works inside a `Form` component. 
- The `FormItem` component will be statically exported from the `Form` component: `Form.Item` (https://github.com/jannikbuschke/formik-antd/issues/35).

I am currently looking for overall feedback and also specifically on above topics.

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/formik).

## Example

```jsx
import * as React from "react";
import { Form, Input, InputNumber, Checkbox } from "@jbuschke/formik-antd";
import { Formik } from "formik";

<Formik initialValues={{ firstName: "", age: 20, newsletter: false }} onValidate={/* not part of this lib */} onSubmit={/* not part of this lib */}>
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
npm install formik antd @jbuschke/formik-antd
npm run start
```

Add `import "antd/dist/antd.css` to your `index.js` file (or look at https://ant.design/docs/react/getting-started for optimized options).

## Concept

This library enriches all Ant Design components that operate on some state with a `name: string` property that connects them to a Formik form field. It is pretty simple:

1. Import an Ant Design component that is able to change some state from _formik-antd_ (i.e. `import { Input } from "@jbuschke/formik-antd"`.
2. Declare an instance of the component inside a `<Formik>` component (imported from `formik`).
3. Provide the `name` property (i.e. `"firstName"`).

Your components input/value state is now connected/synced with the corresponding `Formik` field!

The Ant Design components APIs stay the same, i.e. many have a `placeholder: string` prop, or the `<Input.TextArea>` has a `rows` prop to control how many rows should be shown. Visit their documentation to learn about the components.

Validating inputs and submitting is not part of this library (_showing_ results is, see below). It's all about wiring Antd components with formik behaviour and state in a declarative style.

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
| :black_square_button: | Cascader       | { name } & [CascaderProps](https://ant.design/components/cascader/)                                    |
| :black_square_button: | Mention        | { name } & [MentionProps](https://ant.design/components/mention/)                                      |
| :white_check_mark:    | Rate           | { name } & [RateProps](https://ant.design/components/rate/)                                            |
| :white_check_mark:    | Slider         | { name } & [SliderProps](https://ant.design/components/slider/)                                        |
| :black_square_button: | TreeSelect     | { name } & [TreeSelectProps](https://ant.design/components/tree-select/)                               |
| :black_square_button: | Transfer       | { name } & [TransferProps](https://ant.design/components/transfer/)                                    |

## Submitting / Form

Directly under each `<Formik>` container a `<Form>` component _should_ be placed (unless you do not need it). This component wraps Ant Designs `<Form />` component https://ant.design/components/form/ and adds the same behaviour that Formiks `<Form />` behaviour. In this sense it composes Ant Design and Formik functionality as the other components:


```jsx
<Formik>
  <Form>
    {/* ... */}
    <SubmitButton />
  </Form>
</FormiK>
```

## Submitting & Resetting

| Name         | Props                                           | Description                                          |
| ------------ | ----------------------------------------------- | ---------------------------------------------------- |
| SubmitButton | [Button](https://ant.design/components/button/) | triggers form submission, is enabled when form valid |
| ResetButton  | [Button](https://ant.design/components/button/) | resets the form, is enabled when form dirty          |

The SubmitButton must be placed inside a `Form` component.

## Validation

Showing validation messages can be accomplished with the `FormItem` component. It renders error messages if the field has been touched and the corresponding field has a validation error.

```jsx
<FormItem name="firstName" >
  <InputField name="firstName" />
</FormItem>
```

How the validation logic is done is not part of this library.

## Lists / Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax das described in the [formik documentation](https://jaredpalmer.com/formik/docs/guides/arrays).

```jsx
<InputField name="friends[0].firstName" />
```

## Playground & Contributions

If you want to dig into the source code and test locally you can use https://github.com/jannikbuschke/formik-antd-playground (clone with the --recursive flag and follow the README, its pretty simple).

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
