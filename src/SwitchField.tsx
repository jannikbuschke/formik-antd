import { Switch } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { SwitchProps } from "antd/lib/switch";
import { FormikFieldProps } from "./FieldProps";

export const SwitchField = (props: FormikFieldProps & SwitchProps) => (
  <Field name={props.name} validate={props.validate}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
      <Switch
        checked={field.value}
        onChange={e => form.setFieldValue(props.name, e)}
        {...props}
      />
    )}
  </Field>
);
