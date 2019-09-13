import * as React from "react";

import { Field, FieldProps } from "formik";
import { Form as $Form } from "antd";
import { FormProps } from "antd/lib/form";
import { FormItem } from '../form-item';

export function Form(props: FormProps) {
  return (<Field>
    {({ form: { handleReset, handleSubmit } }: FieldProps) => (
      <$Form onReset={handleReset} onSubmit={handleSubmit} {...props} />
    )}
  </Field>)
};

Form.Item = FormItem;

export default Form