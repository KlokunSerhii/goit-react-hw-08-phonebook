import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Div, Forma, Input, ButtonSubmit, Title, Label } from './Login.styled';
import { SignupSchemaLogin } from 'options/validForm';

function Login() {
  const email = '';
  const password = '';

  const handleSubmitLogin = ({ email, password }, { resetForm }) => {
    console.log(email);
    console.log(password);
    resetForm();
  };
  return (
    <Div>
      <Title>Раді знову Вас бачити :)</Title>
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

          <ButtonSubmit type="submit">Увійти</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Login;
