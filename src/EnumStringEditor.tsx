import { Radio } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";

export const EnumStringEditor = (props: any) => (
  <Field {...props}>
    {({ field, form }: { field: any; form: FormikProps<any> }) => {
      return (
        <Radio.Group {...field}>
          {props.dataSource.map((item: any) => (
            <Radio key={item.value} value={item.value}>
              {item.displayName}
            </Radio>
          ))}
        </Radio.Group>
      );
    }}
  </Field>
);
