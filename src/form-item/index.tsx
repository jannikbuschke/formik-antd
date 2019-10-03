import * as React from "react";
import get from "lodash.get";
import { Field, FieldProps } from "formik";
import { Form } from "antd";
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem";

export type FormItemProps = { showValidateSuccess?: boolean; children: React.ReactNode } & { name: string } & $FormItemProps;

export const FormItem = ({ name, showValidateSuccess, children, ...restProps }: FormItemProps) => (
  <Field name={name}>
    {({ form: { errors = {}, touched = {} } }: FieldProps) => {
      const error = get(errors, name, undefined);
      let isTouched = get(touched, name, false) as boolean | boolean[];
      if (Array.isArray(isTouched)) {
        isTouched = isTouched.reduce((acc, value) => acc || value);
      }
      const hasError = error !== undefined && isTouched;
      const isValid = !error && isTouched;
      return (
        <Form.Item
          validateStatus={hasError ? "error" : (isValid && showValidateSuccess) ? "success" : undefined}
          hasFeedback={isValid}
          help={(hasError && <li>{error}</li>) || (isValid && "")}
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field >);

export default FormItem