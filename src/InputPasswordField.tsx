import { Input } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { PasswordProps } from "antd/lib/input/Password";

export const InputPasswordField = (props: FormikFieldProps & PasswordProps) => (
  <Field name={props.name} validate={props.validate}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
      <Input.Password
        value={field.value}
        onChange={value => form.setFieldValue(props.name, value)}
        onBlur={field.onBlur}
        {...props}
      />
    )}
  </Field>
);
