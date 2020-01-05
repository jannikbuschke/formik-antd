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
          value={value}
          {...restProps}
        >
          {children}
        </$Select>
      )}
    </Field>
  )
}

export default Select

// type Option = OptionProps & { label: React.ReactNode | string | number };

// Select.renderOptions = (options: Option[]) =>
//   options.map(({ label, ...restProps }, index) => (
//     <$Select.Option key={`select-option-${index}`} {...restProps}>
//       {label}
//     </$Select.Option>
//   ));

Select.Option = $Select.Option
Select.OptGroup = $Select.OptGroup
