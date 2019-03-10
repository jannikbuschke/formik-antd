import { Select } from "antd";
import { Field, FormikProps } from "formik";
import * as React from "react";
import { SelectProps } from "antd/lib/select";

type Props = { name: string; children: any } & SelectProps<any>;

export const SelectField = (props: Props) => {
  const { name } = props;
  return (
    <Field name={name}>
      {({ field, form }: { field: any; form: FormikProps<any> }) => (
        <Select
          {...props}
          onChange={value => form.setFieldValue(name, value)}
          value={field.value}
        >
          {props.children}
        </Select>
      )}
    </Field>
  );
};
