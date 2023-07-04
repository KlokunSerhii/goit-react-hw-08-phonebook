import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <main>
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default SharedLayout;
