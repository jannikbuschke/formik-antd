import { TimePicker as $TimePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import moment from "moment";
import { FormikFieldProps } from "./FieldProps";
import { TimePickerProps } from "antd/lib/time-picker";

export const TimePicker = ({ name, ...restProps }: FormikFieldProps & TimePickerProps) => (
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
