import { Button } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const SubmitButton = ({ children, onSuccess, ...restProps }: ButtonProps & { onSuccess?: () => void }) => (
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
