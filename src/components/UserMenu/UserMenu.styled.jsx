import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonSubmit = styled.button`
  margin: 0px 28px;
  padding: 5px;
  text-decoration: none;
  font-weight: 800;
  font-size: 24px;
  color: #4b0082;
  :hover {
    color: rgba(255, 191, 0, 0.84);
  }
`;
export const Span = styled.span`
  display: flex;
  margin: 0px;
  text-decoration: none;
  font-weight: 800;
  font-size: 24px;
  color: #4b0082;
`;
export const Icon = styled(BsPersonCircle)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  color: rgba(255, 191, 0, 0.84);
`;
export const UserName = styled.p`
  color: rgba(255, 191, 0, 0.84);
`;
