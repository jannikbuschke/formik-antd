import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Checkbox, { Checkbox as Component } from './'
import Form from '../form'

export default {
  title: 'Checkbox',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <StoryTemplate
      initialValues={{
        value: null,
        defaultTrue: true,
        defaultFalse: false,
        group: [],
      }}
    >
      <div>
        <Component name='value' />
        <Component name='defaultTrue' />
        <Component name='defaultFalse' />
        <Form.Item name='defaultFalse' label='Checkbox'>
          <Component name='defaultFalse' />
        </Form.Item>
      </div>
    </StoryTemplate>
  )
}

export const Default = Template.bind({})
