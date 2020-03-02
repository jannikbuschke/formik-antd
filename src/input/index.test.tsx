import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Formik } from 'formik'
import { render, fireEvent, waitForDomChange } from '@testing-library/react'
import Form from '../form/form'
import Input from './index'
import { act } from 'react-dom/test-utils'

const InputContainer = ({ fast }: { fast: boolean }) => {
  const ref = React.useRef() as any
  React.useEffect(() => {
    ref.current.focus()
  }, [ref.current])
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>
        <Input ref={ref} data-testid='uat' name='field' fast={fast} />
      </Form>
    </Formik>
  )
}

const TextAreaContainer = () => {
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>
        <Input.TextArea data-testid='uat' name='field' />
      </Form>
    </Formik>
  )
}

const PasswordContainer = () => {
  return (
    <Formik initialValues={{ field: 'initial value' }} onSubmit={() => {}}>
      <Form>
        <Input.Password data-testid='uat' name='field' />
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
    const { findByTestId } = render(<InputContainer fast={fast} />)
    expect(await findByTestId('uat')).toHaveValue('initial value')
  })
})

describe('should change', () => {
  it.each`
    fast
    ${true}
    ${false}
  `('should change (fast=$fast)', async (fast: boolean) => {
    const { findByTestId } = render(<InputContainer fast={fast} />)
    const uat = await findByTestId('uat')
    await act(async () => {
      fireEvent.change(uat, { target: { value: 'new value' } })
      await waitForDomChange()
    })
    expect(await findByTestId('uat')).toHaveValue('new value')
  })
})

test('should have focus', async () => {
  const { findByTestId } = render(<InputContainer fast={false} />)
  expect(await findByTestId('uat')).toHaveFocus()
})

test('TextArea should display default value', async () => {
  const { findByTestId } = render(<TextAreaContainer />)
  const uat = await findByTestId('uat')
  await act(async () => {
    fireEvent.change(uat, { target: { value: 'defaultvalue' } })
    await waitForDomChange()
  })
  expect(await findByTestId('uat')).toHaveValue('defaultvalue')
})

test('Password should display default value', async () => {
  const { findByTestId } = render(<PasswordContainer />)
  const uat = await findByTestId('uat')
  await act(async () => {
    fireEvent.change(uat, { target: { value: 'defaultvalue' } })
    await waitForDomChange()
  })
  expect(await findByTestId('uat')).toHaveValue('defaultvalue')
})
