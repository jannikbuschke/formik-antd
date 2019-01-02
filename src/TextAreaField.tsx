import { Form, Input } from "antd";
import { FormItemProps } from "antd/lib/form";
import { TextAreaProps } from "antd/lib/input";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const TextAreaField = (props: TextAreaProps & FormItemProps) => (
  <Field {...props}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const hasError = form.errors && form.errors[field.name.toLowerCase()];

      if (hasError) {
        return (
          <Form.Item
            label={props.label}
            validateStatus="error"
            hasFeedback={false}
            help={form.errors[field.name.toLowerCase()]}
          >
            <Input.TextArea {...props} {...field} />
          </Form.Item>
        );
      }
      return <Input.TextArea {...props} {...field} />;
    }}
  </Field>
);
