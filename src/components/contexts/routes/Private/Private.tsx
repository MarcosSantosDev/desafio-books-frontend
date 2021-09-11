import { Navbar } from 'components/contexts/general';
import * as S from './Private.styles';

export type PrivateProps = {
  children?: React.ReactChild;
};

export const Private = ({ children }: PrivateProps) => {
  const userName = '';
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleLogout = () => {};

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
