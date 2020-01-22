import { Transfer as $Transfer } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { TransferProps as $TransferProps } from 'antd/lib/transfer'

export type TransferProps = FormikFieldProps & $TransferProps

export const Transfer = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: TransferProps) => (
  <Field name={name} validate={validate} fast={fast}>
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
