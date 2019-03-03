import { DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { DatePickerProps } from "antd/lib/date-picker/interface";
import * as moment from "moment";

export const DatePickerField = (
  props: {
    name: string;
  } & DatePickerProps
) => (
  <Field name={props.name}>
    {(field: FieldProps) => (
      <DatePicker
        value={moment(field.field.value)}
        onChange={date => {
          field.form.setFieldValue(props.name, date.toISOString());
        }}
        {...props}
      />
    )}
  </Field>
);
