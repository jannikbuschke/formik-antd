import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { Table as $Table } from 'antd'
import { TableProps as $TableProps } from 'antd/es/table/Table'
import { FormikFieldProps } from '../FieldProps'

// RecordType extends object = any>(props: TableProps<RecordType>

// declare function Table<RecordType extends object = any>(props: TableProps<RecordType>): JSX.Element;

export type TableProps<RecordType> = FormikFieldProps & $TableProps<RecordType>

export function Table<RecordType extends object = any>({
  name,
  ...restProps
}: TableProps<RecordType>) {
  return (
    <Field name={name}>
      {({ field }: FieldProps<any>) => {
        return <$Table dataSource={field.value || []} {...restProps} />
      }}
    </Field>
  )
}

export default Table
