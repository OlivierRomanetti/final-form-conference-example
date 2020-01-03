import React from 'react';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';

import './App.css';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
};

const focusOnError = createDecorator();
const required = value => (value ? undefined : 'Required');

const App = () => (
  <div>
    <h1>React Final Form</h1>
    <Form onSubmit={showResults} decorators={[focusOnError]}>
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            id="firstName"
            placeholder="First Name"
            validate={required}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label htmlFor={input.id}>First Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            validate={required}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label htmlFor={input.id}>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="email"
            id="email"
            placeholder="email"
            validate={required}
          >
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label htmlFor={input.id}>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  </div>
);

export default App;
