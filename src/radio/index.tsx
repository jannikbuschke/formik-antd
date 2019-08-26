import { Radio as $Radio } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { RadioGroupProps as $RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps } from "../FieldProps";

export type RadioGroupProps = FormikFieldProps & $RadioGroupProps;

export const Radio = ({ name, validate, ...restProps }: RadioGroupProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Radio
          value={value}
          onChange={e => {
            setFieldValue(name, e.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      )}
    </Field>
  ) : (
    <$Radio {...restProps} />
  );

export default Radio;

Radio.Group = ({ name, validate, ...restProps }: RadioGroupProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Radio.Group
          value={value}
          onChange={e => {
            setFieldValue(name, e.target.value);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      )}
    </Field>
  ) : (
    <$Radio.Group {...restProps} />
  );

Radio.Button = $Radio.Button;
