import logoutIcon from 'assets/images/icons/logout.svg';
import IoasysLogo from 'assets/images/ioasys/logo-black.png';
import * as S from './Navbar.styles';

export type NavbarProps = {
  children?: React.ReactChild;
  userName: string;
  logout: () => void;
};

export const Navbar = ({ userName, logout }: NavbarProps) => (
  <S.Wrapper>
    <S.LogoContent>
      <S.Img src={IoasysLogo} alt="logo ioasys books" />{' '}
      <S.TextContent>Books</S.TextContent>
    </S.LogoContent>
    <S.ContentActions>
      <S.WelcomeUser>
        Welcome, <strong>{userName}!</strong>
      </S.WelcomeUser>{' '}
      <S.LogoutButton type="button" id="btn__logout" onClick={logout}>
        <S.LogoutIcon src={logoutIcon} alt="Click here to logout!" />{' '}
      </S.LogoutButton>
    </S.ContentActions>
  </S.Wrapper>
);
