import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";

export const TextAreaField = (props: FormikFieldProps & TextAreaProps) => (
  <Field name={props.name} validate={props.validate}>
    {({ field }: FieldProps) => {
      return (
        <Input.TextArea
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
