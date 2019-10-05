[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikb%20Formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=4?branchName=master)
[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/x2941k7vpz)

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/Formik).

## Example

```jsx
import React from "react";
import { Form, Input, InputNumber, Checkbox } from "@jbuschke/formik-antd";
import { Formik } from "formik";

<Formik
  initialValues={{ firstName: "", age: 20, newsletter: false }}
  render={()=> (
    <Form>
      <Input name="firstName" placeholder="First Name" />
      <InputNumber name="age" min={0} />
      <Checkbox name="newsletter">Newsletter</Checkbox>
    </Form>
  )}
/>
```

## Getting started

```
npx create-react-app my-app
cd my-app
npm install formik antd @jbuschke/formik-antd
npm run start
```

Add `import "antd/dist/antd.css` to your `index.js` file (or look at https://ant.design/docs/react/getting-started for other options).

## Core Concept

This library enriches several Ant Design components with a `name: string` property that connects them to a Formik form field. It is pretty simple:

1. Import a supported Ant Design component from `formik-antd` (i.e. `import { Input } from "@jbuschke/formik-antd"`.
2. Declare an instance of the component inside a `<Formik>` component.
3. Provide the `name` property (i.e. `"firstName"`).

Your components input/value state is now connected/synced with the corresponding `Formik` field!

The Ant Design components are feature rich and provide a lot of props to customize their vizual presentation. These features and also their apis stay the same. Visit their documentation to learn more.

## Core Components

To learn about Antd components just visit the official docs. Most supported components are found in the [Data Entry](https://ant.design/components/auto-complete/) section.

|                       | Name                       | Props                                                                                                            |
| --------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| :white_check_mark:    | AutoComplete               | { name, validate? } & [AutoCompleteProps](https://ant.design/components/auto-complete/)                          |
| :white_check_mark:    | Cascader                   | { name, validate? } & [CascaderProps](https://ant.design/components/cascader/)                                   |
| :white_check_mark:    | Checkbox                   | { name, validate? } & [CheckboxProps](https://ant.design/components/checkbox/)                                   |
| :white_check_mark:    | Checkbox.Group             | { name, validate? } & [CheckboxGroupProps](https://ant.design/components/checkbox/#Checkbox-Group)               |
| :white_check_mark:    | DatePicker                 | { name, validate? } & [DatePickerProps](https://ant.design/components/date-picker/)                              |
| :white_check_mark:    | DatePicker.WeekPicker      | { name, validate? } & [WeekPickerProps](https://ant.design/components/date-picker/#WeekPicker)                   |
| :white_check_mark:    | DatePicker.RangePicker     | { name, validate? } & [RangePickerProps](https://ant.design/components/date-picker/#RangePicker)                 |
| :white_check_mark:    | DatePicker.MonthPicker     | { name, validate? } & [MonthPickerProps](https://ant.design/components/date-picker/#MonthPicker)                 |
| :white_check_mark:    | Input                      | { name, validate? } & [InputProps](https://ant.design/components/input/)                                         |
| :white_check_mark:    | InputNumber                | { name, validate? } & [InputNumberProps](https://ant.design/components/input-number/)                            |
| :white_check_mark:    | Input.Password             | { name, validate? } & [InputPasswordProps](https://ant.design/components/input/)                                 |
| :white_check_mark:    | Input.TextArea             | { name, validate? } & [Input.TextAreaProps](https://ant.design/components/input/#components-input-demo-textarea) |
| :white_check_mark:    | Mention                    | { name, validate? } & [MentionProps](https://ant.design/components/mention/)                                     |
| :white_check_mark:    | Radio.Group                | { name, validate? } & [RadioGroupProps](https://ant.design/components/radio/#RadioGroup)                         |
| :white_check_mark:    | Rate                       | { name, validate? } & [RateProps](https://ant.design/components/rate/)                                           |
| :white_check_mark:    | Select                     | { name, validate? } & [SelectProps](https://ant.design/components/select/)                                       |
| :white_check_mark:    | Slider                     | { name, validate? } & [SliderProps](https://ant.design/components/slider/)                                       |
| :white_check_mark:    | Switch                     | { name, validate? } & [SwitchProps](https://ant.design/components/switch/)                                       |
| :white_check_mark:    | TimePicker                 | { name, validate? } & [TimePickerProps](https://ant.design/components/input/#components-input-demo-textarea)     |
| :white_check_mark:    | Transfer                   | { name, validate? } & [TransferProps](https://ant.design/components/transfer/)                                   |
| :white_check_mark:    | TreeSelect                 | { name, validate? } & [TreeSelectProps](https://ant.design/components/tree-select/)                              |

## Form- and Field-level Validation

Formik provides form- and field-level [validation callbacks](https://jaredpalmer.com/formik/docs/guides/validation) to provide validation logic. How to validate is neither part of formik nor of this library.

Form-level validation is done by setting formiks `validate` prop. Field-level validation is optional available on the components. Additional to the `name` prop formiks optional `validate?: (value: any) => undefined | string | Promise<any>` is added to all core components to allow field-level validation.
There is one special case to be aware of when using field-level validation: When using the `Form.Item` component with another Antd-field component, the `validate` prop has to be added to the `Form.Item`, not the input component:

```jsx
<Form.Item name="firstName" validate={validator}>
  <Input name="firstName" />
</Form.Item>
```

## Rendering Validation Feedback

Showing validation messages can be accomplished with the `Form.Item` component (or `FormItem` which is the same). It 
- renders *error* messages if the field has been touched and the corresponding field has a validation error (and changes the border color of enclosed input component to red).
- renders a green *success* icon messages if it's `showValidateSuccess: boolean` prop is set to true, the field has been touched and the corresponding field does not have a validation error.
- exposes some layout features and a label (visit https://ant.design/components/form/ for the details).

```jsx
<Form.Item name="firstName" >
  <Input name="firstName" />
</Form.Item>
```

## Submitting and Resetting Forms

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

## Lists and Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax as described in the [Formik documentation](https://jaredpalmer.com/Formik/docs/guides/arrays).

```jsx
<InputField name="friends[0].firstName" />
```

## ES imports

```
npm install babel-plugin-import customize-cra react-app-rewired --save-dev
```
`config-overrides.js`
```js
const path = require('path')
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    fixBabelImports('formik-antd',
        {
            libraryName: '@jbuschke/formik-antd',
            libraryDirectory: 'es'
            style: "css",
        },
    )
);
  );
```

`package.json`

```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build"
  }
```

## Treeshaking

Treeshaking with ant design is currently kind of broken, as generally all icons are imported. This will be fixed as of ant design v4 (might be ready in 2019).

## Playground & Contributions

If you want to dig into the source code and test locally you can use https://github.com/jannikbuschke/Formik-antd-playground (clone with the --recursive flag and follow the README, its pretty simple).

## TypeScript

Types are included.

### Typechecking limitations
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

Special thanks to all contributors:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/NileDaley"><img src="https://avatars3.githubusercontent.com/u/15862011?v=4" width="100px;" alt="Nile Daley"/><br /><sub><b>Nile Daley</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=NileDaley" title="Code">💻</a></td>
    <td align="center"><a href="http://www.jameswmann.com"><img src="https://avatars2.githubusercontent.com/u/436270?v=4" width="100px;" alt="James W Mann"/><br /><sub><b>James W Mann</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jwmann" title="Code">💻</a></td>
    <td align="center"><a href="https://www.jannikbuschke.de/blog"><img src="https://avatars2.githubusercontent.com/u/5894881?v=4" width="100px;" alt="Jannik Buschke"/><br /><sub><b>Jannik Buschke</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jannikbuschke" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LarsJK"><img src="https://avatars2.githubusercontent.com/u/1528255?v=4" width="100px;" alt="Lars-Jørgen Kristiansen"/><br /><sub><b>Lars-Jørgen Kristiansen</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=LarsJK" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/voxtex"><img src="https://avatars3.githubusercontent.com/u/735455?v=4" width="100px;" alt="Adam"/><br /><sub><b>Adam</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=voxtex" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jeessy2"><img src="https://avatars2.githubusercontent.com/u/6205259?v=4" width="100px;" alt="jeessy2"/><br /><sub><b>jeessy2</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jeessy2" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/pavan_agrawal_1"><img src="https://avatars3.githubusercontent.com/u/17802917?v=4" width="100px;" alt="Pavan Agrawal"/><br /><sub><b>Pavan Agrawal</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=pavanagrawal123" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Khartir"><img src="https://avatars3.githubusercontent.com/u/5592420?v=4" width="100px;" alt="Khartir"/><br /><sub><b>Khartir</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=Khartir" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yurykozhenov"><img src="https://avatars3.githubusercontent.com/u/18726837?v=4" width="100px;" alt="Yury Kozhenov"/><br /><sub><b>Yury Kozhenov</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=yurykozhenov" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
