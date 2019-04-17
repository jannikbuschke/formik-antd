import { Field, FieldProps } from "formik";
import * as React from "react";

export const HtmlText = (props: { name: string }) => (
  <Field {...props}>
    {({ field, form }: FieldProps) => {
      return field.value;
    }}
  </Field>
);
