import { Button } from 'antd'
import { Field, FieldProps, FormikProps } from 'formik'
import * as React from 'react'
import { ButtonProps } from 'antd/lib/button'

export const SubmitButton = ({ children, ...restProps }: ButtonProps) => (
  <Field>
    {({ form }: FieldProps) => (
      <Button
        loading={form.isSubmitting}
        type='primary'
        htmlType='submit'
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
)

export default SubmitButton
