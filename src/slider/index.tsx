import { Slider as $Slider } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { SliderSingleProps, SliderRangeProps } from 'antd/lib/slider'

export type SliderProps = FormikFieldProps &
  (SliderSingleProps | SliderRangeProps)

export const Slider = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: SliderProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Slider
        value={value}
        id={name}
        onChange={(value: any) => {
          setFieldValue(name, value != null ? value.valueOf() : value)
          setFieldTouched(name, true, false)
          onChange && onChange(value)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Slider
