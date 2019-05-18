import { Transfer as $Transfer } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { TransferProps as $TransferProps } from "antd/lib/transfer";

export type TransferProps = FormikFieldProps & $TransferProps;

export const Transfer = ({ name, ...restProps }: TransferProps) => (
  <Field name={name}>
    {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
      <$Transfer
        targetKeys={value || []}
        onChange={v => {
          setFieldValue(name, v)
        }}
        {...restProps}
      />
    )}
  </Field>
);
