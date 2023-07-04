import ContactsScreen from 'Screens/ContactsScreen';
import LoginScreen from 'Screens/LoginScreen';
import RegisterScreen from 'Screens/RegisterScreen';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LoginScreen />} />
        <Route path="register" element={<RegisterScreen />} />
      </Route>
      <Route path="/contacts" element={<ContactsScreen />} />
    </Routes>
  );
};

export default App;
