import * as React from "react";
import get from "lodash.get";
import { Field, FieldProps } from "formik";
import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

export const FormItem = ({
  name,
  label,
  children,
  ...restProps
}: { name: string; children: React.ReactNode } & FormItemProps) => (
  <Field name={name}>
    {({ form: { errors = {} } }: FieldProps) => {
      const error = get(errors, name, undefined);
      const hasError = error !== undefined;
      return (
        <Form.Item
          label={label}
          validateStatus={hasError ? "error" : undefined}
          hasFeedback={false}
          help={hasError && <li>{error}</li>}
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);
