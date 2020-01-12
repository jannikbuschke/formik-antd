import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import Radio from './index'
import { act } from 'react-dom/test-utils'

const Container = ({
  validate,
  initiallySelected: initialySelected,
}: {
  validate?: any
  initiallySelected: number
}) => {
  return (
    <Formik initialValues={{ field: initialySelected }} onSubmit={() => {}}>
      <Form>
        <Form.Item name='field' validate={validate}>
          <Radio.Group name='field'>
            <Radio.Button data-testid='radio1' value={1}>
              value 1
            </Radio.Button>
            <Radio.Button data-testid='radio2' value={2}>
              value 2
            </Radio.Button>
            <Radio.Button data-testid='radio3' value={3}>
              value 3
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Formik>
  )
}

test('should select initial value', async () => {
  const { findByTestId } = render(<Container initiallySelected={2} />)
  expect(await findByTestId('radio2')).toBeChecked()
  expect(await findByTestId('radio1')).not.toBeChecked()
  expect(await findByTestId('radio3')).not.toBeChecked()
})

test('should change', async () => {
  const { findByTestId } = render(<Container initiallySelected={1} />)
  const radio1 = await findByTestId('radio1')
  const radio2 = await findByTestId('radio2')
  expect(radio1).toBeChecked()
  expect(radio2).not.toBeChecked()
  await act(async () => {
    fireEvent.click(radio2, { checked: true })
    await waitForDomChange()
  })
  expect(radio2).toBeChecked()
  expect(radio1).not.toBeChecked()
})

test('should change', async () => {
  const { findByTestId } = render(<Container initiallySelected={1} />)
  const radio1 = await findByTestId('radio1')
  const radio2 = await findByTestId('radio2')
  expect(radio1).toBeChecked()
  expect(radio2).not.toBeChecked()
  await act(async () => {
    fireEvent.click(radio2, { checked: true })
    await waitForDomChange()
  })
  expect(radio2).toBeChecked()
  expect(radio1).not.toBeChecked()
})

test('should validate once per click', async () => {
  const validate = jest.fn()

  const { findByTestId } = render(
    <Container validate={validate} initiallySelected={1} />,
  )
  const radio2 = await findByTestId('radio2')

  await act(async () => {
    fireEvent.click(radio2, { checked: true })
    await waitForDomChange()
  })
  expect(validate).toBeCalledTimes(1)
})
