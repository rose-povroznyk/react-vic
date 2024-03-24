import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as yup from 'yup';

const USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
});

const UserInfoForm = () => {
  const userInitialValues = { firstName: '' };
  const handleSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={userInitialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form>
            <label>
              <span> Name: </span>{' '}
              <Field
                type='text'
                name='firstName'
                placeholder='type your name'
                autoFocus
              />
              <ErrorMessage name='firstName' component='div' />
            </label>

            <button type='submit'>Save</button>
            <button type='reset' disabled={!formikProps.dirty}>
              Reset
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserInfoForm;
