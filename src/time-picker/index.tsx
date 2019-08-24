import { TimePicker as $TimePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import moment from "moment";
import { FormikFieldProps } from "../FieldProps";
import { TimePickerProps as $TimePickerProps } from "antd/lib/time-picker";

export type TimePickerProps = FormikFieldProps & $TimePickerProps;

export const TimePicker = ({ name, validate, ...restProps }: TimePickerProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
      <$TimePicker
        value={value ? moment(value) : undefined}
        onChange={date => {
          setFieldValue(name, date ? date.toISOString() : null);
          setFieldTouched(name, true);
        }}
        {...restProps}
      />
    )}
  </Field>
);

export default TimePicker