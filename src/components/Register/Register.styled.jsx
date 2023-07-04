import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100vh;
`;
export const Title = styled.p`
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  color: #000;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Input = styled.input`
  height: 40px;
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
  &:focus {
    border: 2px solid rgba(255, 191, 0, 0.84);
  }
`;
export const ButtonSubmit = styled.button`
  height: 40px;
  width: 250px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #000000;
  outline: none;
  border-radius: 5px;
  font-size: 30px;
  :hover {
    font-weight: 500;
    color: rgba(255, 191, 0, 0.84);
  }
`;
export const Button = styled(NavLink)`
  margin-top: 15px;
  color: #000000;
  font-size: 16px;
`;
export const Text = styled.span`
  font-weight: 700;

  :hover {
    text-decoration: underline;
    color: rgba(255, 191, 0, 0.84);
  }
`;
