import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  width: 600px;
  margin-top: 50px;
  padding: 0 20px;
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  align-items: center;
  color: #4b0082;
`;
export const Button = styled.button`
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
