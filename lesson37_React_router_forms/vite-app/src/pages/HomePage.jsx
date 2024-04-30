import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import {Fragment} from "react";

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Title is required';
  }


  if (values.userId > 100) {
    errors.userId = 'User Id must be less the 100';
  }

  return errors;
}


export default function HomePage() {
  return <>
    <h2>Welcome to our super site!</h2>
    <Link to='/todos' >Todos</Link><br />
    <div>
      <Formik
        initialValues={{
          title: '',
          body: '',
          userId: 0
        }}

        validate={validate}

        onSubmit={async (values) => {
          console.log('onSubmit', values);

          const resp = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

          const data = await resp.json();
          console.log('Response:', data);
        }}
      >
        {({errors, isSubmitting}) => {
          const showErrors = !!Object.keys(errors).length;
          const errorsComponents = Object.keys(errors).map(err => <Fragment key={err} >
            <li style={{color: 'red'}}>{errors[err]}</li><br />
          </Fragment>
          );


          return <Form>
            <label htmlFor="title">Title </label>
            <Field id="title" name="title" placeholder="title" /><br />

            <label htmlFor="bodyInput">Body </label>
            <Field id="bodyInput" name="body" placeholder="body" /><br />

            <label htmlFor="userId">User Id </label>
            <Field id="userId" name="userId" placeholder="userId" type="number"/><br />

            {showErrors && <ul>{errorsComponents}</ul>}

            <br />
            <button type="submit" disabled={isSubmitting}>Submit</button>

          </Form>
        }}

      </Formik>
    </div>
  </>
}