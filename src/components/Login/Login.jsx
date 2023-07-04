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
} from './Login.styled';
import background from '../../img/BG.jpg';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <Div
      style={{
        backgroundImage: `url(${background})`,
        ackgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Title>Раді знову Вас бачити :)</Title>
      <Formik initialValues={{ email: '', password: '' }}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
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
              <NavLink to="contacts">Увійти</NavLink>
            </ButtonSubmit>
            <Button to="register">
              Немає акаунту?<Text> Зареєструватися</Text>
            </Button>
          </Form>
        )}
      </Formik>
    </Div>
  );
}

export default Login;
