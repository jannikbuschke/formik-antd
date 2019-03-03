import { InputNumber } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { InputNumberProps } from "antd/lib/input-number";

export const InputNumberField = (
  props: { name: string } & InputNumberProps
) => (
  <Field {...props}>
    {({ field, form }: FieldProps) => {
      return (
        <InputNumber
          value={field.value}
          onChange={value => form.setFieldValue(props.name, value)}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
