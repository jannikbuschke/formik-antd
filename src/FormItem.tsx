import * as React from "react";
import { Field, FormikProps } from "formik";
import { Form } from "antd";

export const FormItem = (props: {
  label: string;
  name: string;
  children: any;
}) => (
  <Field {...props}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const hasError = form.errors && form.errors[field.name.toLowerCase()];
      return (
        <Form.Item
          label={props.label}
          validateStatus={hasError ? "error" : undefined}
          hasFeedback={false}
          help={hasError ? form.errors[field.name.toLowerCase()] : undefined}
        >
          {props.children}
        </Form.Item>
      );
    }}
  </Field>
);
