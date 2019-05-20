import { Input as $Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps as $InputProps, PasswordProps as $PasswordProps, TextAreaProps as $TextAreaProps } from "antd/lib/input";
import { FormikFieldProps } from "./FieldProps";

export type InputProps = FormikFieldProps & $InputProps;

export const Input = ({ name, validate, ...restProps }: InputProps) => (
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

export type PasswordProps = FormikFieldProps & $PasswordProps;

Input.Password = ({ name, validate, ...restProps }: PasswordProps) => (
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

export type TextAreaProps = FormikFieldProps & $TextAreaProps;

Input.TextArea = ({ name, validate, ...restProps }: TextAreaProps) => (
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
