export interface FormikFieldProps {
  name: string
  validate?: (value: any) => undefined | string | Promise<any>
  fast?: boolean
}
