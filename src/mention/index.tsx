import { Mention as $Mention } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import { MentionProps as $MentionProps } from 'antd/lib/mention'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'

const { toContentState, toString } = $Mention

export type MentionProps = FormikFieldProps & $MentionProps

export const Mention = ({
  name,
  validate,
  fastMode,
  onChange,
  onBlur,
  ...restProps
}: MentionProps) => {
  return (
    <Field name={name} validate={validate} fastMode={fastMode}>
      {({
        field: { value },
        form: { setFieldValue, setFieldTouched },
      }: FieldProps) => (
        <Internal
          name={name}
          value={value}
          onChange={(value) => {
            setFieldValue(name, value)
            onChange && onChange(value)
          }}
          onBlur={(event) => {
            setFieldTouched(name)
            onBlur && onBlur(event)
          }}
          {...restProps}
        />
      )}
    </Field>
  )
}
export default Mention

type InternalProps = { value: any; onChange: (v: string) => void } & Pick<
  MentionProps,
  Exclude<keyof MentionProps, 'onChange'>
>

const Internal = ({ value, onChange, onBlur, ...restProps }: InternalProps) => {
  const [editorState, setEditorState] = React.useState(
    toContentState(value || ''),
  )
  return (
    <$Mention
      value={editorState}
      onChange={(v) => {
        setEditorState(v)
        onChange(toString(v))
      }}
      {...restProps}
    />
  )
}
