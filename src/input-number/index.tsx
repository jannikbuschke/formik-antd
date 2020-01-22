import { InputNumber as $InputNumber } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { InputNumberProps as $InputNumberProps } from 'antd/lib/input-number'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'

export type InputNumberProps = FormikFieldProps & $InputNumberProps

export const InputNumber = ({
  name,
  validate,
  fast,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}: InputNumberProps) => (
  <Field name={name} validate={validate} fast={fast}>
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
