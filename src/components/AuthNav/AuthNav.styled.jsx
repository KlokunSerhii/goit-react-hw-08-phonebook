import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  margin: 0;
  margin-left: 38px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  border-radius: 6px;
  color: #4b0082;
  :last-child {
    margin-right: 28px;
  }

  :hover,
  :focus {
    color: rgba(255, 191, 0, 0.84);
  }
`;
