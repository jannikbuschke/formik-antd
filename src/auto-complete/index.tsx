import { AutoComplete as $AutoComplete } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "../FieldProps";
import { AutoCompleteProps as $AutoCompleteProps } from "antd/lib/auto-complete";

export type AutoCompleteProps = FormikFieldProps & $AutoCompleteProps;

export const AutoComplete = ({ name, validate, ...restProps }: AutoCompleteProps) => (
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
