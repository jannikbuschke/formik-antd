import { Checkbox as $Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "./FieldProps";
import { CheckboxGroupProps } from "antd/lib/checkbox/Group";

export const Checkbox = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & CheckboxProps) => (
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

Checkbox.Group = ({
  name,
  validate,
  ...restProps
}: FormikFieldProps & CheckboxGroupProps) => (
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
