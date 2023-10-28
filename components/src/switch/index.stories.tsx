import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'
import Form from '../form'

// https://github.com/storybookjs/storybook/issues/11980#issuecomment-1019533161
;(Component as any).displayName = 'Switch1'

export default {
  title: 'Switch',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate initialValues={{ value: true }}>
    <div>
      <Form.Item name='value' label='Checkbox1'>
        <Component name='value' />
      </Form.Item>
    </div>
  </StoryTemplate>
)
