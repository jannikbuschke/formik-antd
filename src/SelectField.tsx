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
      {({ field: { name: fieldName, value: fieldValue }, form: { setFieldValue } }: { field: any; form: FormikProps<any> }) => (
        <Select
          onChange={value => setFieldValue(fieldName, value)}
          value={fieldValue}
          {...restProps}
        >
          {children}
        </Select>
      )}
    </Field>
  );
};
