import { InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";

export const InputNumberField = (props: any) => (
  <Field {...props}>
    {(p: FieldProps) => {
      return (
        <InputNumber
          {...props}
          {...p.field}
          onChange={
            // tslint:disable-next-line:jsx-no-lambda
            value => p.form.setFieldValue(props.name, value)
          }
        />
      );
    }}
  </Field>
);
