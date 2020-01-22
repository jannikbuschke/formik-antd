import { Field as FormikField, FastField } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import * as React from 'react'

export const Field: React.FC<FormikFieldProps> = ({
  fast,
  children,
  ...restProps
}) => {
  if (fast) {
    return <FastField {...restProps}>{children}</FastField>
  }

  return <FormikField {...restProps}>{children}</FormikField>
}

export default Field
