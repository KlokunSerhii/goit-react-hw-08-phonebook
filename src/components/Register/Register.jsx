import React from 'react';
import { Formik } from 'formik';
import {
  Div,
  Form,
  Input,
  ButtonSubmit,
  Title,
  Button,
  Text,
} from './Register.styled';

import background from '../../img/BGregister.jpg';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <Div
      style={{
        backgroundImage: `url(${background})`,
        ackgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Title>Давайте знайомитись</Title>
      <Formik initialValues={{ email: '', password: '', login: '' }}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Input
              type="login"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <ButtonSubmit type="submit">
              <NavLink to="contacts">Зареєструватися</NavLink>
            </ButtonSubmit>
            <Button to="/">
              Є акаунт?<Text> Увійти</Text>
            </Button>
          </Form>
        )}
      </Formik>
    </Div>
  );
}

export default Register;
