import { Input } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const InputPasswordField = ({
  name,
  placeholder
}: {
  name: string;
  placeholder?: string;
}) => (
  <Field name={name}>
    {({ field }: { field: any; form: FormikProps<any> }) => (
      <Input.Password placeholder={placeholder} {...field} />
    )}
  </Field>
);
