import { useNavigate } from 'react-router-dom';
import { clearClaims } from 'lib/core/session';
import { useAuthContext } from 'contexts/AuthProvider/context';
import { Navbar } from 'components/contexts/general';
import * as S from './Private.styles';

export type PrivateProps = {
  children?: React.ReactChild;
};

export const Private = ({ children }: PrivateProps) => {
  const navigate = useNavigate();
  const [authState] = useAuthContext();

  const userName = authState.data.user?.name || '';

  const handleLogout = () => {
    clearClaims();
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
