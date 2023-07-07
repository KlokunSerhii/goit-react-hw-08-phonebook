import { Route, Routes } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import ContactsViews from 'Views/ContactsViews';
import LoginViews from 'Views/LoginViews';
import RegisterViews from 'Views/RegisterViews';
import SharedLayout from './SharedLayout/SharedLayout';
import HomeViews from 'Views/HomeViews';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'huks/auth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeViews />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectto="/contacts" component={LoginViews} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectto="/contacts" component={RegisterViews} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectto="/login" component={ContactsViews} />
          }
        />
        <Route path="*" element={<div>NotFound </div>} />
      </Route>
    </Routes>
  );
};

export default App;
