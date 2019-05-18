import { InputNumber as $InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputNumberProps } from "antd/lib/input-number";
import { FormikFieldProps } from "./FieldProps";

export const InputNumber = ({ name, ...restProps }: FormikFieldProps & InputNumberProps) => (
  <Field name={name}>
    {({ field: { value, onBlur }, form: { setFieldValue } }: FieldProps) => (
      <$InputNumber
        name={name}
        value={value}
        onChange={v => setFieldValue(name, v)}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
