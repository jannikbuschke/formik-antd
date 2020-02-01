import { Input as $Input } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import {
  InputProps as $InputProps,
  PasswordProps as $PasswordProps,
  TextAreaProps as $TextAreaProps,
} from 'antd/lib/input'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import TextArea from 'antd/lib/input/TextArea'
import Password from 'antd/lib/input/Password'

export type InputProps = FormikFieldProps & $InputProps

interface InputType
  extends React.ForwardRefExoticComponent<
    FormikFieldProps & $InputProps & React.RefAttributes<$Input>
  > {
  Password: React.ForwardRefExoticComponent<
    FormikFieldProps & $PasswordProps & React.RefAttributes<Password>
  >
  TextArea: React.ForwardRefExoticComponent<
    FormikFieldProps & $TextAreaProps & React.RefAttributes<TextArea>
  >
}

const Input = React.forwardRef(
  (
    {
      name,
      validate,
      fast,
      onChange: $onChange,
      onBlur: $onBlur,
      ...restProps
    }: InputProps,
    ref: React.Ref<$Input>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input
          ref={ref}
          name={name}
          value={value}
          onChange={(event) => {
            onChange(event)
            $onChange && $onChange(event)
          }}
          onBlur={(event) => {
            onBlur(event)
            $onBlur && $onBlur(event)
          }}
          {...restProps}
        />
      )}
    </Field>
  ),
)

const TypedInput = (Input as unknown) as InputType

TypedInput.Password = React.forwardRef(
  (
    {
      name,
      validate,
      fast,
      onChange: $onChange,
      onBlur: $onBlur,
      ...restProps
    }: PasswordProps,
    ref: React.Ref<Password>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input.Password
          ref={ref}
          name={name}
          value={value}
          onChange={(event) => {
            onChange(event)
            $onChange && $onChange(event)
          }}
          onBlur={(event) => {
            onBlur(event)
            $onBlur && $onBlur(event)
          }}
          {...restProps}
        />
      )}
    </Field>
  ),
)

TypedInput.TextArea = React.forwardRef(
  (
    {
      name,
      validate,
      fast,
      onChange: $onChange,
      onBlur: $onBlur,
      ...restProps
    }: TextAreaProps,
    ref: React.Ref<TextArea>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input.TextArea
          ref={ref}
          name={name}
          value={value}
          onChange={(event) => {
            onChange(event)
            $onChange && $onChange(event)
          }}
          onBlur={(event) => {
            onBlur(event)
            $onBlur && $onBlur(event)
          }}
          {...restProps}
        />
      )}
    </Field>
  ),
)

export type PasswordProps = FormikFieldProps & $PasswordProps

export type TextAreaProps = FormikFieldProps & $TextAreaProps

export { TypedInput as Input }
export default TypedInput
