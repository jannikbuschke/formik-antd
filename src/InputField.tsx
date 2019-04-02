import { Input } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputProps } from "antd/lib/input";
import { FormikFieldProps } from "./FieldProps";

export const InputField = (props: FormikFieldProps & InputProps) => (
  <Field name={props.name} validate={props.validate}>
    {({ field }: FieldProps) => {
      return (
        <Input
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
