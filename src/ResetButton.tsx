import { Button } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const ResetButton = (props: ButtonProps) => (
  <Field>
    {({ form }: { field: any; form: FormikProps<any> }) => (
      <Button
        onClick={() => form.resetForm()}
        disabled={!form.isValid}
        {...props}
      />
    )}
  </Field>
);
