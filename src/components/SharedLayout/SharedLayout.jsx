import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import background from '../../img/BG.jpg';
import AppBar from 'components/Appbar/AppBar';

function SharedLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        ackgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
