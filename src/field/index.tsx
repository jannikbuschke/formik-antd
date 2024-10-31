import { Field as FormikField, FastField, FieldProps } from 'formik'
import { FormikFieldProps } from '../FieldProps'
import * as React from 'react'
import { ReactNode } from 'react'

export const Field: React.FC<
  FormikFieldProps & { children: (field: FieldProps) => ReactNode }
> = ({ fast, children, ...restProps }) => {
  if (fast) {
    return <FastField {...restProps}>{children}</FastField>
  }

  return <FormikField {...restProps}>{children}</FormikField>
}

export default Field
