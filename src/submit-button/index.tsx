import { Button } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export type SubmitButtonProps = ButtonProps & { onSuccess?: () => void };

export const SubmitButton = ({ children, onSuccess, ...restProps }: SubmitButtonProps) => (
  <Field>
    {({ form: { isSubmitting, isValid } }: FieldProps) => (
      <Button
        loading={isSubmitting}
        disabled={!isValid || isSubmitting}
        type="primary"
        htmlType="submit"
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);

export default SubmitButton