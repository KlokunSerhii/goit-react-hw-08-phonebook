import { Route, Routes } from 'react-router-dom';

import ContactsViews from 'Views/ContactsViews';
import LoginViews from 'Views/LoginViews';
import RegisterViews from 'Views/RegisterViews';
import SharedLayout from './SharedLayout/SharedLayout';
import HomeViews from 'Views/HomeViews';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'huks/auth';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeViews />} />
          <Route path="/login" element={<LoginViews />} />
          <Route path="/register" element={<RegisterViews />} />
          <Route path="/contacts" element={<ContactsViews />} />
        </Route>
      </Routes>
    )
  );
};

export default App;
