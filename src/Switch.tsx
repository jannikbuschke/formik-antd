import { Switch as $Switch } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SwitchProps as $SwitchProps } from "antd/lib/switch";
import { FormikFieldProps } from "./FieldProps";

export type SwitchProps = FormikFieldProps & $SwitchProps;

export const Switch = ({ name, ...restProps }: SwitchProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Switch
        checked={value}
        onChange={v => setFieldValue(name, v)}
        {...restProps}
      />
    )}
  </Field>
);
