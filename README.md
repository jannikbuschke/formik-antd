[![Build Status](https://dev.azure.com/jannikb/glue/_apis/build/status/jannikbuschke.formik-antd?branchName=master)](https://dev.azure.com/jannikb/glue/_build/latest?definitionId=40&branchName=master)
![GitHub stars](https://img.shields.io/github/stars/jannikbuschke/formik-antd)
![npm](https://img.shields.io/npm/dw/formik-antd)
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors)
[![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

[CodeSandbox](https://codesandbox.io/s/github/jannikbuschke/formik-antd-example)

:sparkles: **Ant Design 4 and compatability**

Ant Design 4 is landing soon. A beta that works with Ant Designs release candidate is available (v2.\*-beta).
Version 1 of this library supports Ant Design v3. Version 2 of this library supports Ant Design 4. Both v1 and v2 of this library work with formik v1 and v2.

:warning: new npm package name: **formik-antd** :warning:

> from version 1.6 and onwards this library is published under `formik-antd`, all previous versions are available under `@jbuschke/formik-antd`. In order to upgrade: change the referenced package name in your package.json as well as all imports. I.e. replace `import { Input } from "@jbuschke/formik-antd` with `import { Input } from "formik-antd`.

# formik-antd

Simple declarative bindings for [Ant Design](https://ant.design/docs/react/introduce) and [Formik](https://github.com/jaredpalmer/Formik).

## Core Concept

This library enriches several Ant Design components with a required `name: string` property that connects them to a Formik form field. It is quite simple. Instead of importing your form components from antd, you need to import them from 'formik-antd' and the `name` prop. Now the component is connected/synced with the corresponding `Formik` field!

The Ant Design components are feature rich and provide a lot of props to customize their visual presentation. These features and also their apis stay exactly the same. Visit their documentation to learn more.

### Example:

```jsx
import React from 'react'
import { Form, Input, InputNumber, Checkbox } from 'formik-antd'
import { Formik } from 'formik'

function App() {
  return (
    <Formik
      initialValues={{ firstName: '', age: 20, newsletter: false }}
      render={() => (
        <Form>
          {/* every formik-antd component must have the 'name' prop set: */}
          <Input name='firstName' placeholder='First Name' />
          {/* the rest of the api stays as is */}
          <InputNumber name='age' min={0} />
          <Checkbox name='newsletter'>Newsletter</Checkbox>
        </Form>
      )}
    />
  )
}
```

## Getting started

```
npm install formik-antd
```

Add `import "antd/dist/antd.css"` to your `index.js` file (or look at https://ant.design/docs/react/getting-started for other options).

## Core Components

|                    | Name                   | Props                                                                                                                   |
| ------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| :white_check_mark: | AutoComplete           | { name, validate?, fast? } & [AutoCompleteProps](https://ant.design/components/auto-complete/)                          |
| :white_check_mark: | Cascader               | { name, validate?, fast? } & [CascaderProps](https://ant.design/components/cascader/)                                   |
| :white_check_mark: | Checkbox               | { name, validate?, fast? } & [CheckboxProps](https://ant.design/components/checkbox/)                                   |
| :white_check_mark: | Checkbox.Group         | { name, validate?, fast? } & [CheckboxGroupProps](https://ant.design/components/checkbox/#Checkbox-Group)               |
| :white_check_mark: | DatePicker             | { name, validate?, fast? } & [DatePickerProps](https://ant.design/components/date-picker/)                              |
| :white_check_mark: | DatePicker.WeekPicker  | { name, validate?, fast? } & [WeekPickerProps](https://ant.design/components/date-picker/#WeekPicker)                   |
| :white_check_mark: | DatePicker.RangePicker | { name, validate?, fast? } & [RangePickerProps](https://ant.design/components/date-picker/#RangePicker)                 |
| :white_check_mark: | DatePicker.MonthPicker | { name, validate?, fast? } & [MonthPickerProps](https://ant.design/components/date-picker/#MonthPicker)                 |
| :white_check_mark: | Input                  | { name, validate?, fast? } & [InputProps](https://ant.design/components/input/)                                         |
| :white_check_mark: | InputNumber            | { name, validate?, fast? } & [InputNumberProps](https://ant.design/components/input-number/)                            |
| :white_check_mark: | Input.Password         | { name, validate?, fast? } & [InputPasswordProps](https://ant.design/components/input/)                                 |
| :white_check_mark: | Input.TextArea         | { name, validate?, fast? } & [Input.TextAreaProps](https://ant.design/components/input/#components-input-demo-textarea) |
| :white_check_mark: | Mention                | { name, validate?, fast? } & [MentionProps](https://ant.design/components/mention/)                                     |
| :white_check_mark: | Radio.Group            | { name, validate?, fast? } & [RadioGroupProps](https://ant.design/components/radio/#RadioGroup)                         |
| :white_check_mark: | Rate                   | { name, validate?, fast? } & [RateProps](https://ant.design/components/rate/)                                           |
| :white_check_mark: | Select                 | { name, validate?, fast? } & [SelectProps](https://ant.design/components/select/)                                       |
| :white_check_mark: | Slider                 | { name, validate?, fast? } & [SliderProps](https://ant.design/components/slider/)                                       |
| :white_check_mark: | Switch                 | { name, validate?, fast? } & [SwitchProps](https://ant.design/components/switch/)                                       |
| :white_check_mark: | Table                  | { name, fast? } & [TableProps](https://ant.design/components/table/)                                                    |
| :white_check_mark: | TimePicker             | { name, validate?, fast? } & [TimePickerProps](https://ant.design/components/input/#components-input-demo-textarea)     |
| :white_check_mark: | Transfer               | { name, validate?, fast? } & [TransferProps](https://ant.design/components/transfer/)                                   |
| :white_check_mark: | TreeSelect             | { name, validate?, fast? } & [TreeSelectProps](https://ant.design/components/tree-select/)                              |

## Submitting and Resetting Forms

Directly under each `<Formik>` container a `<Form>` component _should_ be placed. This component composes the functionality provided by Ant Designs (https://ant.design/components/form/) as well as Formiks (https://jaredpalmer.com/formik/docs/api/form) `<Form>` components:

```jsx
import React from 'react'
import { Form, SubmitButton, ResetButton /* ... */ } from 'formik-antd'
import { Formik } from 'formik'

function App() {
  return <Formik initialValues={/* ... */} onSubmit={/* ... */}>
    <Form>
      {/* ... */}
      <SubmitButton />
      <ResetButton />
    </Form>
  </Formik>
}
```

The `SubmitButton` and `ResetButton` will disable automatically depending on form state. The `ResetButton` is enabled if the form is dirty. The `SubmitButton` is enabled if the form is valid or if it is not dirty.

## Form- and Field-level Validation

Formik provides form- and field-level [validation callbacks](https://jaredpalmer.com/formik/docs/guides/validation) to provide validation logic. How to validate is neither part of formik nor of this library.

Form-level validation is done by setting formiks `validate` prop. Field-level validation is optional available on the components. Additional to the `name` prop formiks optional `validate?: (value: any) => undefined | string | Promise<any>` is added to all core components to allow field-level validation.
There is one special case to be aware of when using field-level validation: When using the `Form.Item` component with another Antd-field component, the `validate` prop has to be added to the `Form.Item`, not the input component:

```jsx
<Form.Item name='firstName' validate={validator}>
  <Input name='firstName' />
</Form.Item>
```

## Rendering Validation Feedback

Showing validation messages can be accomplished with the `Form.Item` component (or `FormItem` which is the same). It

- renders _error_ messages if the field has been touched and the corresponding field has a validation error (and changes the border color of enclosed input component to red).
- renders a green _success_ icon messages if it's `showValidateSuccess: boolean` prop is set to true, the field has been touched and the corresponding field does not have a validation error.
- exposes some layout features and a label (visit https://ant.design/components/form/ for the details).

```jsx
<Form.Item name='firstName'>
  <Input name='firstName' />
</Form.Item>
```

## FastField support

Formik allows performance optimizations through the [`<FastField/>`](https://jaredpalmer.com/formik/docs/api/fastfield) component. Please read the formik docs on when to use such an optimization (usually you don't and maybe should not optimize, unless you encounter performance issues in production).
To opt-in to FastField support, all `formik-antd` components provide an optional `fast?: boolean` prop. Setting this to `true` enables the optimization:

```jsx
<Input name='firstName' fast={true} />
```

## Table

The table components comes with additional helper buttons to add and delete rows. An example can be seen in the [codesandbox](https://codesandbox.io/s/github/jannikbuschke/formik-antd-example).

Two additional helper components to submit and reset forms are provided: `SubmitButton` and `ResetButton`. Both render an Ant Design button and can be customized accordingly ([docs](https://ant.design/components/button/)). The `ResetButton` is disabled if the form is not dirty. To override the default behavior provide the `disable: boolean` prop.

## Lists and Nested objects

Nested objects and arrays can be accessed with lodash-like bracket syntax as described in the [Formik documentation](https://jaredpalmer.com/Formik/docs/guides/arrays).

```jsx
<Input name='friends[0].firstName' />
```

## ES imports

If you do not want to import the full ant design library and its stylesheet (in order to reduce the bundle size) you can import specific components and their stylesheet by their path, as it is described in the antd documentation https://ant.design/docs/react/getting-started#Import-on-Demand

```jsx
import Input from 'formik-antd/es/input'
import 'formik-antd/es/input/style'
```

Some build tools like webpack are now able to "tree shake", meaning unused code from ant design will not be bundled.

As writing imports like this is a little cumbersome there is a babel import helper: https://github.com/ant-design/babel-plugin-import. In `create-react-app` projects babel plugins do not work out of the box. With third party projects like `customize-cra` and `react-app-rewired` we are able to change the webpack config. Be warned though, the team behind `create-react-app` does not support this scenario, so if you run into problems you are on your own.

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
            libraryName: 'formik-antd',
            libraryDirectory: 'es'
            style: "css",
        },
    )
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

Typescript cannot (yet) enforce types of children. In the future this hopefully will be possible.

## License

MIT

## Contributors

Special thanks to all contributors:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/NileDaley"><img src="https://avatars3.githubusercontent.com/u/15862011?v=4" width="100px;" alt=""/><br /><sub><b>Nile Daley</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=NileDaley" title="Code">💻</a></td>
    <td align="center"><a href="http://www.jameswmann.com"><img src="https://avatars2.githubusercontent.com/u/436270?v=4" width="100px;" alt=""/><br /><sub><b>James W Mann</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jwmann" title="Code">💻</a></td>
    <td align="center"><a href="https://www.jannikbuschke.de/blog"><img src="https://avatars2.githubusercontent.com/u/5894881?v=4" width="100px;" alt=""/><br /><sub><b>Jannik Buschke</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jannikbuschke" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LarsJK"><img src="https://avatars2.githubusercontent.com/u/1528255?v=4" width="100px;" alt=""/><br /><sub><b>Lars-Jørgen Kristiansen</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=LarsJK" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/voxtex"><img src="https://avatars3.githubusercontent.com/u/735455?v=4" width="100px;" alt=""/><br /><sub><b>Adam</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=voxtex" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jeessy2"><img src="https://avatars2.githubusercontent.com/u/6205259?v=4" width="100px;" alt=""/><br /><sub><b>jeessy2</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jeessy2" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/pavan_agrawal_1"><img src="https://avatars3.githubusercontent.com/u/17802917?v=4" width="100px;" alt=""/><br /><sub><b>Pavan Agrawal</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=pavanagrawal123" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Khartir"><img src="https://avatars3.githubusercontent.com/u/5592420?v=4" width="100px;" alt=""/><br /><sub><b>Khartir</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=Khartir" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/yurykozhenov"><img src="https://avatars3.githubusercontent.com/u/18726837?v=4" width="100px;" alt=""/><br /><sub><b>Yury Kozhenov</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=yurykozhenov" title="Code">💻</a></td>
    <td align="center"><a href="https://ca.linkedin.com/in/jacktonye"><img src="https://avatars2.githubusercontent.com/u/17484350?v=4" width="100px;" alt=""/><br /><sub><b>Tonye Jack</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=jackton1" title="Code">💻</a></td>
    <td align="center"><a href="http://edongashi.blog"><img src="https://avatars1.githubusercontent.com/u/12145268?v=4" width="100px;" alt=""/><br /><sub><b>Edon Gashi</b></sub></a><br /><a href="#infra-edongashi" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://romantsegelskyi.github.io"><img src="https://avatars2.githubusercontent.com/u/3235379?v=4" width="100px;" alt=""/><br /><sub><b>Roman Tsegelskyi</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=RomanTsegelskyi" title="Code">💻</a></td>
    <td align="center"><a href="http://schulz.codes"><img src="https://avatars3.githubusercontent.com/u/3123354?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Schulz</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=takethefake" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/harrygreen"><img src="https://avatars1.githubusercontent.com/u/1975098?v=4" width="100px;" alt=""/><br /><sub><b>Harry Green</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=harrygreen" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://agreon.de"><img src="https://avatars3.githubusercontent.com/u/4455258?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Huth</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=Agreon" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gabrielberlanda"><img src="https://avatars0.githubusercontent.com/u/11332820?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Berlanda</b></sub></a><br /><a href="https://github.com/jannikbuschke/formik-antd/commits?author=gabrielberlanda" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
