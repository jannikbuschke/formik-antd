import { Button } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const ResetButton = (
  { children, ...restProps }: ButtonProps
) => (
  <Field>
    {({ form: { resetForm, isValid } }: { field: any; form: FormikProps<any> }) => (
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
