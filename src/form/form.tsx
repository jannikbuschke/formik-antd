import * as React from 'react'

import { Field, FieldProps } from 'formik'
import { Form as $Form } from 'antd'
import { FormItem } from '../form-item'
import { FormProps } from 'antd/lib/form/Form'

export function Form(props: FormProps) {
  return (
    <Field>
      {({ form: { handleReset, handleSubmit } }: FieldProps) => (
        <$Form
          onReset={handleReset}
          onSubmitCapture={handleSubmit}
          {...props}
        />
      )}
    </Field>
  )
}

Form.Item = FormItem

export default Form
