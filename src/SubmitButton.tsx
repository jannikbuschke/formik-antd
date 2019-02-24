import { Button } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const SubmitButton = (props: ButtonProps) => (
  <Field>
    {({ form }: { field: any; form: FormikProps<any> }) => (
      <Button
        onClick={() => form.handleSubmit()}
        loading={form.isSubmitting}
        disabled={!form.isValid}
        {...props}
      />
    )}
  </Field>
);
