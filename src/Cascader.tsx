import * as React from "react";
import { Cascader as $Cascader } from "antd";
import { Field, FieldProps } from "formik";
import { FormikFieldProps } from "./FieldProps";
import { CascaderProps as $CascaderProps } from 'antd/lib/cascader';

export type CascaderProps = FormikFieldProps & $CascaderProps;

export const Cascader = ({ name, ...restProps }: CascaderProps) => (
    <Field name={name}>
        {({ field: { value }, form: { setFieldValue } }: FieldProps) => (
            <$Cascader
                value={value}
                onChange={value => setFieldValue(name, value)}
                {...restProps}
            />
        )}
    </Field>
);
