import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'
import { Table } from '../table'

export default {
  title: 'Array/RemoveRowButton',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate
    initialValues={{ value: [{ label: 'item1' }, { label: 'item2' }] }}
  >
    <div>
      <Table<{ label: string }>
        name='value'
        columns={[
          {
            title: 'Label',
            render: (value, record) => <div>{record.label}</div>,
          },
        ]}
      />
      <Component name='value' index={0}>
        Remove item at position 0
      </Component>
    </div>
  </StoryTemplate>
)
