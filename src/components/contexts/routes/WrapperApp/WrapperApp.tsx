import * as CC from 'components/contexts';
import * as S from './WrapperApp.styles';

export type WrapperAppProps = {
  children?: React.ReactChild;
};

export const WrapperApp = ({ children }: WrapperAppProps) => (
  <S.Wrapper>
    <S.Container>
      <CC.Navbar />
      {children}
    </S.Container>
  </S.Wrapper>
);
