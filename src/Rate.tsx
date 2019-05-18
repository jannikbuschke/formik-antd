import { Rate as $Rate } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { RateProps } from "antd/lib/rate";

export const Rate = ({ name, ...restProps }: FormikFieldProps & RateProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Rate
        value={value}
        onChange={e => {
          setFieldValue(name, e.valueOf());
        }}
        {...restProps}
      />
    )}
  </Field>
);
