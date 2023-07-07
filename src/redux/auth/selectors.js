export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;     
export const selectIsFetchingCurrentUser = state => state.auth.isRefreshing;
