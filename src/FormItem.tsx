import * as React from "react";
import { Field, FormikProps } from "formik";
import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

export const FormItem = (
  props: { name: string; children: React.ReactNode } & FormItemProps
) => (
  <Field name={name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const { name } = field;
      const hasError = form.errors && form.errors[name] && form.touched[name];
      return (
        <Form.Item
          label={props.label}
          validateStatus={hasError ? "error" : undefined}
          hasFeedback={false}
          help={
            hasError
              ? (form.errors[name] as any).map((error: string) => (
                  <li>{error}</li>
                ))
              : undefined
          }
          {...props}
        >
          {props.children}
        </Form.Item>
      );
    }}
  </Field>
);
