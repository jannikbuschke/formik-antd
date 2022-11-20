import { Formik } from 'formik'
import React from 'react'
import { Form } from '../form'
import Select from './index'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from '@testing-library/react'

const TestSelect = () => {
	return (
		<Formik initialValues={{ field: 0 }} onSubmit={() => {
		}}>
			<Form>
				<Select name={'field'}>
					<Select.Option value={0}>Zero</Select.Option>
					<Select.Option value={1}>One</Select.Option>
				</Select>
			</Form>
		</Formik>
	)
}

test('renders select', async () => {
	render(<TestSelect/>)
	expect(screen.queryByRole('combobox')).toBeInTheDocument()
})

test('sets initial value', async () => {
	const { queryByText } = render(<TestSelect/>)
	expect(queryByText('Zero')).toBeInTheDocument()
})

test('changes selected upon clicking', async () => {
	const { getByRole, queryByText, getByText, queryAllByText } = render(<TestSelect/>)
	const selector = getByRole('combobox')
	expect(queryByText('Zero')).toBeInTheDocument()
	fireEvent.mouseDown(selector)
	await act(async () => {
		fireEvent.click(getByText('One'))
	})
	expect(queryAllByText('One').length).toBeGreaterThan(1)
})
