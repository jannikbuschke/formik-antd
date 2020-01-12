import * as React from 'react'
import { ButtonProps } from 'antd/lib/button'
import { ArrayButton } from '../array-button'

export function RemoveRowButton({
  name,
  index,
  ...restProps
}: { name: string; index: number } & Omit<ButtonProps, 'onClick'>) {
  return (
    <ArrayButton
      name={name}
      {...restProps}
      onClick={(array) => array.remove(index)}
    />
  )
}

export default RemoveRowButton
