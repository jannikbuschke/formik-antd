import { Mention as $Mention } from "antd";
import { Field, FieldProps } from "formik";
import * as React from "react";
import { MentionProps as $MentionProps } from "antd/lib/mention";
import { FormikFieldProps } from "./FieldProps";

const { toContentState, toString } = $Mention;

export type MentionProps = FormikFieldProps & $MentionProps;

export const Mention = ({ name, validate, ...restProps }: MentionProps) => {
  return (
    <Field name={name} validate={validate}>
      {({ field: { value }, form: { setFieldValue, setFieldTouched } }: FieldProps) => (
        <Internal
          name={name}
          value={value}
          onChange={v => setFieldValue(name, v)}
          onBlur={() => setFieldTouched(name)}
          {...restProps}
        />
      )}
    </Field>
  );
}

type InternalProps = { value: any, onChange: (v: string) => void; } & Pick<MentionProps, Exclude<keyof MentionProps, "onChange">>;

const Internal = ({ value, onChange, onBlur, ...restProps }: InternalProps) => {
  const [editorState, setEditorState] = React.useState(toContentState(value || ""));
  return (
    <$Mention
      value={editorState}
      onChange={v => {
        setEditorState(v);
        onChange(toString(v));
      }}
      {...restProps}
    />
  );
}
