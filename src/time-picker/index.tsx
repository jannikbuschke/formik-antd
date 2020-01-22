import { TimePicker as $TimePicker } from 'antd'
import { FieldProps } from 'formik'
import * as React from 'react'
import moment from 'moment'
import { FormikFieldProps } from '../FieldProps'
import Field from '../field'
import { TimePickerProps as $TimePickerProps } from 'antd/lib/time-picker'

export type TimePickerProps = FormikFieldProps & $TimePickerProps

export const TimePicker = ({
  name,
  validate,
  fast,
  onChange,
  ...restProps
}: TimePickerProps) => (
  <Field name={name} validate={validate} fast={fast}>
    {({
      field: { value },
      form: { setFieldValue, setFieldTouched },
    }: FieldProps) => (
      <$TimePicker
        value={value ? moment(value) : undefined}
        onChange={(time, timeString) => {
          setFieldValue(name, time ? time.toISOString() : null)
          setFieldTouched(name, true, false)
          onChange && onChange(time, timeString)
        }}
        {...restProps}
      />
    )}
  </Field>
)

export default TimePicker
