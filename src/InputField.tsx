import { Input as $Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";
import { FormikFieldProps } from "./FieldProps";

export const Input = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & InputProps) => (
  <Field name={name} validate={validate}>
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

Input.Password = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & PasswordProps) => (
  <Field name={name} validate={validate}>
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

// Input.TextArea = () => <div>hello world</div>;

Input.TextArea = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & TextAreaProps) => (
  <Field name={name} validate={validate}>
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
