import styled from 'styled-components';
import { Form, Field } from 'formik';

const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  margin-top: 92px;
  padding: 20px 20px 80px 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Input = styled(Field)`
  width: 370px;
  height: 40px;
  font-size: 16px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  color: #4b0082;
  outline: none;
  &:focus {
    border: 2px solid rgba(255, 191, 0, 0.84);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: none;
  svg {
    width: 35px;
    height: 35px;
    color: #4b0082;
    &: hover {
      color: #8b008b;
    }
  }
`;

export { Forma, Button, Input, Label };
