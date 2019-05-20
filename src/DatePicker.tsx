import * as React from "react";
import { DatePicker as $DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import { DatePickerProps as $DatePickerProps } from "antd/lib/date-picker/interface";
import moment from "moment";
import { FormikFieldProps } from "./FieldProps";

export type DatePickerProps = FormikFieldProps & $DatePickerProps;

export const DatePicker = ({ name, validate, ...restProps }: DatePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$DatePicker
        value={value ? moment(value) : undefined}
        onChange={date => setFieldValue(name, date ? date.toISOString() : null)}
        {...restProps}
      />
    )}
  </Field>
);
