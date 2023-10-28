import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'
import RemoveRowButton from '../remove-row-button'
import AddRowButton from '../add-row-button'
import Input from '../input'

export default {
  title: 'Array/Table',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate
    initialValues={{
      value: [
        { id: '1', label: 'item 1' },
        { id: '2', label: 'item 2' },
        { id: '3', label: 'item 3' },
      ],
    }}
  >
    <div>
      <Component<{ id: string; label: string }>
        name='value'
        pagination={false}
        columns={[
          {
            title: 'Id',
            key: 'id',
            render: (_, record) => record.id,
          },
          {
            title: 'Label',
            key: 'label',
            render: (_, record, i) => <Input name={`value.${i}.label`} />,
          },
          {
            title: 'actions',
            render: (_, record, i) => (
              <RemoveRowButton name='value' index={i}>
                Delete row
              </RemoveRowButton>
            ),
          },
        ]}
      />
      <AddRowButton
        name='value'
        createNewRow={() => {
          const id = Math.random()
          return { id, label: 'item ' + id }
        }}
      >
        Add row
      </AddRowButton>
    </div>
  </StoryTemplate>
)
