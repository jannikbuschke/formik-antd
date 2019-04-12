import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";

export const TextAreaField = (
  { name, validate, ...restProps }: FormikFieldProps & TextAreaProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }: FieldProps) => (
      <Input.TextArea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
