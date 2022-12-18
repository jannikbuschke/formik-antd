import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'Transfer',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate initialValues={{ value: [] }}>
    <div>
      <Component
        name='value'
        render={(item) => item.title as string}
        listStyle={() => ({})}
        dataSource={[
          { key: '1', title: 'item 1' },
          { key: '2', title: 'item 2' },
          { key: '3', title: 'item 3' },
        ]}
      />
    </div>
  </StoryTemplate>
)
