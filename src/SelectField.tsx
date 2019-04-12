import { Select as $Select } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SelectProps, OptionProps } from "antd/lib/select";
import { FormikFieldProps } from "./FieldProps";

export const Select = ({
  name,
  validate,
  children,
  ...restProps
}: FormikFieldProps & SelectProps<any> & { children: React.ReactNode }) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
        <$Select
          onChange={v => setFieldValue(name, v)}
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
