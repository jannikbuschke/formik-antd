import * as React from "react";
import { Checkbox as $Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import { CheckboxProps as $CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "../FieldProps";
import { CheckboxGroupProps as $CheckboxGroupProps } from "antd/lib/checkbox/Group";

export type CheckboxProps = FormikFieldProps & $CheckboxProps;

export const Checkbox = ({ name, validate, onChange, ...restProps }: CheckboxProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Checkbox
        name={name}
        checked={value}
        onChange={event => {
          setFieldValue(name, event.target.checked)
          setFieldTouched(name, true)
          onChange && onChange(event)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default Checkbox

export type CheckboxGroupProps = FormikFieldProps & $CheckboxGroupProps;

Checkbox.Group = ({ name, validate, onChange, ...restProps }: CheckboxGroupProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$Checkbox.Group
        value={value}
        onChange={value => {
          setFieldValue(name, value)
          setFieldTouched(name, true)
          onChange && onChange(value)
        }}
        {...restProps}
      />
    )}
  </Field>
);
