import { Slider as $Slider } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { SliderProps as $SliderProps } from "antd/lib/slider";

export type SliderProps = FormikFieldProps & $SliderProps;

export const Slider = ({ name, validate, ...restProps }: SliderProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Slider
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
    <$Slider {...restProps} />
  );

export default Slider;
