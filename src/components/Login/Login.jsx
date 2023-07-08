import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Div, Forma, Input, ButtonSubmit, Title, Label } from './Login.styled';
import { SignupSchemaLogin } from 'options/validForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

function Login() {
  const email = '';
  const password = '';
  const dispatch = useDispatch();

  const handleSubmitLogin = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <Div>
      <Title>Glad to see you again :)</Title>
      <Formik
        initialValues={{ email, password }}
        validationSchema={SignupSchemaLogin}
        onSubmit={handleSubmitLogin}
      >
        <Forma>
          <Label>
            <Input type="email" name="email" placeholder="email" />
          </Label>

          <ErrorMessage name="email" />

          <Label>
            <Input type="password" name="password" placeholder="password" />
          </Label>

          <ErrorMessage name="password" />

          <ButtonSubmit type="submit">LogIn</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Login;
