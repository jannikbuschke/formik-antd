[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/ooo94m4q5y)

# formik-antd

Simple declarative bindingings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/formik).

## Example

```
<Formik initialValues={{ firstName:"", age: 20 }}>
  <InputField name="firstName" placeholder="first name" />
  <InputNumberField name="age" min={0} />
</Formik>
```

## install

`npm install @jbuschke/formik-antd`

## API

Ant Designs input components like `<Input />, <Checkbox />, <Switch />` etc. are augmented with a **name** property of type string, which connects them to a form field. All other properties belong to the antd component, so their api and behaviour stays as is and can be looked up in the official docs.

The augmented components **names** are composed of the original component name suffixed with 'Field'. So `<Input />` becomes `<InputField />`, `<Checkbox />` becomes `<CheckboxField />` etc.

## Components

| antd     | formik-antd   |
| -------- | ------------- |
| Input    | InputField    |
| Checkbox | CheckboxField |
| TextArea | TextAreaField |
