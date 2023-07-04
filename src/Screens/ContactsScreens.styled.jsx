import styled from 'styled-components';

export const TitleList = styled.h1`
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  color: #fff;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding: 0 10px;

  padding-bottom: 20px;
  border: 1px solid;
  border-radius: 10px;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  border: none;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 100%,
    rgba(148, 187, 233, 1) 100%
  );
  :hover {
    box-shadow: 10px 17px 36px -11px rgba(0, 51, 255, 0.84);
    fill: #454141;
  }
  svg {
    width: 25px;
    height: 25px;
    color: rgb(152, 140, 140);
    &: hover {
      color: #454141;
    }
  }
`;
export const DivFlex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;
