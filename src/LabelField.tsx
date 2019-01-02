import { Field, FieldProps } from "formik";
import * as React from "react";

export const Text = (props: any) => (
  <Field {...props}>
    {(p: FieldProps) => {
      return (
        <>
          <label>{props.label ? props.label : " "}:</label>
          <span>{p.field.value ? p.field.value.toString() : " "}</span>
        </>
      );
    }}
  </Field>
);
