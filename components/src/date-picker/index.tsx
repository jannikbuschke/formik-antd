import * as React from 'react'
import { DatePicker as $DatePicker } from 'antd'
import { FieldProps } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import {
  DatePickerProps as $DatePickerProps,
  MonthPickerProps as $MonthPickerProps,
  RangePickerProps as $RangePickerProps,
  WeekPickerProps as $WeekPickerProps,
} from 'antd/es/date-picker'
import dayjs, { Dayjs } from 'dayjs'

const {
  MonthPicker: $MonthPicker,
  RangePicker: $RangePicker,
  WeekPicker: $WeekPicker,
} = $DatePicker

export function valueToDayjs(value: any) {
  return typeof value === 'string'
    ? dayjs(value)
    : typeof value === 'object'
    ? (value as Dayjs)
    : null
}

function valueArrayToDayjsArray(value: any) {
  return Array.isArray(value)
    ? value[0] && value[1]
      ? [valueToDayjs(value[0])!, valueToDayjs(value[1])!]
      : value[0]
      ? [valueToDayjs(value[0])!]
      : null
    : null
}

export type DatePickerProps = $DatePickerProps & FormikFieldProps

export const DatePicker = ({
  name,
  validate,
  onChange,
  fast,
  ...restProps
}: DatePickerProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$DatePicker
        value={valueToDayjs(value)}
        id={name}
        onChange={(date, dateString) => {
          setFieldValue(name, date ? date.toISOString() : null)
          setFieldTouched(name, true, false)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default DatePicker

DatePicker.MonthPicker = ({
  name,
  validate,
  onChange,
  ...restProps
}: MonthPickerProps) => (
  <Field name={name} validate={validate}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$MonthPicker
        value={valueToDayjs(value)}
        onChange={(date, dateString) => {
          setFieldValue(name, date ? date.toISOString() : null)
          setFieldTouched(name, true, false)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
)

DatePicker.RangePicker = ({
  name,
  validate,
  onChange,
  ...restProps
}: RangePickerProps) => (
  <Field name={name} validate={validate}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$RangePicker
        name={name}
        value={valueArrayToDayjsArray(value) as any}
        onChange={(dates, dateStrings) => {
          setFieldValue(name, dates)
          setFieldTouched(name, true, false)
          onChange && onChange(dates, dateStrings)
        }}
        {...restProps}
      />
    )}
  </Field>
)

DatePicker.WeekPicker = ({
  name,
  validate,
  onChange,
  ...restProps
}: WeekPickerProps) => (
  <Field name={name} validate={validate}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$WeekPicker
        name={name}
        value={valueToDayjs(value)}
        onChange={(date, dateString) => {
          setFieldValue(name, date)
          setFieldTouched(name, true, false)
          onChange && onChange(date, dateString)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export type WeekPickerProps = FormikFieldProps & $WeekPickerProps
export type RangePickerProps = FormikFieldProps & $RangePickerProps
export type MonthPickerProps = FormikFieldProps & $MonthPickerProps
