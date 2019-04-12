import { Switch } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SwitchProps } from "antd/lib/switch";
import { FormikFieldProps } from "./FieldProps";

export const SwitchField = (
  { name, validate, ...restProps }: FormikFieldProps & SwitchProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <Switch
        checked={value}
        onChange={v => setFieldValue(name, v)}
        {...restProps}
      />
    )}
  </Field>
);
