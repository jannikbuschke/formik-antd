import { Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxGroupProps } from "antd/lib/checkbox/Group";
import { FormikFieldProps } from "./FieldProps";

export const CheckboxGroupField = (
  { name, validate, ...restProps }: FormikFieldProps & CheckboxGroupProps 
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value: fieldValue }, form: { setFieldValue } }: FieldProps) => (
      <Checkbox.Group
        value={fieldValue}
        onChange={value => setFieldValue( fieldName, value )}
        {...restProps}
      />
    )}
  </Field>
);
