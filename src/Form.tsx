import * as React from "react";

import { Field, FieldProps } from "formik";
import { Form as AntdForm } from "antd";
import { FormProps } from "antd/lib/form";
import { FormItem } from './FormItem';

export function Form(props: FormProps) {
  return <Field>
    {({ form: { handleReset, handleSubmit } }: FieldProps) => (
      <AntdForm onReset={handleReset} onSubmit={handleSubmit} {...props} />
    )}
  </Field>
}

Form.Item = FormItem;