import { Field } from "formik";
import * as React from "react";
import { isDevelopmentMode } from "./utils";

export const FormikDebug = () =>
  isDevelopmentMode() ? (
    <Field>{({ form }: any) => <DebugView {...form} />}</Field>
  ) : null;

export const DebugView = (data: any) =>
  isDevelopmentMode() ? <pre>{JSON.stringify(data, null, 2)}</pre> : null;
