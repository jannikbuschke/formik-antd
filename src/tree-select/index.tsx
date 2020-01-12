import { TreeSelect as $TreeSelect } from 'antd'
import { Field, FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import { TreeSelectProps as $TreeSelectProps } from 'antd/lib/tree-select'

export type TreeSelectProps = FormikFieldProps &
  $TreeSelectProps<any> & { children?: React.ReactNode }

export const TreeSelect = ({
  name,
  validate,
  onChange,
  onBlur,
  ...restProps
}: TreeSelectProps) => (
  <Field name={name} validate={validate}>
    {({ field: { value }, form }: FieldProps) => (
      <$TreeSelect
        value={value}
        onBlur={(event) => {
          form.setFieldTouched(name)
          onBlur && onBlur(event)
        }}
        onChange={(value, node, extra) => {
          form.setFieldValue(name, value)
          onChange && onChange(value, node, extra)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default TreeSelect

TreeSelect.TreeNode = $TreeSelect.TreeNode
