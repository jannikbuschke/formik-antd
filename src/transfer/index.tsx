import { Transfer as $Transfer } from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import { TransferProps as $TransferProps } from 'antd/lib/transfer'

export type TransferProps = FormikFieldProps & $TransferProps

export const Transfer = ({
  name,
  validate,
  onChange,
  ...restProps
}: TransferProps) => (
  <Field name={name} validate={validate}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Transfer
        targetKeys={value || []}
        onChange={(targetKeys, direction, moveKeys) => {
          setFieldValue(name, targetKeys)
          setFieldTouched(name, true, false)
          onChange && onChange(targetKeys, direction, moveKeys)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Transfer
