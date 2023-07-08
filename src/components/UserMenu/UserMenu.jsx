import React from 'react';
import {
  Container,
  ButtonSubmit,
  Span,
  Icon,
  UserName,
} from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { useAuth } from 'huks/auth';
import { logout } from 'redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Container>
      <Span>
        Hello,
        <Icon /> <UserName>{user.name}</UserName>
      </Span>
      <ButtonSubmit type="button" onClick={() => dispatch(logout())}>
        Logout
      </ButtonSubmit>
    </Container>
  );
}

export default UserMenu;
