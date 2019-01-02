import { DatePicker } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";

export const DateEditor = (props: any) => (
  <Field {...props}>
    {(p: FieldProps) => (
      <DatePicker
        value={p.field.value}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={date => {
          p.form.setFieldValue(props.name, date);
        }}
      />
    )}
  </Field>
);
