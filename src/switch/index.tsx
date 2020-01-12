import { Switch as $Switch } from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { SwitchProps as $SwitchProps } from 'antd/lib/switch'
import { FormikFieldProps } from '../FieldProps'

export type SwitchProps = FormikFieldProps & $SwitchProps

export const Switch = ({
  name,
  validate,
  onChange,
  ...restProps
}: SwitchProps) => (
  <Field name={name} validate={validate}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Switch
        checked={value}
        onChange={(checked, event) => {
          setFieldValue(name, checked)
          setFieldTouched(name, true, false)
          onChange && onChange(checked, event)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Switch
