import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import Input, { InputType, TextAreaType, PasswordType } from './index'
import { act } from 'react-dom/test-utils'

type Component = InputType | PasswordType | TextAreaType

const InputContainer = (props: React.PropsWithChildren<{}>) => {
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>{props.children}</Form>
    </Formik>
  )
}

describe('should display initial value', () => {
  it.each`
    Component         | name
    ${Input}          | ${'Input'}
    ${Input.Password} | ${'Password'}
    ${Input.TextArea} | ${'TextArea'}
  `(
    'should display initial value ($name)',
    async ({ Component }: { Component: Component }) => {
      const { findByTestId } = render(
        <InputContainer>
          <Component data-testid='uat' name='field' />
        </InputContainer>,
      )
      expect(await findByTestId('uat')).toHaveValue('initial value')
    },
  )
})

describe('should change', () => {
  it.each`
    Component         | name
    ${Input}          | ${'Input'}
    ${Input.Password} | ${'Password'}
    ${Input.TextArea} | ${'TextArea'}
  `(
    'should change ($name)',
    async ({ Component }: { Component: Component }) => {
      const { findByTestId } = render(
        <InputContainer>
          <Component data-testid='uat' name='field' />
        </InputContainer>,
      )
      const uat = await findByTestId('uat')
      await act(async () => {
        fireEvent.change(uat, { target: { value: 'new value' } })
        await waitForDomChange()
      })
      expect(await findByTestId('uat')).toHaveValue('new value')
    },
  )
})
describe('should be focusable', () => {
  it.each`
    Component         | name
    ${Input}          | ${'Input'}
    ${Input.Password} | ${'Password'}
    ${Input.TextArea} | ${'TextArea'}
  `(
    'should be focusable ($name)',
    async ({ Component }: { Component: Component }) => {
      const { findByTestId } = render(
        React.createElement(function() {
          const ref = React.useRef<any>(null)
          React.useLayoutEffect(() => {
            ref.current!.focus()
          }, [])
          return (
            <InputContainer>
              <Component ref={ref} data-testid='uat' name='field' />
            </InputContainer>
          )
        }),
      )
      expect(await findByTestId('uat')).toHaveFocus()
    },
  )
})
