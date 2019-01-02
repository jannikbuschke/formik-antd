import { Field, FormikProps } from "formik";
import * as React from "react";
import * as moment from "moment";

export const DateTimeAsStringField = ({
  name,
  format
}: {
  name: string;
  format?: string;
}) => (
  <Field name={name}>
    {({ field, form }: { field: any; form: FormikProps<any> }) =>
      moment
        .utc(field.value)
        .local()
        .format(format)
    }
  </Field>
);
