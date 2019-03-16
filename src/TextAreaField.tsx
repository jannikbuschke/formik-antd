import { Input } from "antd";
import { TextAreaProps } from "antd/lib/input";
import { Field, FieldProps } from "formik";
import * as React from "react";

export const TextAreaField = (props: TextAreaProps & { name: string }) => (
  <Field name={props.name}>
    {({ field }: FieldProps) => {
      return (
        <Input.TextArea
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
      );
    }}
  </Field>
);
