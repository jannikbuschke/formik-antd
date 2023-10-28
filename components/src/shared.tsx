import React from 'react'
import { Form, Formik, FormikConfig, FormikValues } from 'formik'

export function StoryTemplate<Values extends FormikValues>({
  children,
  ...rest
}: { children: React.ReactNode } & Omit<FormikConfig<Values>, 'onSubmit'>) {
  return (
    <Formik
      {...rest}
      onSubmit={(values, formikHelpers) => {
        console.log('submit', { values })
        formikHelpers.setSubmitting(false)
      }}
    >
      {(f) => (
        <Form>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {children}
            {/* <Prism language='json'>{JSON.stringify({ ...f }, null, 4)}</Prism>; */}
            <pre>{JSON.stringify({ ...f }, null, 4)}</pre>
          </div>
        </Form>
      )}
    </Formik>
  )
}
