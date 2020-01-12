import { Button } from 'antd'
import { Field, FieldProps, FormikProps } from 'formik'
import * as React from 'react'
import { ButtonProps } from 'antd/lib/button'

export const ResetButton = ({
  children,
  onClick,
  ...restProps
}: ButtonProps) => (
  <Field>
    {({ form: { resetForm, dirty } }: FieldProps) => (
      <Button
        onClick={(event) => {
          resetForm()
          onClick && onClick(event)
        }}
        disabled={!dirty}
        type='dashed'
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
)

export default ResetButton
