import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import Table from './index'
import { act } from 'react-dom/test-utils'
import Input from '../input'
import RemoveRowButton from '../remove-row-button'
import AddRowButton from '../add-row-button'

const TestTable = () => {
  return (
    <Formik
      initialValues={{ data: [{ key: 1, name: 'lorem ipsum' }] }}
      onSubmit={() => {}}
    >
      <Form>
        <AddRowButton
          name='data'
          data-testid='add'
          createNewRow={() => ({ key: 2, name: 'new item' })}
        />
        <Table
          name='data'
          pagination={false}
          columns={[
            {
              title: 'Name',
              key: 'name',
              dataIndex: 'name',
              render: (text, record, index) => (
                <Input name={`data.${index}.name`} />
              ),
            },
            {
              title: 'Actions',
              key: 'actions',
              render: (text, record, index) => (
                <RemoveRowButton data-testid='remove' name='data' index={index}>
                  remove
                </RemoveRowButton>
              ),
            },
          ]}
        />
      </Form>
    </Formik>
  )
}

test('renders without crashing', async () => {
  render(<TestTable />)
})

test('renders initial values', async () => {
  const { getByDisplayValue } = render(<TestTable />)
  expect(getByDisplayValue('lorem ipsum')).toBeInTheDocument()
})

test('changes row', async () => {
  const { getByRole, getByDisplayValue } = render(<TestTable />)
  const uat = getByRole('textbox')
  await act(async () => {
    fireEvent.change(uat, { target: { value: '1' } })
    await waitForDomChange()
  })
  expect(uat).toHaveValue('1')
  expect(getByDisplayValue('1')).toBeInTheDocument()
})

test('deletes row', async () => {
  const { getByText, getByTestId } = render(<TestTable />)
  const uat = getByTestId('remove')
  await act(async () => {
    fireEvent.click(uat)
    await waitForDomChange()
  })
  expect(getByText('No Data')).toBeInTheDocument()
})

test('adds row', async () => {
  const { getByDisplayValue, getByTestId } = render(<TestTable />)
  const uat = getByTestId('add')
  await act(async () => {
    fireEvent.click(uat)
    await waitForDomChange()
  })
  expect(getByDisplayValue('new item')).toBeInTheDocument()
})
