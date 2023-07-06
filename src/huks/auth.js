import { useSelector } from 'react-redux';
import {
  selectIsFetchingCurrentUser,
  selectUserName,
  selectIsLoggedIn,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsFetchingCurrentUser),
    user: useSelector(selectUserName),
  };
};
