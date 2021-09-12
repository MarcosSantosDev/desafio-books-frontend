import { getUserInfo, removeClaims } from 'lib/core/session';
import { Navbar } from 'components/contexts/general';
import * as S from './Private.styles';

export type PrivateProps = {
  children?: React.ReactChild;
};

const getUserName = () => {
  const { user_name } = getUserInfo();
  return user_name;
};

export const Private = ({ children }: PrivateProps) => {
  const userName = getUserName();

  const handleLogout = () => {
    removeClaims();
  };

  return (
    <S.Wrapper>
      <S.BackgroundOne />
      <S.BackgroundTwo />
      <S.Comtainer>
        <Navbar userName={userName} logout={handleLogout} />
        {children}
      </S.Comtainer>
    </S.Wrapper>
  );
};
