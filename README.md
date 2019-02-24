[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

# formik-antd

This library provides a simple declarative integration for input components of the UI component library [Ant Design](https://ant.design/docs/react/introduce) and the form-state library [Formik](https://github.com/jaredpalmer/formik).

## API

Ant Designs input components like `<Input />, <Checkbox />, <Switch />` etc. are augmented with a **name** property of type string, which connects them to a form field. The original features and props of the components stay the same (besides the additional name property).

The augmented components **names** are composed of the original Ant Designs name suffixed with 'Field'. So `<Input />` becomes `<InputField />`, `<Checkbox />` becomes `<CheckboxField />` etc.

## Examples / Payground
```
<Formik initialValues={{ firstName:"", age: 20 }}>
  <InputField name="firstName" />
  <InputNumberField name="age" min={0} />
</Formik>
```
[More examples on CodeSandbox](https://codesandbox.io/s/ooo94m4q5y)
