import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import Checkbox from './index'
import { act } from 'react-dom/test-utils'

const Container = ({
  validate,
  initiallyChecked,
}: {
  validate?: any
  initiallyChecked: boolean
}) => {
  return (
    <Formik initialValues={{ field: initiallyChecked }} onSubmit={() => {}}>
      <Form>
        <Form.Item name='field' validate={validate}>
          <Checkbox name='field' />
        </Form.Item>
      </Form>
    </Formik>
  )
}

test('should check', async () => {
  const { getByRole } = render(<Container initiallyChecked={false} />)
  const uat = getByRole('checkbox')
  await act(async () => {
    fireEvent.click(uat, { target: 'field', checked: true })
    await waitForDomChange()
  })
  expect(uat).toBeChecked()
})

test('should uncheck', async () => {
  const { getByRole } = render(<Container initiallyChecked={true} />)
  const uat = getByRole('checkbox')
  await act(async () => {
    fireEvent.click(uat, { target: 'field', checked: false })
    await waitForDomChange()
  })
  expect(uat).not.toBeChecked()
})

test('should validate once per click', async () => {
  const validate = jest.fn()

  const { getByRole } = render(
    <Container validate={validate} initiallyChecked={false} />,
  )
  const uat = getByRole('checkbox')
  await act(async () => {
    uat.focus()
    fireEvent.click(uat, { target: 'field', checked: true })
    await waitForDomChange()
  })
  expect(validate).toBeCalledTimes(1)
})
