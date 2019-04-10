import { Button } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const ResetButton = (
  { children, ...restProps }: ButtonProps
) => (
  <Field>
    {({ form: { resetForm, isValid } }: FieldProps) => (
      <Button
        onClick={() => resetForm()}
        disabled={!isValid}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);
