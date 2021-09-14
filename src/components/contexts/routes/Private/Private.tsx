import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const userName = getUserName();

  const handleLogout = () => {
    removeClaims();
    navigate('/login');
  };

  return (
    <S.Wrapper>
      <S.BackgroundOne />
      <S.BackgroundTwo />
      <S.Container>
        <Navbar userName={userName} logout={handleLogout} />
        {children}
      </S.Container>
    </S.Wrapper>
  );
};
