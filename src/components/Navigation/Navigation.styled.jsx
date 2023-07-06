import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MainNavLink = styled(NavLink)`
  margin: 0px;
  margin-left: 28px;
  padding: 5px;
  text-decoration: none;
  font-weight: 800;
  font-size: 24px;
  color: #4b0082;

  :hover,
  :focus {
    color: rgba(255, 191, 0, 0.84);
  }
`;
