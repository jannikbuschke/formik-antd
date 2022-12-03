import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'DatePicker',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <StoryTemplate
      initialValues={{
        value: null,
      }}
    >
      <div>
        <Component name='value' />
      </div>
    </StoryTemplate>
  )
}

export const Default = Template.bind({})
