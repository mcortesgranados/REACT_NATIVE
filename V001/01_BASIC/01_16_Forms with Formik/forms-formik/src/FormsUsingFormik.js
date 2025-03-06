// Author: Manuela Cortés Granados
// Location: Bogotá DC, Colombia
// Date: March 8, 2024

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const onSubmit = (values) => {
  console.log('Form data:', values);
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const FormsUsingFormik = () => {
  return (
    <div>
      <h1>Forms with Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name:</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormsUsingFormik;
