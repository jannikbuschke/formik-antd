import { InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputNumberProps } from "antd/lib/input-number";
import { FormikFieldProps } from "./FieldProps";

export const InputNumberField = (
  props: FormikFieldProps & InputNumberProps
) => (
  <Field name={props.name} validate={props.validate}>
    {({ field, form }: FieldProps) => {
      return (
        <InputNumber
          value={field.value}
          onChange={value => form.setFieldValue(props.name, value)}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
