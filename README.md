[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/ry3x068pmo)

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

formik-antd components props expose the `name` (`string`) and `validate` ( `(value: any) => undefined | string | Promise<any>` ) props of a [Formik Field prop](https://jaredpalmer.com/formik/docs/api/field#reference) + the corresponding Antd components props.

| Name               | Props                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| CheckboxField      | { name, validate } & [Checkbox](https://ant.design/components/checkbox/)                                   |
| DatePickerField    | { name, validate } & [DatePicker](https://ant.design/components/date-picker/)                              |
| InputField         | { name, validate } & [Input](https://ant.design/components/input/)                                         |
| InputNumberField   | { name, validate } & [InputNumber](https://ant.design/components/input-number/)                            |
| InputPasswordField | { name, validate } & [InputPassword](https://ant.design/components/input/)                                 |
| SwitchField        | { name, validate } & [Switch](https://ant.design/components/switch/)                                       |
| TextAreaField      | { name, validate } & [Input.TextArea](https://ant.design/components/input/#components-input-demo-textarea) |

## Buttons

| Name         | Props                                           | Description                                          |
| ------------ | ----------------------------------------------- | ---------------------------------------------------- |
| SubmitButton | [Button](https://ant.design/components/button/) | triggers form submission, is enabled when form dirty |
| ResetButtom  | [Button](https://ant.design/components/button/) | resets the form, is enabled when form dirty          |
