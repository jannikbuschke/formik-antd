import * as React from "react";
import { Field, FieldProps, getIn, FieldConfig } from "formik";
import { Form } from "antd";
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem";
export type FormItemProps = {
  showValidateSuccess?: boolean;
  children: React.ReactNode;
} & { name: string } & $FormItemProps &
  Pick<FieldConfig, "validate">;

export const FormItem = ({
  name,
  showValidateSuccess,
  children,
  validate,
  ...restProps
}: FormItemProps) => (
  <Field name={name} validate={validate}>
    {({ form: { errors = {}, touched = {} } }: FieldProps) => {
      const error = getIn(errors, name, undefined);
      let isTouched = getIn(touched, name, false) as boolean | boolean[];
      if (Array.isArray(isTouched)) {
        isTouched = isTouched.reduce((acc, value) => acc || value, false);
      }
      const hasError = error !== undefined && isTouched;
      const isValid = !error && isTouched;
      return (
        <Form.Item
          validateStatus={
            hasError
              ? "error"
              : isValid && showValidateSuccess
              ? "success"
              : undefined
          }
          hasFeedback={isValid}
          help={(hasError && <li>{error}</li>) || (isValid && "")}
          {...restProps}
        >
          {children}
        </Form.Item>
      );
    }}
  </Field>
);

export default FormItem;
