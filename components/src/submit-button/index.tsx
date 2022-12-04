import { Button } from 'antd'
import { Field, FieldProps, FormikProps } from 'formik'
import * as React from 'react'
import { ButtonProps } from 'antd/es/button'

export const SubmitButton = ({ children, ...restProps }: ButtonProps) => (
  <Field>
    {({ form: { isSubmitting, isValid, dirty, submitCount } }: FieldProps) => (
      <Button
        loading={isSubmitting}
        type='primary'
        htmlType='submit'
        disabled={!isValid && (dirty || submitCount > 0)}
        {...restProps}
      >
        {children}
      </Button>
    )}
  </Field>
)

export default SubmitButton
