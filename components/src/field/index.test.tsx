import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent } from '@testing-library/react'
import Form from '../form/form'
import Input from '../input'
import { act } from 'react-dom/test-utils'
import { waitFor } from '@testing-library/dom'

const Container = ({ fast }: { fast: boolean }) => {
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>
        <Input data-testid='uat' name='field' fast={fast} />
      </Form>
    </Formik>
  )
}

describe('test initial value', () => {
  it.each`
    fast
    ${true}
    ${false}
  `('should display initial value (fast=$fast)', async (fast: boolean) => {
    const { findByTestId } = render(<Container fast={fast} />)
    expect(await findByTestId('uat')).toHaveValue('initial value')
  })
})

describe('should change', () => {
  it.each`
    fast
    ${true}
    ${false}
  `('should change (fast=$fast)', async (fast: boolean) => {
    const { findByTestId } = render(<Container fast={fast} />)
    const uat = await findByTestId('uat')
    await act(async () => {
      fireEvent.change(uat, { target: { value: 'new value' } })
      await waitFor(async () =>
        expect(await findByTestId('uat')).toHaveValue('new value'),
      )
    })
  })
})
