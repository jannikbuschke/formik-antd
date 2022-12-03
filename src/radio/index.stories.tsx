import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'Radio',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate
    initialValues={{
      value: null,
    }}
  >
    <div>
      <Component.Group name='value'>
        <Component name='value'>Label1</Component>
        <Component name='value'>Label2</Component>
      </Component.Group>
    </div>
  </StoryTemplate>
)
