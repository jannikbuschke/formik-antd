import { Button } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { ButtonProps } from "antd/lib/button";

export const SubmitButton = ({
  children,
  onSuccess,
  ...restProps
}: ButtonProps & { onSuccess?: () => void }) => (
  <Field>
    {({
      form: { handleSubmit, isSubmitting, isValid, setSubmitting }
    }: FieldProps) => (
      <Button
        onClick={async () => {
          setSubmitting(true);
          await handleSubmit();
          setSubmitting(false);
          if (onSuccess) {
            onSuccess();
          }
        }}
        loading={isSubmitting}
        disabled={!isValid}
        type="primary"
        htmlType="submit"
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
);
