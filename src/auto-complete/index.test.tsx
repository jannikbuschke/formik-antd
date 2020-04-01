import '@testing-library/jest-dom/extend-expect'
import React, { ReactNode } from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
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
    await waitForDomChange()
  })
  expect(uat).toHaveValue('world')
})

test('sets key as input to key value', async () => {
  const { getByRole } = render(<TestAutoComplete />)
  const uat = getByRole('combobox')
  await act(async () => {
    fireEvent.change(uat, { target: { name: 'field', value: '1' } })
    await waitForDomChange()
  })
  expect(uat).toHaveValue('1')
})

test('resets value', async () => {
  const { getByRole, getByTestId } = render(<TestAutoComplete />)
  const uat = getByRole('combobox')
  await act(async () => {
    fireEvent.change(uat, { target: { name: 'field', value: 'search value' } })
    await waitForDomChange()
  })
  expect(uat).toHaveValue('search value')

  await act(async () => {
    fireEvent.click(getByTestId('reset'))
    await waitForDomChange()
  })

  expect(uat).toHaveValue('hello')
})
