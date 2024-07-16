import * as React from 'react'
import { ComponentMeta } from '@storybook/react'
import { StoryTemplate } from '../shared'
import Component from './'

export default {
  title: 'TreeSelect',
  component: Component,
} as ComponentMeta<typeof Component>

export const Default = () => (
  <StoryTemplate initialValues={{ value: [] }}>
    <div>
      <Component
        style={{ width: 300 }}
        name='value'
        treeData={[
          {
            value: 'parent 1',
            title: 'foo',
            // ts complains if label is not defined here. Not sure why this is needed
            label: 'parent 1',
            children: [
              {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                  {
                    value: 'leaf1',
                    title: 'leaf1',
                  },
                  {
                    value: 'leaf2',
                    title: 'leaf2',
                  },
                ],
              },
              {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                  {
                    value: 'leaf3',
                    title: <b style={{ color: '#08c' }}>leaf3</b>,
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  </StoryTemplate>
)
