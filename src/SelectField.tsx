import { Select } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { SelectProps } from "antd/lib/select";
import { FormikFieldProps, IDataSourceObject } from "./FieldProps";

export const SelectField = (
  { name, validate, dataSource, children, ...restProps }: FormikFieldProps & SelectProps<any> & { dataSource?: Array<IDataSourceObject>, children?: React.ReactNode }
) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value, onBlur }, form: { setFieldValue } }: FieldProps) => (
        <Select
          name={name}
          value={value}
          onChange={v => setFieldValue(name, v)}
          onBlur={onBlur}
          {...restProps}
        >
          {Array.isArray( dataSource ) && dataSource.map( ({ value, label }: IDataSourceObject ) => (
            <Select.Option key={`option-${value}`} value={value}>{label}</Select.Option>
          ))}
          {children}
        </Select>
      )}
    </Field>
  );
};
