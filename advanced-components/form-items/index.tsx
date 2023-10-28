import * as React from 'react'
import {
  InputProps,
  Input as $Input,
  TextAreaProps,
  PasswordProps,
} from '../input'
import { Checkbox as $Checkbox } from '../checkbox'
import FormItem, { FormItemProps as $FormItemProps } from '../form-item'
import { CheckboxProps } from '../checkbox'
import { Cascader as $Cascader, CascaderProps } from '../cascader'
import { DatePicker as $DatePicker, DatePickerProps } from '../date-picker'
import { InputNumber as $InputNumber, InputNumberProps } from '../input-number'
import { Mentions as $Mentions, MentionProps } from '../mentions'
import { Radio as $Radio, RadioGroupProps } from '../radio'
import { Rate as $Rate, RateProps } from '../rate'
import { Select as $Select, SelectProps } from '../select'
import { Slider as $Slider, SliderProps } from '../slider'
import { Switch as $Switch, SwitchProps } from '../switch'
import { TimePicker as $TimePicker, TimePickerProps } from '../time-picker'
import { Transfer as $Transfer, TransferProps } from '../transfer'
import { TreeSelect as $TreeSelect, TreeSelectProps } from '../tree-select'
import { TransferItem } from 'antd/es/transfer'
import { BaseOptionType, DefaultOptionType } from 'antd/es/cascader'

type FormItemProps = {
  formItem?: Omit<$FormItemProps, 'children' | 'name' | 'id' | 'htmlFor'>
}

export function Input({ formItem, ...rest }: InputProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Input id={rest.name} {...rest} />
    </FormItem>
  )
}

export function InputNumber({
  formItem,
  ...rest
}: InputNumberProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$InputNumber id={rest.name} {...rest} />
    </FormItem>
  )
}
export function TextArea({ formItem, ...rest }: TextAreaProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Input.TextArea id={rest.name} {...rest} />
    </FormItem>
  )
}

Input.TextArea = TextArea

export function Password({ formItem, ...rest }: PasswordProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Input.Password id={rest.name} {...rest} />
    </FormItem>
  )
}

Input.Password = Password

export function Checkbox({ formItem, ...rest }: CheckboxProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Checkbox id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Cascader<
  OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType,
>({ formItem, ...rest }: CascaderProps<OptionType> & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Cascader<OptionType> {...rest} />
    </FormItem>
  )
}

export function DatePicker({
  formItem,
  ...rest
}: DatePickerProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$DatePicker id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Mentions({ formItem, ...rest }: MentionProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Mentions id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Radio({ formItem, ...rest }: RadioGroupProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Radio id={rest.name} {...rest} />
    </FormItem>
  )
}

export function RadioGroup({
  formItem,
  ...rest
}: RadioGroupProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Radio.Group id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Rate({ formItem, ...rest }: RateProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Rate {...rest} />
    </FormItem>
  )
}

export function Select({ formItem, ...rest }: SelectProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Select id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Slider({ formItem, ...rest }: SliderProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Slider id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Switch({ formItem, ...rest }: SwitchProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Switch {...rest} />
    </FormItem>
  )
}

export function TimePicker({
  formItem,
  ...rest
}: TimePickerProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$TimePicker id={rest.name} {...rest} />
    </FormItem>
  )
}

export function Transfer<RecordType extends TransferItem = TransferItem>({
  formItem,
  ...rest
}: TransferProps<RecordType> & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$Transfer {...rest} />
    </FormItem>
  )
}

export function TreeSelect({
  formItem,
  ...rest
}: TreeSelectProps & FormItemProps) {
  return (
    <FormItem {...formItem} name={rest.name} htmlFor={rest.name} id={rest.name}>
      <$TreeSelect {...rest} />
    </FormItem>
  )
}
