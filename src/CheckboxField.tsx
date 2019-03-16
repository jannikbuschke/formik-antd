import { Switch, Checkbox } from "antd";
import { Field, FormikProps, FieldProps } from "formik";
import * as React from "react";
import { SwitchProps } from "antd/lib/switch";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";

export const CheckboxField = (props: { name: string } & CheckboxProps) => (
  <Field name={props.name}>
    {({ field }: FieldProps) => {
      return (
        <Checkbox checked={field.value} onChange={field.onChange} {...props} />
      );
    }}
  </Field>
);
