export type UserProps = {
  uuid: string;
  user_name: string;
  user_mail: string;
};

export const USER_ID = '@user_id';
export const USER_INFO = '@user_info';

const EMPTY_USER_INFO: UserProps = {
  uuid: '',
  user_name: '',
  user_mail: '',
};

export const getUserId = () => localStorage.getItem(USER_ID);

export const getUserInfo = (): UserProps => {
  const userInfoStr = localStorage.getItem(USER_INFO);
  const userInfo = userInfoStr ? JSON.parse(userInfoStr) : EMPTY_USER_INFO;

  return userInfo;
};

export const setClaims = (user: UserProps) => {
  if (user.uuid) {
    const userInfo: UserProps = {
      uuid: user.uuid,
      user_name: user.user_name,
      user_mail: user.user_mail,
    };

    localStorage.setItem(USER_ID, user.uuid);
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
  }
};

export const removeClaims = () => localStorage.clear();

export const isAuthenticated = () => getUserId() !== null;
