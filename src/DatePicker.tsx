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
import { FormikFieldProps } from "./FieldProps";

const { MonthPicker: $MonthPicker, RangePicker: $RangePicker, WeekPicker: $WeekPicker, } = $DatePicker;

export type DatePickerProps = FormikFieldProps & $DatePickerProps;

export const DatePicker = ({ name, validate, ...restProps }: DatePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$DatePicker
        value={value ? moment(value) : undefined}
        onChange={date => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type MonthPickerProps = FormikFieldProps & $MonthPickerProps;

DatePicker.MonthPicker = ({ name, validate, ...restProps }: MonthPickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$MonthPicker
        value={value ? moment(value) : undefined}
        onChange={date => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type RangePickerProps = FormikFieldProps & $RangePickerProps;

DatePicker.RangePicker = ({ name, validate, ...restProps }: RangePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$RangePicker
        name={name}
        value={value}
        onChange={value => {
          setFieldValue(name, value);
          setFieldTouched(name, true)
        }}
        {...restProps}
      />
    )}
  </Field>
);

export type WeekPickerProps = FormikFieldProps & $WeekPickerProps;

DatePicker.WeekPicker = ({ name, validate, ...restProps }: WeekPickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$WeekPicker
        name={name}
        value={value}
        onChange={value => {
          setFieldValue(name, value);
          setFieldTouched(name, true)
        }}
        {...restProps}
      />
    )}
  </Field>
);