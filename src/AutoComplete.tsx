import { AutoComplete as $AutoComplete } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { AutoCompleteProps } from "antd/lib/auto-complete";

export const AutoComplete = ({ name, validate, ...restProps }: FormikFieldProps & AutoCompleteProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form }: FieldProps) => (
      <$AutoComplete
        value={value}
        onChange={e => form.setFieldValue(name, e.valueOf())}
        onBlur={e => form.setFieldTouched(name)}
        {...restProps}
      />
    )}
  </Field>
);
