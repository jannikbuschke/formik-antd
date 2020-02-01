import '@testing-library/jest-dom/extend-expect'
import React, { ReactElement } from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import FormItem from '.'
import Input from '../input'
import Form from '../form/form'
import Select from '../select'
import SubmitButton from '../submit-button'
import { act } from 'react-dom/test-utils'

const { Option } = Select

const Test = ({
  children,
  validate,
}: {
  children: ReactElement
  validate?: () => object
}) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}} validate={validate}>
      <Form>
        <FormItem name='test'>{children}</FormItem>
        <SubmitButton data-testid='submit' />
      </Form>
    </Formik>
  )
}

test('displays validation result', async () => {
  const validate = () => ({ test: 'error' })
  const { getByTestId, queryByText } = render(
    <Test validate={validate}>
      <Input name='test' data-testid='input' />
    </Test>,
  )
  expect(queryByText('error')).not.toBeInTheDocument()
  fireEvent.change(getByTestId('input'), {
    target: { name: 'test', value: 'test' },
  })
  fireEvent.click(getByTestId('submit'))
  await waitForDomChange()
  expect(queryByText('error')).toBeInTheDocument()
})

test('displayes initial error', async () => {
  const { queryByText } = render(
    <Formik
      initialErrors={{ test: 'initialError' }}
      initialValues={{}}
      onSubmit={() => {}}
    >
      <Form>
        <FormItem name='test'>
          <Input name='test' data-testid='input' />
        </FormItem>
      </Form>
    </Formik>,
  )
  expect(queryByText('initialError')).toBeInTheDocument()
})

test('displayes error instead of initialError after touched when showInitialErrorAfterTouched is false', async () => {
  const validate = () => 'error'
  const { getByTestId, queryByText } = render(
    <Formik
      initialErrors={{ test: 'initialError' }}
      initialValues={{}}
      showInitialErrorAfterTouched={false}
      onSubmit={() => {}}
    >
      <Form>
        <FormItem name='test' validate={validate}>
          <Input name='test' data-testid='input' />
        </FormItem>
        <SubmitButton data-testid='submit' />
      </Form>
    </Formik>,
  )
  expect(queryByText('initialError')).toBeInTheDocument()
  expect(queryByText('error')).not.toBeInTheDocument()
  fireEvent.change(getByTestId('input'), {
    target: { name: 'test', value: 'test' },
  })
  fireEvent.blur(getByTestId('input'))
  fireEvent.click(getByTestId('submit'))
  await waitForDomChange()
  expect(queryByText('error')).toBeInTheDocument()
  expect(queryByText('initialError')).not.toBeInTheDocument()
})

test('displayes initialError with error after touched when showInitialErrorAfterTouched is true', async () => {
  const validate = () => 'error'
  const { getByTestId, queryByText } = render(
    <Formik
      initialErrors={{ test: 'initialError' }}
      initialValues={{}}
      onSubmit={() => {}}
    >
      <Form>
        <FormItem
          name='test'
          validate={validate}
          showInitialErrorAfterTouched={true}
        >
          <Input name='test' data-testid='input' />
        </FormItem>
        <SubmitButton data-testid='submit' />
      </Form>
    </Formik>,
  )
  expect(queryByText('initialError')).toBeInTheDocument()
  expect(queryByText('error')).not.toBeInTheDocument()
  fireEvent.change(getByTestId('input'), {
    target: { name: 'test', value: 'test' },
  })
  fireEvent.blur(getByTestId('input'))
  fireEvent.click(getByTestId('submit'))
  await waitForDomChange()
  expect(queryByText('error')).toBeInTheDocument()
  expect(queryByText('initialError')).toBeInTheDocument()
})

test('should not display help if no display is required', async () => {
  const validate = () => 'error'
  const { getByTestId } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormItem name='test' validate={validate}>
          <Input name='test' data-testid='input' />
        </FormItem>
        <SubmitButton data-testid='submit' />
      </Form>
    </Formik>,
  )

  const explainElement = getByTestId('input').parentElement!.nextSibling

  expect(explainElement).toBeNull()
})

test.skip('handles changes on multiselect without prop-types error', async () => {
  const { getByTestId, queryByText, getByText } = render(
    <Test>
      <Select name='test' data-testid='input' mode='multiple'>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
      </Select>
    </Test>,
  )
  expect(queryByText('error')).not.toBeInTheDocument()
  console.error = jest.fn()
  const uat = getByTestId('input')
  await act(async () => {
    fireEvent.click(uat)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByTestId('submit'))
  })
  expect(console.error).not.toHaveBeenCalled()
  //@ts-ignore
  console.error.mockRestore()
})

test('displays validation result on nested input', async () => {
  const validate = () => 'error'
  const { getByTestId, queryByText } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormItem name='test' validate={validate}>
          <Input name='test' data-testid='input' />
        </FormItem>
        <SubmitButton data-testid='submit' />
      </Form>
    </Formik>,
  )
  expect(queryByText('error')).not.toBeInTheDocument()
  fireEvent.change(getByTestId('input'), {
    target: { name: 'test', value: 'test' },
  })
  fireEvent.blur(getByTestId('input'))
  fireEvent.click(getByTestId('submit'))
  await waitForDomChange()
  expect(queryByText('error')).toBeInTheDocument()
})

test('displays validation success ', async () => {
  const validate = () => undefined
  const { getByTestId, queryByLabelText } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormItem name='test' validate={validate} showValidateSuccess>
          <Input name='test' data-testid='input' />
        </FormItem>
      </Form>
    </Formik>,
  )
  expect(queryByLabelText('check-circle')).not.toBeInTheDocument()
  await act(async () => {
    fireEvent.change(getByTestId('input'), {
      target: { name: 'test', value: 'test' },
    })
    fireEvent.blur(getByTestId('input'))
  })
  expect(queryByLabelText('check-circle')).toBeInTheDocument()
})
