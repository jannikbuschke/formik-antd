import { Input as $Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps as $InputProps, PasswordProps as $PasswordProps, TextAreaProps as $TextAreaProps } from "antd/lib/input";
import { FormikFieldProps } from "../FieldProps";

export type InputProps = FormikFieldProps & $InputProps;

export const Input = ({ name, validate, onChange: $onChange, onBlur: $onBlur, ...restProps }: InputProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input
        name={name}
        value={value}
        onChange={event => {
          onChange(event)
          $onChange && $onChange(event)
        }}
        onBlur={event => {
          onBlur(event)
          $onBlur && $onBlur(event)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default Input

export type PasswordProps = FormikFieldProps & $PasswordProps;

Input.Password = ({ name, validate, onChange: $onChange, onBlur: $onBlur, ...restProps }: PasswordProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input.Password
        name={name}
        value={value}
        onChange={event => {
          onChange(event)
          $onChange && $onChange(event)
        }}
        onBlur={event => {
          onBlur(event)
          $onBlur && $onBlur(event)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type TextAreaProps = FormikFieldProps & $TextAreaProps;

Input.TextArea = ({ name, validate, onChange: $onChange, onBlur: $onBlur, ...restProps }: TextAreaProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <$Input.TextArea
        name={name}
        value={value}
        onChange={event => {
          onChange(event)
          $onChange && $onChange(event)
        }}
        onBlur={event => {
          onBlur(event)
          $onBlur && $onBlur(event)
        }}
        {...restProps}
      />
    )}
  </Field>
);
