import * as React from 'react'
import { ButtonProps } from 'antd/lib/button'
import { ArrayButton } from '../array-button'

export function AddRowButton<T = any>({
  name,
  createNewRow,
  ...restProps
}: { name: string; createNewRow: () => T } & Omit<ButtonProps, 'onClick'>) {
  return (
    <ArrayButton
      name={name}
      {...restProps}
      onClick={(array) => array.push(createNewRow())}
    />
  )
}

export default AddRowButton
