import { TreeSelect as $TreeSelect } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { FormikFieldProps } from "./FieldProps";
import { TreeSelectProps as $TreeSelectProps } from "antd/lib/tree-select";

export type TreeSelectProps = FormikFieldProps & $TreeSelectProps & { children: React.ReactNode };

export const TreeSelect = ({ name, validate, ...restProps }: TreeSelectProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form }: FieldProps) => (
      <$TreeSelect
        value={value}
        onChange={e => form.setFieldValue(name, e.valueOf())}
        onBlur={e => form.setFieldTouched(name)}
        {...restProps}
      />
    )}
  </Field>
);
