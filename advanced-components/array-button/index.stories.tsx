import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'Array/Button',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = () => {
  return (
    <>
      <StoryTemplate initialValues={{ value: null }}>
        <div style={{ width: 500 }}>
          <Component name='value' onClick={(array) => {}} />
        </div>
      </StoryTemplate>
    </>
  )
}

export const Default = Template.bind({})
