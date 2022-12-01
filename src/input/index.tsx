import { Input as $Input } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import {
  InputProps as $InputProps,
  InputRef,
  PasswordProps as $PasswordProps,
  TextAreaProps as $TextAreaProps,
} from 'antd/es/input'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { TextAreaRef } from 'antd/es/input/TextArea'

export type InputProps = FormikFieldProps & $InputProps

export interface InputType
  extends React.ForwardRefExoticComponent<
    FormikFieldProps & $InputProps & React.RefAttributes<InputRef>
  > {
  Password: React.ForwardRefExoticComponent<
    FormikFieldProps & $PasswordProps & React.RefAttributes<unknown>
  >
  TextArea: React.ForwardRefExoticComponent<
    FormikFieldProps & $TextAreaProps & React.RefAttributes<TextAreaRef>
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
    ref: React.Ref<InputRef>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input
          ref={ref}
          name={name}
          id={name}
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

const TypedInput = Input as unknown as InputType

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
    ref: React.Ref<InputRef>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input.Password
          ref={ref}
          name={name}
          id={name}
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
    ref: React.Ref<TextAreaRef>,
  ) => (
    <Field name={name} validate={validate} fast={fast}>
      {({ field: { value, onChange, onBlur } }: FieldProps) => (
        <$Input.TextArea
          ref={ref}
          name={name}
          id={name}
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
