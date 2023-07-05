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

function Register() {
  const email = '';
  const password = '';
  const login = '';

  const handleSubmitRegister = ({ email, password, login }, { resetForm }) => {
    resetForm();
  };

  return (
    <Div>
      <Title>Давайте знайомитись</Title>
      <Formik
        initialValues={{ email, password, login }}
        validationSchema={SignupSchemaRegister}
        onSubmit={handleSubmitRegister}
      >
        <Forma>
          <Label>
            <Input type="text" name="login" placeholder="login" />
          </Label>
          <ErrorMessage name="login" />
          <Label>
            <Input type="email" name="email" placeholder="email" />
          </Label>
          <ErrorMessage name="email" />
          <Label>
            <Input type="text" name="password" placeholder="password" />
          </Label>
          <ErrorMessage name="password" />
          <ButtonSubmit type="submit">Зареєструватися</ButtonSubmit>
        </Forma>
      </Formik>
    </Div>
  );
}

export default Register;
