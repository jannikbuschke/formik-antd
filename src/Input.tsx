import { Input as $Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";
import { FormikFieldProps } from "./FieldProps";

export const Input = ({ name, ...restProps }: FormikFieldProps & InputProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);

Input.Password = ({ name, ...restProps }: FormikFieldProps & PasswordProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input.Password
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);

Input.TextArea = ({ name, ...restProps }: FormikFieldProps & TextAreaProps) => (
  <Field name={name}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input.TextArea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
