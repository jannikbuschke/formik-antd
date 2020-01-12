import { FieldArray, FieldArrayRenderProps } from 'formik'
import * as React from 'react'
import Button, { ButtonProps } from 'antd/lib/button'

export function ArrayButton({
  name,
  onClick,
  ...restProps
}: {
  name: string
  onClick: (arrayProps: FieldArrayRenderProps) => void
} & Omit<ButtonProps, 'onClick'>) {
  return (
    <FieldArray name={name}>
      {(array) => <Button {...restProps} onClick={() => onClick(array)} />}
    </FieldArray>
  )
}

export default ArrayButton
