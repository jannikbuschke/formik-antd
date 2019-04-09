import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";

export const TextAreaField = (
  { name, validate, ...restProps }: FormikFieldProps & TextAreaProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value, onChange, onBlur } }: FieldProps) => (
      <Input.TextArea
        name={fieldName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
