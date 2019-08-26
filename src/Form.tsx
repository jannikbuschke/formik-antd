import * as React from "react";

import { Field, FieldProps } from "formik";
import { Form as $Form } from "antd";
import { FormProps } from "antd/lib/form";
import { FormItem } from "./form-item";

export const Form = (props: FormProps) =>
  name ? (
    <Field>
      {({ form: { handleReset, handleSubmit } }: FieldProps) => (
        <$Form onReset={handleReset} onSubmit={handleSubmit} {...props} />
      )}
    </Field>
  ) : (
    <$Form {...props} />
  );

Form.Item = FormItem;
