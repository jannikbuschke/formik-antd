import { Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";

export const CheckboxField = (
  { name, validate, ...restProps }: FormikFieldProps & CheckboxProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange } }: FieldProps) => (
      <Checkbox name={name} checked={value} onChange={onChange} {...restProps} />
    )}
  </Field>
);
