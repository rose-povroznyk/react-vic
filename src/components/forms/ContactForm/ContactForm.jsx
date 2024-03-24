import React from 'react';
import styles from './ContacForm.module.sass';
import { CONTACT_VALIDATION_SCHEMA } from '../../../utiltits/validates/validateSchemas';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import Input from './Input';

const ContactForm = () => {
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    birthday: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label='Name:'
          type='text'
          name='name'
          placeholder='Ivo'
          autoFocus
          classes={classes}
        />

        <Input
          label='Email:'
          type='email'
          name='email'
          placeholder='tes@gmail.com'
          classes={classes}
        />

        <Input
          label='Phone number:'
          type='tel'
          name='phone'
          placeholder='+380966090088'
          classes={classes}
        />
        <Input
          label='Birthday:'
          type='date'
          name='birthday'
          classes={classes}
        />

        <button type='submit'>Save</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
