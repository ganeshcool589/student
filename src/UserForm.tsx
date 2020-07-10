import React from 'react';
import { Field, reduxForm } from 'redux-form';

const UserForm = (props: any) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="userForm">
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="input mb20"
          />
        </div>
      </div>
      
      <div>
        <label>Street Number/Name</label>
        <div>
          <Field
            name="street"
            component="input"
            type="text"
            placeholder="Street"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <label>City</label>
        <div>
          <Field
            name="city"
            component="input"
            type="text"
            placeholder="city"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <label>Phone Number</label>
        <div>
          <Field
            name="phone"
            component="input"
            type="text"
            placeholder="Phone number"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <label>GPA</label>
        <div>
          <Field
            name="gpa"
            component="input"
            type="text"
            placeholder="gpa"
            className="input mb20"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting} className="mr20">Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'student',
})(UserForm);
