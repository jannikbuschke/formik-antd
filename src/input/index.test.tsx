import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import {
  render,
  fireEvent,
  waitForDomChange,
} from '@testing-library/react'
import Form from '../form/form'
import Input from './index'
import { act } from 'react-dom/test-utils'

const Container = ({ fastMode }: { fastMode: boolean }) => {
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>
        <Input data-testid='uat' name='field' fastMode={fastMode} />
      </Form>
    </Formik>
  )
}

describe('test initial value', () => {
  it.each`
    fastMode
    ${true}
    ${false}
  `(
    'should display initial value (fastMode=$fastMode)',
    async (fastMode: boolean) => {
      const { findByTestId } = render(<Container fastMode={fastMode} />)
      expect(await findByTestId('uat')).toHaveValue('initial value')
    },
  )
})

describe('should change', () => {
  it.each`
    fastMode
    ${true}
    ${false}
  `('should change (fastMode=$fastMode)', async (fastMode: boolean) => {
    const { findByTestId } = render(<Container fastMode={fastMode} />)
    const uat = await findByTestId('uat')
    await act(async () => {
      fireEvent.change(uat, { target: { value: 'new value' } })
      await waitForDomChange()
    })
    expect(await findByTestId('uat')).toHaveValue('new value')
  })
})
