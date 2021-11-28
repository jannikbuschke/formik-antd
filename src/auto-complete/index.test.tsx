import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Form from '../form/form'
import AutoComplete from './index'
import { act } from 'react-dom/test-utils'
import { ResetButton } from '../reset-button'

const TestAutoComplete = () => {
  return (
    <Formik initialValues={{ field: 'hello' }} onSubmit={() => {}}>
      <Form>
        <AutoComplete
          name='field'
          options={[
            { value: '0', text: 'First Item' },
            { value: '1', text: 'Second Item' },
            { value: '2', text: 'Third Item' },
          ]}
        />
        <ResetButton data-testid='reset' />
      </Form>
    </Formik>
  )
}

test('sets input value', async () => {
  const { getByRole } = render(<TestAutoComplete />)
  const uat = getByRole('combobox')
  expect(uat).toHaveValue('hello')
  await act(async () => {
    uat.focus()
    fireEvent.change(uat, { target: { name: 'field', value: 'world' } })
    await waitFor(() => expect(uat).toHaveValue('world'))
  })
})

test('sets key as input to key value', async () => {
  const { getByRole } = render(<TestAutoComplete />)
  const uat = getByRole('combobox')
  await act(async () => {
    fireEvent.change(uat, { target: { name: 'field', value: '1' } })
    await waitFor(() => expect(uat).toHaveValue('1'))
  })
})

// somehow the 'sets key as input to key value' and 'reset value' tests intefere.
// we skip one of them to please the pipeline
test('resets value', async () => {
  const { getByRole, getByTestId } = render(<TestAutoComplete />)
  const uat = getByRole('combobox')
  await act(async () => {
    fireEvent.change(uat, { target: { name: 'field', value: 'search value' } })
    await waitFor(() => expect(uat).toHaveValue('search value'))
  })
  expect(uat).toHaveValue('search value')

  await act(async () => {
    fireEvent.click(getByTestId('reset'))
    await waitFor(() => expect(uat).toHaveValue('hello'))
  })
})
