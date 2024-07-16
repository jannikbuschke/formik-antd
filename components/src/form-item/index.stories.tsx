import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import { FormItem as Component } from './'
import { Input } from '../input'
import { Space } from 'antd'

export default {
  title: 'Form Item',
  component: Component,
} as ComponentMeta<typeof Component>

function PropRenderer(props: any) {
  return <div>{JSON.stringify(props, null, 4)}</div>
}

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <StoryTemplate initialValues={{ value: 'hello' }}>
      <div style={{ width: 500 }}>
        <Space direction='vertical'>
          <Component name='value' style={{ width: 500 }} label='Input'>
            <Input name='value' />
          </Component>
          <Component name='value' style={{ width: 500 }} label='Render props'>
            <PropRenderer />
          </Component>
        </Space>
      </div>
    </StoryTemplate>
  )
}

export const WithDefaultValue = Template.bind({})
