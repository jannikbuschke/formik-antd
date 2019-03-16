import { DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { DatePickerProps } from "antd/lib/date-picker/interface";
import moment from "moment";

export const DatePickerField = (
  props: {
    name: string;
  } & DatePickerProps
) => (
  <Field name={props.name}>
    {({ field, form }: FieldProps) => (
      <DatePicker
        value={field.value ? moment(field.value) : undefined}
        onChange={date => {
          form.setFieldValue(props.name, date ? date.toISOString() : null);
        }}
        {...props}
      />
    )}
  </Field>
);
