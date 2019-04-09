import { Switch } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { SwitchProps } from "antd/lib/switch";
import { FormikFieldProps } from "./FieldProps";

export const SwitchField = (
  { name, validate, ...restProps }: FormikFieldProps & SwitchProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value: fieldValue }, form: { setFieldValue } }: { field: any; form: FormikProps<any> }) => (
      <Switch
        checked={fieldValue}
        onChange={value => setFieldValue(fieldName, value)}
        {...restProps}
      />
    )}
  </Field>
);
