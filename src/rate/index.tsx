import { Rate as $Rate } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { RateProps as $RateProps } from "antd/lib/rate";

export type RateProps = FormikFieldProps & $RateProps;

export const Rate = ({ name, validate, onChange, ...restProps }: RateProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Rate
        value={value}
        onChange={value => {
          setFieldValue(name, value != null ? value.valueOf() : value)
          setFieldTouched(name, true)
          onChange && onChange(value)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default Rate