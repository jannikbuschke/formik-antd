import { Radio as $Radio } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { RadioGroupProps as $RadioGroupProps } from 'antd/lib/radio/interface'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'

export type RadioGroupProps = FormikFieldProps & $RadioGroupProps

export const Radio = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: RadioGroupProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Radio
        value={value}
        onChange={(event) => {
          setFieldValue(name, event.target.value)
          setFieldTouched(name, true, false)
          onChange && onChange(event)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Radio

Radio.Group = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: RadioGroupProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Radio.Group
        value={value}
        onChange={(event) => {
          setFieldValue(name, event.target.value)
          setFieldTouched(name, true, false)
          onChange && onChange(event)
        }}
        {...restProps}
      />
    )}
  </Field>
)

Radio.Button = $Radio.Button
