import * as React from "react";
import get from "lodash.get";
import { Field, FieldProps, connect } from "formik";
import { Form } from "antd";
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem";
import isSchema from "yup/lib/util/isSchema";
import reach from "yup/lib/util/reach";

export type FormItemProps = {
  showValidateSuccess?: boolean;
  children: React.ReactNode | ((props: FieldProps) => React.ReactNode);
} & { name: string } & $FormItemProps;

export const FormItem = connect<FormItemProps>(
  ({
    name,
    showValidateSuccess,
    children,
    formik,
    required,
    label,
    ...restProps
  }) => (
    <Field name={name}>
      {({ form: { errors = {}, touched = {} } }: FieldProps) => {
        const error = get(errors, name, undefined);
        const isTouched = get(touched, name, false) as boolean;
        const hasError = error !== undefined && isTouched;
        const isValid = !error && isTouched;
        if (isSchema(formik.validationSchema)) {
          label =
            label || reach(formik.validationSchema, name).describe().label;
          required =
            required ||
            reach(formik.validationSchema, name).tests.some(
              (item: any) => item.OPTIONS.name === "required"
            );
        }
        return (
          <Form.Item
            validateStatus={
              hasError
                ? "error"
                : isValid && showValidateSuccess
                ? "success"
                : undefined
            }
            label={label}
            required={required}
            hasFeedback={isValid}
            help={(hasError && <li>{error}</li>) || (isValid && "")}
            {...restProps}
          >
            {React.isValidElement(children) ? (
              React.cloneElement<any>(children, { name })
            ) : typeof children === "function" ? (
              <Field name={name}>{children}</Field>
            ) : (
              children
            )}
          </Form.Item>
        );
      }}
    </Field>
  )
);

export default FormItem;
