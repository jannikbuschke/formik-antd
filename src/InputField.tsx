import { Input } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const InputField = ({
  name,
  placeholder
}: {
  name: string;
  placeholder?: string;
}) => (
  <Field name={name}>
    {({ field }: { field: any; form: FormikProps<any> }) => (
      <Input placeholder={placeholder} {...field} />
    )}
  </Field>
);
