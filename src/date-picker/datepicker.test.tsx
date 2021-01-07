import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import userEvent from '@testing-library/user-event'
import { render, fireEvent, waitFor, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import { DatePicker } from '.'
import { SubmitButton } from '../submit-button'
import { act } from 'react-dom/test-utils'
import moment from 'moment'

interface FormInputModelWithStringDate {
    dateField: string
}

interface FormInputModelWithDateObject {
    dateField: Date
}

const initialDate = new Date();
initialDate.setUTCFullYear(2035);
initialDate.setUTCMonth(5);
initialDate.setUTCDate(15);
initialDate.setUTCHours(0);
initialDate.setUTCMinutes(0);
initialDate.setUTCSeconds(0);
initialDate.setUTCMilliseconds(0);

const Container = ({
  validate,
  useStringValue,
  onSubmit
}: {
  validate?: any
  useStringValue?: boolean,
  onSubmit: (values: any) => void
}) => {
  return (
    <Formik initialValues={{ dateField: initialDate }} onSubmit={onSubmit}>
      <Form>
        <Form.Item label='date field' htmlFor='dateField' name='dateField' validate={validate}>
          <DatePicker name='dateField' placeholder='date field' useStringValue={useStringValue} />
        </Form.Item>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Formik>
  )
}

test('should set date as string', async () => {

  let formData: FormInputModelWithStringDate;

  const onSubmit = async (values: FormInputModelWithStringDate) => {
    formData = values;
  }

  const { getByLabelText, getByText } = render(<Container useStringValue={true} onSubmit={onSubmit} />)
  await act(async () => {
    fireEvent.focus(getByLabelText('date field'))
    await waitForDomChange()
    fireEvent.click(getByText('Today'))
    await waitForDomChange()
    userEvent.click(getByText('Submit'))
  })

  const result = await waitFor(() => {
    if (formData) {
      return formData
    }
    else {
      return Promise.reject()
    }
  })

  expect(result.dateField).toBe(moment().format("YYYY-MM-DD"));
})

test('should set date as Date object', async () => {

  let formData: FormInputModelWithDateObject

  const onSubmit = async (values: FormInputModelWithDateObject) => {
    formData = values
  }

  const { getByPlaceholderText, getByLabelText, getByText } = render(<Container useStringValue={false} onSubmit={onSubmit} />)
  const datePicker = getByPlaceholderText('date field')
  await act(async () => {
    fireEvent.focus(getByLabelText('date field'))
    await waitForDomChange()
    fireEvent.click(getByText('Today'))
    await waitForDomChange()
    userEvent.click(getByText('Submit'))
  })  

  const result = await waitFor(() => {
    if (formData) {
      return formData
    }
    else {
      return Promise.reject()
    }
  })
  expect(new Date(result.dateField).getUTCFullYear()).toBe(new Date().getUTCFullYear())
  expect(new Date(result.dateField).getUTCMonth()).toBe(new Date().getUTCMonth())
  expect(new Date(result.dateField).getUTCDate()).toBe(new Date().getUTCDate())
})

