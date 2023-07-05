import React from 'react';
import { AuthNavLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <div>
      <div>
        <AuthNavLink to="/register">Registration</AuthNavLink>
        <AuthNavLink to="/login">Login</AuthNavLink>
      </div>
    </div>
  );
}

export default AuthNav;
