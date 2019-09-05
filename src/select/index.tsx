import { Select as $Select } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SelectProps as $SelectProps, OptionProps } from "antd/lib/select";
import { FormikFieldProps } from "../FieldProps";

export type SelectProps = FormikFieldProps & $SelectProps<any> & { children: React.ReactNode };

export const Select = ({ name, validate, children, onChange, onBlur, ...restProps }: SelectProps) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
        <$Select
          onChange={(value, option) => {
            setFieldValue(name, value)
            onChange && onChange(value, option)
          }}
          onBlur={value => {
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
  );
};

export default Select

type Option = OptionProps & { label: React.ReactNode | string | number };

Select.renderOptions = (options: Option[]) =>
  options.map(({ label, ...restProps }, index) => (
    <$Select.Option key={`select-option-${index}`} {...restProps}>
      {label}
    </$Select.Option>
  ));

Select.Option = $Select.Option;
Select.OptGroup = $Select.OptGroup;