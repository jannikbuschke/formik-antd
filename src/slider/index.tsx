import { Slider as $Slider } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { SliderProps as $SliderProps } from "antd/lib/slider";

export type SliderProps = FormikFieldProps & $SliderProps;

export const Slider = ({ name, validate, onChange, ...restProps }: SliderProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Slider
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

export default Slider