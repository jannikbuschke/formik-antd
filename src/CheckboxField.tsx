import { Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";

export const CheckboxField = (
  { name, validate, ...restProps }: FormikFieldProps & CheckboxProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value, onChange } }: FieldProps) => (
      <Checkbox name={fieldName} checked={value} onChange={onChange} {...restProps} />
    )}
  </Field>
);
