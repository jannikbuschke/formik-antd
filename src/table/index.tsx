import {  Field, FieldProps } from 'formik';
import * as React from 'react';
import { Table as $Table } from 'antd';
import { TableProps, WithStore } from 'antd/lib/table';

export function Table<T = any>({
  name,
  ...restProps
}: { name: string } & Omit<TableProps<T>, keyof WithStore>) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps<any>) => {
        return (
            <$Table dataSource={field.value || []} {...restProps} />
        );
      }}
    </Field>
  );
}

export default Table