import React from 'react';
import { Container } from './UserMenu.styled';
// import { useDispatch, useSelector } from 'react-redux';

function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvater;
  return (
    <Container>
      {/* <img src={avatar} alt="" /> */}
      <span>Раді вітати, {}</span>
      <button
      // onClick={dispatch(authOperations.logOut)}
      >
        Вийти
      </button>
    </Container>
  );
}

export default UserMenu;
