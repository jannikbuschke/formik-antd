import { Button } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const SubmitButton = (
  { children, ...restProps }: ButtonProps
) => (
  <Field>
    {({ form: { handleSubmit, isSubmitting, isValid } }: FieldProps) => (
      <Button
        onClick={() => handleSubmit()}
        loading={isSubmitting}
        disabled={!isValid}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);
