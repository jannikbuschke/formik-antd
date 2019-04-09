import { Button } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const SubmitButton = (
  { children, ...restProps }: ButtonProps
) => (
  <Field>
    {({ form: { handleSubmit, isSubmitting, isValid } }: { field: any; form: FormikProps<any> }) => (
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
