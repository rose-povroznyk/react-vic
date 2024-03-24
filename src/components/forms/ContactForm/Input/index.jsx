import classNames from 'classnames';
import { Field } from 'formik';
import React from 'react';

const Input = (props) => {
  const { name, label, classes, ...restPoprs } = props;
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        return (
          <label>
            <span>{label}</span>
            <input {...restPoprs} {...field} className={inputClassNames} />
            {meta.error && meta.touched && (
              <span className={classes.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default Input;
