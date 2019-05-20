import { Select as $Select } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SelectProps as $SelectProps, OptionProps } from "antd/lib/select";
import { FormikFieldProps } from "./FieldProps";

export type SelectProps = FormikFieldProps & $SelectProps<any> & { children: React.ReactNode };

export const Select = ({ name, validate, children, ...restProps }: SelectProps) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
        <$Select
          onChange={v => setFieldValue(name, v)}
          onBlur={() => setFieldTouched(name)}
          value={value}
          {...restProps}
        >
          {children}
        </$Select>
      )}
    </Field>
  );
};

type Option = OptionProps & { label: React.ReactNode | string | number };

Select.renderOptions = (options: Option[]) =>
  options.map(({ label, ...restProps }, index) => (
    <$Select.Option key={`select-option-${index}`} {...restProps}>
      {label}
    </$Select.Option>
  ));
