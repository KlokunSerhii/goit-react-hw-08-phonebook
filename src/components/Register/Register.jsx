import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import {
  Div,
  Forma,
  Input,
  ButtonSubmit,
  Title,
  Label,
} from './Register.styled';
import { SignupSchemaRegister } from 'options/validForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

function Register() {
  const email = '';
  const password = '';
  const name = '';

  const dispatch = useDispatch();

  const handleSubmitRegister = ({ email, password, name }, { resetForm }) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };

  return (
    <Div>
      <Title>Hello, let's get to know each other</Title>
      <Formik
        initialValues={{ email, password, name }}
        validationSchema={SignupSchemaRegister}
        onSubmit={handleSubmitRegister}
      >
        <Forma>
          <Label>
            <Input type="text" name="name" placeholder="login" />
          </Label>
          <ErrorMessage name="name" />
          <Label>
            <Input type="email" name="email" placeholder="email" />
          </Label>
          <ErrorMessage name="email" />
          <Label>
            <Input type="text" name="password" placeholder="password" />
          </Label>
          <ErrorMessage name="password" />
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
