import { InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputNumberProps } from "antd/lib/input-number";

export const HtmlTextField = (props: { name: string } & InputNumberProps) => (
  <Field {...props}>
    {({ field, form }: FieldProps) => {
      return field.value;
    }}
  </Field>
);
