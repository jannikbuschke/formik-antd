import { Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxGroupProps } from "antd/lib/checkbox/Group";
import { FormikFieldProps } from "./FieldProps";

export const CheckboxGroupField = (
  { name, validate, ...restProps }: FormikFieldProps & CheckboxGroupProps 
) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <Checkbox.Group
        value={value}
        onChange={v => setFieldValue( name, v )}
        {...restProps}
      />
    )}
  </Field>
);
