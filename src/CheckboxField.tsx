import { Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";

export const CheckboxField = (props: FormikFieldProps & CheckboxProps) => (
  <Field name={props.name} validate={props.validate}>
    {({ field }: FieldProps) => {
      return (
        <Checkbox checked={field.value} onChange={field.onChange} {...props} />
      );
    }}
  </Field>
);
