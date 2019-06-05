import * as React from "react";
import get from "lodash.get";
import { Field, FieldProps } from "formik";
import { Form } from "antd";
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem";
import { FormikFieldProps } from "./FieldProps";

export type FormItemProps = { showValidateSuccess?: boolean; children: React.ReactNode } & FormikFieldProps & $FormItemProps;

export const FormItem = ({ name, showValidateSuccess, validate, children, ...restProps }: FormItemProps) => (
  <Field name={name} validate={validate}>
    {({ form: { errors = {}, touched = {} } }: FieldProps) => {
      const error = get(errors, name, undefined);
      const isTouched = get(touched, name, false) as boolean;
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
