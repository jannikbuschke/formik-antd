import { TimePicker as $TimePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import moment from "moment";
import { FormikFieldProps } from "./FieldProps";
import { TimePickerProps as $TimePickerProps } from "antd/lib/time-picker";

export type TimePickerProps = FormikFieldProps & $TimePickerProps;

export const TimePicker = ({ name, ...restProps }: TimePickerProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$TimePicker
        value={value ? moment(value) : undefined}
        onChange={date => setFieldValue(name, date ? date.toISOString() : null)}
        {...restProps}
      />
    )}
  </Field>
);
