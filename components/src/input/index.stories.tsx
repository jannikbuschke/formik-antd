import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import { Input as Component } from './'
import { Form, Space } from 'antd'
import { SubmitButton } from '../submit-button'
import { FormItem } from '../form-item'
export default {
  title: 'Input',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args, { argTypes }) => {
  return (
    <StoryTemplate initialValues={{ value: args.value }}>
      <div style={{ width: 500 }}>
        <Space direction='vertical'>
          Input
          <Component name='value' style={{ width: 500 }} />
          Input.Password
          <Component.Password name='value' style={{ width: 500 }} />
          Input.TextArea
          <Component.TextArea name='value' style={{ width: 500 }} />
        </Space>
      </div>
    </StoryTemplate>
  )
}

const TemplateWithFormItem: ComponentStory<typeof Component> = (
  args,
  { argTypes },
) => {
  return (
    <StoryTemplate
      initialValues={{ value: args.value }}
      validate={(values) => {
        return values.value === null || values.value === ''
          ? { value: 'Field is required' }
          : { value: 'Field is required' }
      }}
    >
      <div style={{ width: 500 }}>
        <Space direction='vertical'>
          <FormItem name='value' label='Input'>
            <Component name='value' style={{ width: 500 }} fast={true} />
          </FormItem>
          <Form.Item name='value' label='Input.Password'>
            <Component.Password name='value' style={{ width: 500 }} />
          </Form.Item>
          <Form.Item name='value' label='Input.TextArea'>
            <Component.TextArea name='value' style={{ width: 500 }} />
          </Form.Item>
          <SubmitButton>Submit</SubmitButton>
        </Space>
      </div>
    </StoryTemplate>
  )
}

export const WithDefaultValue = Template.bind({})
WithDefaultValue.args = { value: 'foo' }

export const WithNullAsDefault = Template.bind({})
WithNullAsDefault.args = { value: null }

export const WithFormItem = TemplateWithFormItem.bind({})
WithNullAsDefault.args = { value: 'foo' }
