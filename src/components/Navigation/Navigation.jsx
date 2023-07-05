// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { MainNav, MainNavLink } from './Navigation.styled';

const Navigation = isLoggedIn => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainNav>
      <MainNavLink to="/">Home</MainNavLink>
      {isLoggedIn && <MainNavLink to="/contacts">Contacts</MainNavLink>}
    </MainNav>
  );
};
export default Navigation;
