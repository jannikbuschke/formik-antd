import * as React from "react";
import { Field, FormikProps } from "formik";
import { Form } from "antd";

export const FormItem = (props: {
  label?: string;
  name: string;
  children: React.ReactNode;
}) => (
  <Field name={name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const { name } = field;
      const hasError = form.errors && form.errors[name] && form.touched[name];
      return (
        <Form.Item
          label={props.label}
          validateStatus={hasError ? "error" : undefined}
          hasFeedback={false}
          help={hasError ? form.errors[name] : undefined}
        >
          {props.children}
        </Form.Item>
      );
    }}
  </Field>
);
