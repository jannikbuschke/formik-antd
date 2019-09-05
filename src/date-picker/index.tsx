import * as React from "react";
import { DatePicker as $DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import {
  DatePickerProps as $DatePickerProps,
  MonthPickerProps as $MonthPickerProps,
  RangePickerProps as $RangePickerProps,
  WeekPickerProps as $WeekPickerProps,
} from "antd/lib/date-picker/interface";
import moment from "moment";
import { FormikFieldProps } from "../FieldProps";

const { MonthPicker: $MonthPicker, RangePicker: $RangePicker, WeekPicker: $WeekPicker, } = $DatePicker;

export type DatePickerProps = FormikFieldProps & $DatePickerProps;

export const DatePicker = ({ name, validate, onChange, ...restProps }: DatePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$DatePicker
        value={value ? moment(value) : undefined}
        onChange={(date, dateString) => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default DatePicker

export type MonthPickerProps = FormikFieldProps & $MonthPickerProps;

DatePicker.MonthPicker = ({ name, validate, onChange, ...restProps }: MonthPickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$MonthPicker
        value={value ? moment(value) : undefined}
        onChange={(date, dateString) => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type RangePickerProps = FormikFieldProps & $RangePickerProps;

DatePicker.RangePicker = ({ name, validate, onChange, ...restProps }: RangePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$RangePicker
        name={name}
        value={value}
        onChange={(dates, dateStrings) => {
          setFieldValue(name, dates);
          setFieldTouched(name, true)
          onChange && onChange(dates, dateStrings)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type WeekPickerProps = FormikFieldProps & $WeekPickerProps;

DatePicker.WeekPicker = ({ name, validate, onChange, ...restProps }: WeekPickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$WeekPicker
        name={name}
        value={value}
        onChange={(date, dateString) => {
          setFieldValue(name, date);
          setFieldTouched(name, true)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
);