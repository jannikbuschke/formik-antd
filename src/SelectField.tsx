import { Select } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SelectProps } from "antd/lib/select";
import { FormikFieldProps } from "./FieldProps";

export const SelectField = (
  { name, validate, children, ...restProps }: FormikFieldProps & SelectProps<any> & { children: React.ReactNode }
) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
        <Select
          onChange={v => setFieldValue(name, v)}
          value={value}
          {...restProps}
        >
          {children}
        </Select>
      )}
    </Field>
  );
};
