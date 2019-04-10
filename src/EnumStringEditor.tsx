import { Radio } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps, IDataSourceObject } from "./FieldProps";

export const EnumStringEditor = ({
  name,
  validate,
  dataSource,
  children,
  ...restProps
}: FormikFieldProps &
  RadioGroupProps & {
    dataSource?: Array<IDataSourceObject>;
    children?: React.ReactNode;
  }) => (
  <Field name={name} validate={validate}>
    {({ field, form }: FieldProps) => (
      <Radio.Group {...restProps}>
        {Array.isArray(dataSource) &&
          dataSource.map(({ value, label }: IDataSourceObject) => (
            <Radio key={`radio-${value}`} value={value}>
              {label}
            </Radio>
          ))}
        {children}
      </Radio.Group>
    )}
  </Field>
);
