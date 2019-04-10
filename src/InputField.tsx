import { Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps } from "antd/lib/input";
import { FormikFieldProps } from "./FieldProps";

export const InputField = (
  { name, validate, ...restProps }: FormikFieldProps & InputProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
