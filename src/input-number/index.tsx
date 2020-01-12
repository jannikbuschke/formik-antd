import { InputNumber as $InputNumber } from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { InputNumberProps as $InputNumberProps } from 'antd/lib/input-number'
import { FormikFieldProps } from '../FieldProps'

export type InputNumberProps = FormikFieldProps & $InputNumberProps

export const InputNumber = ({
  name,
  validate,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}: InputNumberProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onBlur }, form: { setFieldValue } }: FieldProps) => (
      <$InputNumber
        name={name}
        value={value}
        onChange={(value) => {
          setFieldValue(name, value)
          $onChange && $onChange(value)
        }}
        onBlur={(event) => {
          onBlur(event)
          $onBlur && $onBlur(event)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default InputNumber
