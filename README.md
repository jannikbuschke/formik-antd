[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/oko82yzn6)

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/formik).

## Example

```jsx
<Formik initialValues={{ firstName: "", age: 20, newsletter: false }}>
  <Input name="firstName" placeholder="first name" />
  <InputNumber name="age" min={0} />
  <Checkbox name="newsletter">Newsletter</Checkbox>
</Formik>
```

## Getting started

```
npx create-react-app my-app
cd my-app
npm install formik antd @jbuschke/formik-antd
npm run start
```

## Input components

As forms deal with user input this library aims to provide bindings for all Ant Design *input* components (the ones in the [Data Entry](https://ant.design/components/auto-complete/) section). All bound components have the same api as there Antd counterpart (component name and props) and additionally expose [FormikFieldProps](https://jaredpalmer.com/formik/docs/api/field#reference):

```ts
interface FormikFieldProps {
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
}

```

The `name: string` property is always required and creates a binding between the component and a field of the form. I.e. `<Input name="firstName"/>` declares a textbox that is bound to the `firstName` field of the data that formik controls. To learn about Antd components just visit the official docs. Then import the corresponding _formik-antd_ component from `@jbuschke/formik-antd` and provide the `name` property.

|              | Name           | Props                                                                                                       |
| --------------------- | -------------- | ----------------------------------------------------------------------------------------------------------- |
| :white_check_mark:    | Checkbox       | { name, validate } & [CheckboxProps](https://ant.design/components/checkbox/)                                    |
| :white_check_mark:    | Checkbox.Group | { name, validate } & [CheckboxGroupProps](https://ant.design/components/checkbox/#Checkbox-Group)                |
| :white_check_mark:    | DatePicker     | { name, validate } & [DatePickerProps](https://ant.design/components/date-picker/)                               |
| :white_check_mark:    | Input          | { name, validate } & [InputProps](https://ant.design/components/input/)                                          |
| :white_check_mark:    | InputNumber    | { name, validate } & [InputNumberProps](https://ant.design/components/input-number/)                             |
| :white_check_mark:    | Input.Password | { name, validate } & [InputPasswordProps](https://ant.design/components/input/)                                  |
| :white_check_mark:    | Radio.Group    | { name, validate } & [RadioGroupProps](https://ant.design/components/radio/#RadioGroup)                          |
| :white_check_mark:    | Switch         | { name, validate } & [SwitchProps](https://ant.design/components/switch/)                                        |
| :white_check_mark:    | Input.TextArea | { name, validate } & [Input.TextAreaProps](https://ant.design/components/input/#components-input-demo-textarea)  |
| :white_check_mark:    | TimePicker     | { name, validate } & [TimePickerProps](https://ant.design/components/input/#components-input-demo-textarea) |
| :black_square_button: | AutoComplete   | { name, validate } & [AutoCompleteProps](https://ant.design/components/auto-complete/)                      |
| :black_square_button: | Cascader       | { name, validate } & [CascaderProps](https://ant.design/components/cascader/)                               |
| :black_square_button: | Mention        | { name, validate } & [MentionProps](https://ant.design/components/mention/)                                 |
| :black_square_button: | Rate           | { name, validate } & [RateProps](https://ant.design/components/rate/)                                       |
| :black_square_button: | Slider         | { name, validate } & [SliderProps](https://ant.design/components/slider/)                                   |
| :black_square_button: | TreeSelect     | { name, validate } & [TreeSelectProps](https://ant.design/components/tree-select/)                               |
| :black_square_button: | Transfer       | { name, validate } & [TransferProps](https://ant.design/components/transfer/)                                    |

## Validation

Showing validation messages can be accomplished with the `FormItem` component. It renders error messages if the field has been touched and the corresponding field has a validation error.

```jsx
<FormItem name="firstName" >
  <InputField name="firstName" />
</FormItem>
```

How the validation logic is done is not part of this library.

## Lists / Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax for the **name** property as described in the [formik documentation](https://jaredpalmer.com/formik/docs/guides/arrays).

```jsx
<InputField name="friends[0].firstName" />
```

## Buttons

| Name         | Props                                           | Description                                          |
| ------------ | ----------------------------------------------- | ---------------------------------------------------- |
| SubmitButton | [Button](https://ant.design/components/button/) | triggers form submission, is enabled when form valid |
| ResetButton  | [Button](https://ant.design/components/button/) | resets the form, is enabled when form dirty          |

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
