import { Switch as $Switch } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { SwitchProps as $SwitchProps } from 'antd/lib/switch'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'

export type SwitchProps = FormikFieldProps & $SwitchProps

export const Switch = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: SwitchProps) => (
  <Field name={name} validate={validate} fast={fast}>
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
