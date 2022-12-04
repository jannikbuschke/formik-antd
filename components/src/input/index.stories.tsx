import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import { Input as Component } from './'

export default {
  title: 'Input',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <StoryTemplate initialValues={{ value: null }}>
      <div style={{ width: 500 }}>
        <Component name='value' style={{ width: 500 }} />
        <Component.Password name='value' style={{ width: 500 }} />
        <Component.TextArea name='value' style={{ width: 500 }} />
      </div>
    </StoryTemplate>
  )
}

export const Default = Template.bind({})
