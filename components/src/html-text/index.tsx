import { Field, FieldProps } from 'formik'
import * as React from 'react'

export const HtmlText = (props: { name: string }) => (
  <Field {...props}>{({ field }: FieldProps) => field.value}</Field>
)

export default HtmlText
