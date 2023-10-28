import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'Mentions',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate
    initialValues={{
      value: null,
    }}
  >
    <div>
      <Component
        name='value'
        options={[
          { key: '1', label: 'Label', value: 'Value' },
          { key: '2', label: 'Label2', value: 'Value2' },
        ]}
      />
    </div>
  </StoryTemplate>
)
