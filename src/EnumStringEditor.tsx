import { Radio } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { RadioGroupProps } from "antd/lib/radio/interface";
import { FormikFieldProps, IDataSourceObject } from "./FieldProps";

export const EnumStringEditor = (
  { name, validate, dataSource, ...restProps }: FormikFieldProps & RadioGroupProps & { dataSource: Array<IDataSourceObject> }
) => (
  <Field name={name} validate={validate}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => (
        <Radio.Group {...restProps}>
          {dataSource.map(({ value, label }: IDataSourceObject ) => (
            <Radio key={value} value={value}>
              {label}
            </Radio>
          ))}
        </Radio.Group>
    )}
  </Field>
);
