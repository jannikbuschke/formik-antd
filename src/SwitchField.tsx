import { Switch, Checkbox } from "antd";
import { Field, FormikProps, FieldProps } from "formik";
import * as React from "react";
import { SwitchProps } from "antd/lib/switch";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";

export const SwitchField = (props: { name: string } & SwitchProps) => (
  <Field name={props.name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
      <Switch
        checked={field.value}
        onChange={e => form.setFieldValue(props.name, e)}
        {...props}
      />
    )}
  </Field>
);
