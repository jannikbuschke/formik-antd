[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/oko82yzn6)

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/formik).

## Example

```
<Formik initialValues={{ firstName: "", age: 20, newsletter: false }}>
  <InputField name="firstName" placeholder="first name" />
  <InputNumberField name="age" min={0} />
  <Checkbox name="newsletter" />
</Formik>
```

## install

`npm install @jbuschke/formik-antd`

## Input components

formik-antd components usually combine [Formik Field Props](https://jaredpalmer.com/formik/docs/api/field#reference):

```
{
  name: string,
  validate: (value: any) => undefined | string | Promise<any>
}
```

with the the corresponding Antd components props:

| Name               | Props                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| CheckboxField      | { name, validate } & [Checkbox](https://ant.design/components/checkbox/)                                   |
| CheckboxGroupField | { name, validate } & [CheckboxGroup](https://ant.design/components/checkbox/#Checkbox-Group)               |
| DatePickerField    | { name, validate } & [DatePicker](https://ant.design/components/date-picker/)                              |
| InputField         | { name, validate } & [Input](https://ant.design/components/input/)                                         |
| InputNumberField   | { name, validate } & [InputNumber](https://ant.design/components/input-number/)                            |
| InputPasswordField | { name, validate } & [InputPassword](https://ant.design/components/input/)                                 |
| RadioGroupField    | { name, validate } & [RadioGroup](https://ant.design/components/radio/#RadioGroup)                         |
| SwitchField        | { name, validate } & [Switch](https://ant.design/components/switch/)                                       |
| TextAreaField      | { name, validate } & [Input.TextArea](https://ant.design/components/input/#components-input-demo-textarea) |

## Validation

Showing validation messages can be accomplished with the `FormItem` component. It renders error messages if the field has been touched and the corresponding field has a validation error.

```
<FormItem name="firstName" >
  <InputField name="firstName" >
</FormItem>
```

## Lists / Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax for the **name** property as described in the [formik documentation](https://jaredpalmer.com/formik/docs/guides/arrays).

```
<InputField name="friends[0].firstName" />
```

## Buttons

| Name         | Props                                           | Description                                          |
| ------------ | ----------------------------------------------- | ---------------------------------------------------- |
| SubmitButton | [Button](https://ant.design/components/button/) | triggers form submission, is enabled when form valid |
| ResetButton  | [Button](https://ant.design/components/button/) | resets the form, is enabled when form dirty          |

## Playground / Contributions

If you want to dig into the source code and test locally you can use https://github.com/jannikbuschke/formik-antd-playground (clone with the --recursive flag and follow the README, its pretty simple).
