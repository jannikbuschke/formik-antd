import { Input } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { PasswordProps } from "antd/lib/input/Password";

export const InputPasswordField = (
  { name, validate, ...restProps }: FormikFieldProps & PasswordProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value, onChange, onBlur } }: { field: any; form: FormikProps<any> }) => (
      <Input.Password
        name={fieldName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    )}
  </Field>
);
