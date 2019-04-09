import { InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputNumberProps } from "antd/lib/input-number";
import { FormikFieldProps } from "./FieldProps";

export const InputNumberField = (
  { name, validate, ...restProps }: FormikFieldProps & InputNumberProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value: fieldValue, onBlur }, form: { setFieldValue } }: FieldProps) => (
      <InputNumber
        name={fieldName}
        value={fieldValue}
        onChange={value => setFieldValue(fieldName, value)}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
