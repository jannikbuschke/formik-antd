import * as React from "react";
import { DatePicker as $DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import { DatePickerProps as $DatePickerProps, MonthPickerProps as $MonthPickerProps } from "antd/lib/date-picker/interface";
import moment from "moment";
import { FormikFieldProps } from "./FieldProps";

const { MonthPicker: $MonthPicker, RangePicker: $RangePicker, WeekPicker: $WeekPicker } = $DatePicker;


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

export type MonthPickerProps = FormikFieldProps & $MonthPickerProps;

DatePicker.MonthPicker = ({ name, validate, ...restProps }: MonthPickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$MonthPicker
        value={value ? moment(value) : undefined}
        onChange={date => setFieldValue(name, date ? date.toISOString() : null)}
        {...restProps}
      />
    )}
  </Field>
);