import { Transfer as $Transfer } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import {
  TransferItem,
  TransferProps as $TransferProps,
} from 'antd/lib/transfer'

export type TransferProps<T> = FormikFieldProps & $TransferProps<T>

export function Transfer<T extends TransferItem = TransferItem>({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: TransferProps<T>) {
  return (
    <Field name={name} validate={validate} fast={fast}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched },
      }: FieldProps) => (
        <$Transfer<T>
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
}

export default Transfer
