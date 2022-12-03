import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'Switch',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <div>hello</div>
  // <StoryTemplate initialValues={{ value: true }}>
  //   <div>
  //     <Component name='value' />
  //     <Component name='value' />
  //   </div>
  // </StoryTemplate>
)
