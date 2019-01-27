import { Select } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const SelectField = ({
  name,
  children
}: {
  name: string;
  children: any;
}) => (
  <Field name={name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
      <Select
        onChange={value => form.setFieldValue(name, value)}
        value={field.value}
      >
        {children}
      </Select>
    )}
  </Field>
);
