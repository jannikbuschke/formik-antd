import { Radio as $Radio } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { RadioGroupProps as $RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps } from "./FieldProps";

export type RadioGroupProps = FormikFieldProps & $RadioGroupProps;

export const Radio = ({ name, ...restProps }: RadioGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Radio
        value={value}
        onChange={e => setFieldValue(name, e.target.value)}
        {...restProps}
      />
    )}
  </Field>
);

Radio.Group = ({ name, ...restProps }: RadioGroupProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Radio.Group
        value={value}
        onChange={e => setFieldValue(name, e.target.value)}
        {...restProps}
      />
    )}
  </Field>
);

Radio.Button = $Radio.Button;
