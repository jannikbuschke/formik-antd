import * as React from "react";
import { Checkbox as $Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import { CheckboxProps as $CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";
import { CheckboxGroupProps as $CheckboxGroupProps } from "antd/lib/checkbox/Group";

export type CheckboxProps = FormikFieldProps & $CheckboxProps;

export const Checkbox = ({ name, validate, ...restProps }: CheckboxProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange } }: FieldProps) => (
      <$Checkbox
        name={name}
        checked={value}
        onChange={onChange}
        {...restProps}
      />
    )}
  </Field>
);

export type CheckboxGroupProps = FormikFieldProps & $CheckboxGroupProps;

Checkbox.Group = ({ name, validate, ...restProps }: CheckboxGroupProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Checkbox.Group
        value={value}
        onChange={v => setFieldValue(name, v)}
        {...restProps}
      />
    )}
  </Field>
);
