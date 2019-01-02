import { Switch } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const SwitchField = (props: any) => (
  <Field {...props}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
      <Switch
        checked={field.value}
        onChange={e => form.setFieldValue(props.name, e)}
      />
    )}
  </Field>
);
