import { Field, FieldProps } from "formik";
import * as React from "react";

export const Text = (
  { label, ...restProps }: any
) => (
  <Field {...restProps}>
    {({ field: { value }}: FieldProps) => (
      <>
        <label>{label ? label : " "}:</label>
        <span>{value ? value.toString() : " "}</span>
      </>
    )}
  </Field>
);
