import * as React from "react";
import { Checkbox as $Checkbox } from "antd";
import { Field, FieldProps } from "formik";
import { CheckboxProps as $CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { FormikFieldProps } from "../FieldProps";
import { CheckboxGroupProps as $CheckboxGroupProps } from "antd/lib/checkbox/Group";

export type CheckboxProps = FormikFieldProps & $CheckboxProps;

export const Checkbox = ({ name, validate, ...restProps }: CheckboxProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Checkbox
          name={name}
          checked={value}
          onChange={v => {
            setFieldValue(name, v.target.checked);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      )}
    </Field>
  ) : (
    <$Checkbox {...restProps} />
  );

export default Checkbox;

export type CheckboxGroupProps = FormikFieldProps & $CheckboxGroupProps;

Checkbox.Group = ({ name, validate, ...restProps }: CheckboxGroupProps) =>
  name ? (
    <Field name={name} validate={validate}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched }
      }: FieldProps) => (
        <$Checkbox.Group
          value={value}
          onChange={v => {
            setFieldValue(name, v);
            setFieldTouched(name, true);
          }}
          {...restProps}
        />
      )}
    </Field>
  ) : (
    <$Checkbox.Group {...restProps} />
  );
