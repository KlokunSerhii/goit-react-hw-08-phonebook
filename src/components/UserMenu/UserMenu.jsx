import React from 'react';
import { Container, ButtonSubmit, Span } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { useAuth } from 'huks/auth';
import { logout } from 'redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Container>
      <Span>Раді вітати, {user.name}</Span>
      <ButtonSubmit type="button" onClick={() => dispatch(logout())}>
        Вийти
      </ButtonSubmit>
    </Container>
  );
}

export default UserMenu;
