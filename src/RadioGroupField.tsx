import { Radio } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps, IDataSourceObject } from "./FieldProps";

export const RadioGroupField = (
  { name, validate, ...restProps }: FormikFieldProps & RadioGroupProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name, value }, form: { setFieldValue } }: FieldProps) => (
      <Radio.Group 
        value={value}
        onChange={e => setFieldValue(name, e.target.value)}
        {...restProps}
      />
    )}
  </Field>
);
