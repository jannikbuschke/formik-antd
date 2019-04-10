import { Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { PasswordProps } from "antd/lib/input/Password";

export const InputPasswordField = (
  { name, validate, ...restProps }: FormikFieldProps & PasswordProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <Input.Password
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
