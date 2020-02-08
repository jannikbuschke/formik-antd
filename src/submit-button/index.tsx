import { Button } from 'antd'
import { Field, FieldProps, FormikProps } from 'formik'
import * as React from 'react'
import { ButtonProps } from 'antd/lib/button'

export const SubmitButton = ({ children, ...restProps }: ButtonProps) => (
  <Field>
    {({ form: { isSubmitting, isValid, dirty } }: FieldProps) => (
      <Button
        loading={isSubmitting}
        type='primary'
        htmlType='submit'
        disabled={!(isValid || dirty)}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
)

export default SubmitButton
