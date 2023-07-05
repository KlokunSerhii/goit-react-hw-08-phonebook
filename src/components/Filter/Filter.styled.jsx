import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 15px;
  font-size: 24px;
  font-weight: 600;
  svg {
    position: absolute;
    margin-left: 15px;
    width: 25px;
    height: 25px;
    color: rgb(0, 0, 0, 0.5);
  }
`;
export const Input = styled.input`
  width: 370px;
  height: 40px;
  padding: 10px 45px;
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 2px solid rgba(255, 191, 0, 0.84);
  }
`;
