import { TreeSelect as $TreeSelect } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { TreeSelectProps as $TreeSelectProps } from 'antd/es/tree-select'
import { BaseOptionType, DefaultOptionType } from 'antd/es/select'

export type TreeSelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> = FormikFieldProps &
  $TreeSelectProps<ValueType, OptionType> & { children?: React.ReactNode }

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
        id={name}
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