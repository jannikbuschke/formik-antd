import { Rate as $Rate } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { RateProps as $RateProps } from 'antd/lib/rate'

export type RateProps = FormikFieldProps & $RateProps

export const Rate = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: RateProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$Rate
        value={value}
        onChange={(value) => {
          setFieldValue(name, value != null ? value.valueOf() : value)
          setFieldTouched(name, true)
          onChange && onChange(value)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default Rate
