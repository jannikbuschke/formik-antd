import { Select } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { SelectProps } from "antd/lib/select";
import { FormikFieldProps } from "./FieldProps";

export const SelectField = (
  props: FormikFieldProps & SelectProps<any> & { children: React.ReactNode }
) => {
  return (
    <Field name={props.name} validate={props.validate}>
      {({ field, form }: { field: any; form: FormikProps<any> }) => (
        <Select
          {...props}
          onChange={value => form.setFieldValue(name, value)}
          value={field.value}
        >
          {props.children}
        </Select>
      )}
    </Field>
  );
};
