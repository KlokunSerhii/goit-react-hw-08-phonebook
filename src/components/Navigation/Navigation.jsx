import { MainNav, MainNavLink } from './Navigation.styled';
import { useAuth } from 'huks/auth';
const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainNav>
      <MainNavLink to="/">Home</MainNavLink>
      {isLoggedIn && <MainNavLink to="/contacts">Contacts</MainNavLink>}
    </MainNav>
  );
};
export default Navigation;
