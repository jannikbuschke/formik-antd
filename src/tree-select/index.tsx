import { TreeSelect as $TreeSelect } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { TreeSelectProps as $TreeSelectProps } from 'antd/lib/tree-select'

export type TreeSelectProps = FormikFieldProps &
  $TreeSelectProps<any> & { children?: React.ReactNode }

export const TreeSelect = ({
  name,
  validate,
  fast,
  onChange,
  onBlur,
  ...restProps
}: TreeSelectProps) => (
  <Field name={name} validate={validate} fast={fast}>
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
