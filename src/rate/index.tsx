import { Rate as $Rate } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { RateProps as $RateProps } from "antd/lib/rate";

export type RateProps = FormikFieldProps & $RateProps;

export const Rate = ({ name, validate, ...restProps }: RateProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Rate
          value={value}
          onChange={e => {
            setFieldValue(name, e.valueOf());
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      )}
    </Field>
  ) : (
    <$Rate {...restProps} />
  );

export default Rate;
