import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { Table as $Table } from 'antd'
import { TableProps } from 'antd/lib/table/Table'
// import { TableProps, WithStore } from 'antd/lib/table';

// RecordType extends object = any>(props: TableProps<RecordType>

// declare function Table<RecordType extends object = any>(props: TableProps<RecordType>): JSX.Element;

export function Table<RecordType extends object = any>({
  name,
  ...restProps
}: { name: string } & TableProps<RecordType>) {
  return (
    <Field name={name}>
      {({ field }: FieldProps<any>) => {
        return <$Table dataSource={field.value || []} {...restProps} />
      }}
    </Field>
  )
}

export default Table
