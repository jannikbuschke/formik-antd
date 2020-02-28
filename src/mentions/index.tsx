import { Mentions as $Mentions } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { MentionProps as $MentionProps } from 'antd/lib/mentions'

export type MentionProps = FormikFieldProps & $MentionProps

export const Mentions = ({
  name,
  validate,
  fast,
  onChange: $onChange,
  onBlur: $onBlur,
  ...restProps
}: MentionProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({ field: { value, onChange, onBlur }, form }: FieldProps) => (
      <$Mentions
        name={name}
        value={value}
        onChange={(event) => {
          form.setFieldValue(name, event)
          $onChange && $onChange(event)
        }}
        onBlur={(e) => {
          onBlur(name)
          $onBlur && $onBlur(e)
        }}
        // onBlur={(event) => {
        //   onBlur(event)
        //   $onBlur && $onBlur(event)
        // }}
        {...restProps}
      />
    )}
  </Field>
)

Mentions.Option = $Mentions.Option

export default Mentions
