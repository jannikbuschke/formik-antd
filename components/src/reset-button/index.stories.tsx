import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'ResetButton',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate initialValues={{ value: true }}>
    <div>
      <Component name='value' />
    </div>
  </StoryTemplate>
)
