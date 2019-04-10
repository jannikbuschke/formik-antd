export interface FormikFieldProps {
  name: string;
  validate?: (value: any) => undefined | string | Promise<any>;
}

export interface IDataSourceObject {
  value: ( string | number );
  label: ( string | React.ReactNode );
}