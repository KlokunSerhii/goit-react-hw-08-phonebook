import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 90vh;
`;
export const Title = styled.p`
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  color: #4b0082;
`;

export const Forma = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
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
export const ButtonSubmit = styled.button`
  height: 40px;
  width: 250px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #4b0082;
  outline: none;
  border-radius: 5px;
  font-size: 30px;
  :hover {
    font-weight: 500;
    color: rgba(255, 191, 0, 0.84);
  }
`;
