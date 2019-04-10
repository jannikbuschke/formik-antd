import { Select } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { SelectProps } from "antd/lib/select";
import { FormikFieldProps } from "./FieldProps";

export const SelectField = (
  { name, validate, children, ...restProps }: FormikFieldProps & SelectProps<any> & { children: React.ReactNode }
) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue } }: { field: any; form: FormikProps<any> }) => (
        <Select
          onChange={v => setFieldValue(name, v)}
          value={value}
          {...restProps}
        >
          {children}
        </Select>
      )}
    </Field>
  );
};
