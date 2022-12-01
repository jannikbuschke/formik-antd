import * as React from 'react'
import { Cascader as $Cascader } from 'antd'
import { FieldProps, useField } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import {
  BaseOptionType,
  CascaderProps as $CascaderProps,
  CascaderRef,
  DefaultOptionType,
} from 'antd/es/cascader'

// type CascaderType = <
//   OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType,
// >(
//   props: React.PropsWithChildren<$CascaderProps<OptionType>> & {
//     ref?: React.Ref<CascaderRef> | undefined
//   } & FormikFieldProps,
// ) => React.ReactElement

// export type CascaderProps<T> = FormikFieldProps & $CascaderProps<T>

export const Cascader = <
  OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<$CascaderProps<OptionType>> & {
    ref?: React.Ref<CascaderRef> | undefined
  } & FormikFieldProps,
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
            // onChange && onChange(value, e)
          }}
          // {...restProps}
        />
      )}
    </Field>
  )
}

export default Cascader
