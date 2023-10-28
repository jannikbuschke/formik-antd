import * as React from 'react'
import {
  Checkbox,
  Input,
  InputNumber,
  Switch,
  DatePicker,
  TimePicker,
  Radio,
  FormikDebug,
  FormItem,
  ResetButton,
  SubmitButton,
  Select,
  AutoComplete,
  Rate,
  Slider,
  Cascader,
  TreeSelect,
  Transfer,
  Form,
  Mentions,
} from '.'
import { Formik } from 'formik'
import dayjs from 'dayjs'
import { TreeNode } from 'antd/es/tree-select'
import { Button } from 'antd'

export default {
  title: 'Overview',
  component: 'div',
}

export function Overview() {
  return (
    <Formik
      initialValues={{
        userName: '',
        //set default/initial values via formik
        email: 'sample@email.com',
        address: { city: '' },
        password: '',
        index: 5,
        dollars: 1,
        newsletter: true,
        consent: false,
        description: '',
        time: dayjs().toISOString(),
        date: dayjs().toISOString(),
        city: 3,
        radioGroup: '1',
        todos: ['2', '3'],
        slider1: 30,
        slider2: [20, 60],
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values))
      }}
      validate={(values) => {
        if (!values.userName) {
          return { userName: 'required' }
        }
        return undefined
      }}
      render={(formik) => (
        <Form>
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '850px',
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <div
              style={{
                margin: '5px',
                height: '100%',
                display: 'grid',
                gridGap: '5px',
              }}
            >
              <Input name='email' placeholder='Basic Input' />
              <Form.Item
                name='userName'
                hasFeedback={true}
                showValidateSuccess={true}
                __debug={true}
              >
                <Input name='userName' placeholder='Validated input' />
              </Form.Item>

              <Input
                addonBefore='city'
                name='address.city'
                placeholder='Input (nested object)'
              />
              <Input.Password name='password' placeholder='Input.Password' />
              <Input.TextArea name='description' placeholder='Input.TextArea' />
              <InputNumber name='index' min={0} />
              <InputNumber
                name='dollars'
                formatter={(value: any) => `$ ${value}`}
              />
              <AutoComplete
                name='auto'
                placeholder='Autocomplete'
                dataSource={['Berlin', 'Amsterdam', 'Paris']}
                showArrow={true}
              />
              <Mentions name='mentions' placeholder='Mentions'>
                <Mentions.Option value='afc163'>afc163</Mentions.Option>
                <Mentions.Option value='zombieJ'>zombieJ</Mentions.Option>
                <Mentions.Option value='yesmeck'>yesmeck</Mentions.Option>
              </Mentions>
              <Rate name='rate' allowHalf={true} allowClear={true} />
              <Rate
                name='rate'
                allowHalf={true}
                style={{ color: 'red' }}
                allowClear={true}
                // character={<HeartFilled />}
              />
              <Slider name='slider1' />
              <Slider name='slider2' range={true} />
              <Checkbox name='newsletter'>Checkbox</Checkbox>
              <div>
                <Switch
                  name='consent'
                  checkedChildren='开'
                  unCheckedChildren='关'
                />
              </div>
              <TimePicker name='time' placeholder='TimePicker' />
              <DatePicker
                name='date'
                showTime={true}
                placeholder='DatePicker'
              />
              <Radio.Group
                name='radioGroup'
                options={[
                  { label: 'item 1', value: '1' },
                  { label: 'item 2', value: 2 },
                  { label: 'item 3', value: '3' },
                  { label: <span>foo</span>, value: '4' },
                ]}
              />
              <Radio.Group name='city' size='large'>
                <Radio.Button value={1}>Hamburg</Radio.Button>
                <Radio.Button value={2}>Amsterdam</Radio.Button>
                <Radio.Button value={3}>London</Radio.Button>
              </Radio.Group>
              <Checkbox.Group
                name='todos'
                options={[
                  { label: 'item 1', value: '1' },
                  { label: 'item 2', value: '2' },
                  { label: 'item 3', value: '3' },
                ]}
              />
              <Select
                name='select2'
                style={{ width: '100%' }}
                placeholder='Select multiple'
                mode='multiple'
              >
                <Select.Option value={1}>item 1</Select.Option>
                <Select.Option value={2}>item 2</Select.Option>
                <Select.Option value={3}>item 3</Select.Option>
              </Select>
              <Select
                name='select3'
                style={{ width: '100%' }}
                placeholder='Select with groups'
              >
                <Select.OptGroup label='group 1'>
                  <Select.Option value={1}>item 1</Select.Option>
                  <Select.Option value={2}>item 2</Select.Option>
                  <Select.Option value={3}>item 3</Select.Option>
                </Select.OptGroup>
                <Select.OptGroup label='group 2'>
                  <Select.Option value={4}>item 4</Select.Option>
                  <Select.Option value={5}>item 5</Select.Option>
                  <Select.Option value={6}>item 6</Select.Option>
                </Select.OptGroup>
              </Select>
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                          {
                            value: 'xihu',
                            label: 'West Lake',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                      {
                        value: 'nanjing',
                        label: 'Nanjing',
                      },
                    ],
                  },
                ]}
                name='cascader'
                placeholder='Cascader'
              />
              <TreeSelect name='treeselect' placeholder='Treeselect'>
                <TreeNode value='parent 1' title='parent 1' key='0-1'>
                  <TreeNode value='parent 1-0' title='parent 1-0' key='0-1-1'>
                    <TreeNode value='leaf1' title='my leaf' key='random' />
                    <TreeNode value='leaf2' title='your leaf' key='random1' />
                  </TreeNode>
                  <TreeNode value='parent 1-1' title='parent 1-1' key='random2'>
                    <TreeNode
                      value='sss'
                      title={<b style={{ color: '#08c' }}>sss</b>}
                      key='random3'
                    />
                  </TreeNode>
                </TreeNode>
              </TreeSelect>
              <Transfer
                name='transfer'
                dataSource={[
                  { key: '1', title: 'item 1' },
                  { key: '2', title: 'item 2' },
                  { key: '3', title: 'item 3' },
                ]}
                render={(item) => item.title as string}
              />
              <Button.Group size='large'>
                <ResetButton>Reset</ResetButton>
                <SubmitButton type='primary' disabled={false}>
                  Submit
                </SubmitButton>
              </Button.Group>
            </div>
          </div>

          <FormikDebug style={{ maxWidth: 400 }} />
        </Form>
      )}
    />
  )
}
