import { Select as $Select } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { SelectProps as $SelectProps } from 'antd/lib/select'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'

export type SelectProps<T = any> = FormikFieldProps &
  $SelectProps<T> & { children?: React.ReactNode }
// declare class Select<ValueType extends SelectValue = SelectValue> extends React.Component<SelectProps<ValueType>> {
export const Select = ({
  name,
  validate,
  fast,
  children,
  onChange,
  onBlur,
  ...restProps
}: SelectProps) => {
  return (
    <Field name={name} validate={validate} fast={fast}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched },
      }: FieldProps) => (
        <$Select<any>
          onChange={(value, option) => {
            setFieldValue(name, value)
            onChange && onChange(value, option)
          }}
          onBlur={(value) => {
            setFieldTouched(name)
            onBlur && onBlur(value)
          }}
          // setting undefined will show the placeholder
          value={value === '' || value === null ? undefined : value}
          id={name}
          {...restProps}
        >
          {children}
        </$Select>
      )}
    </Field>
  )
}

export default Select

Select.Option = $Select.Option
Select.OptGroup = $Select.OptGroup
