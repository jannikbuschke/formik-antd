import { DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { DatePickerProps } from "antd/lib/date-picker/interface";
import moment from "moment";
import { FormikFieldProps } from "./FieldProps";

export const DatePickerField = (
  { name, validate, ...restProps }: FormikFieldProps & DatePickerProps
) => (
  <Field name={name} validate={validate}>
    {({ field: { name: fieldName, value }, form: { setFieldValue } }: FieldProps) => (
      <DatePicker
        value={value ? moment(value) : undefined}
        onChange={date => {
          setFieldValue(fieldName, date ? date.toISOString() : null);
        }}
        {...restProps}
      />
    )}
  </Field>
);
