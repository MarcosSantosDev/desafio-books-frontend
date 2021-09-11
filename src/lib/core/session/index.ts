const USER_ID = '@user_id';

export const getUserId = () => localStorage.getItem(USER_ID);

export const removeClaims = () => localStorage.clear();

export const isAuthenticated = () => getUserId() !== null;
