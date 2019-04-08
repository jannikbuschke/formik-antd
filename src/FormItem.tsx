import * as React from "react";
import get from "lodash.get";
import { Field, FormikProps } from "formik";
import { Form } from "antd";
import { FormItemProps } from "antd/lib/form/FormItem";

export const FormItem = (
  { name, label, children, ...restProps } : { name: string; children: React.ReactNode } & FormItemProps
) => (
  <Field name={name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      const { name: fieldName } = field;
      const { errors = {}, touched = {} } = form;
      const error = get( errors, fieldName, undefined );
      const isTouched = get( touched, fieldName, false );
      const hasError = error !== undefined && isTouched;
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
