import { Input as $Input, Slider as $Slider } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { SliderProps } from "antd/lib/slider";

export const Slider = ({ name, ...restProps }: FormikFieldProps & SliderProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Slider
        value={value}
        onChange={e => {
          setFieldValue(name, e.valueOf());
        }}
        {...restProps}
      />
    )}
  </Field>
);
