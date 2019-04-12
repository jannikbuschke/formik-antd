import { Field } from "formik";
import * as React from "react";
import { isDevelopmentMode } from "./utils";

export const FormikDebug = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) =>
  isDevelopmentMode() ? (
    <div style={{ padding: 15, ...props }}>
      <Field>{({ form }: any) => <DebugView {...form} />}</Field>
    </div>
  ) : null;

export const DebugView = (data: any) =>
  isDevelopmentMode() ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;
