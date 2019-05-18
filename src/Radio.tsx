import { Radio as $Radio } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps } from "./FieldProps";

export const Radio = ({ name, ...restProps }: FormikFieldProps & RadioGroupProps) => (
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

Radio.Group = ({ name, ...restProps }: FormikFieldProps & RadioGroupProps) => (
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
