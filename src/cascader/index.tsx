import * as React from 'react'
import { Cascader as $Cascader } from 'antd'
import { FieldProps } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import {
  BaseOptionType,
  CascaderProps as $CascaderProps,
  DefaultOptionType,
} from 'antd/es/cascader'

export type CascaderProps<OptionType> = FormikFieldProps &
  $CascaderProps<OptionType>

export const Cascader = <
  OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType,
>(
  props: CascaderProps<OptionType>,
) => {
  const { name, validate, fast, onChange, ...restProps } = props
  return (
    <Field name={name} validate={validate} fast={fast}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched },
      }: FieldProps) => (
        <$Cascader<OptionType>
          value={value}
          id={name}
          onChange={(value, e) => {
            setFieldValue(name, value)
            setFieldTouched(name, true, false)
            onChange && onChange(value as any, e as any)
          }}
          {...(restProps as any)}
        />
      )}
    </Field>
  )
}

export default Cascader
