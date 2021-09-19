import { useNavigate } from 'react-router-dom';
import { getUserInfo, removeClaims } from 'lib/core/session';
import logoutIcon from 'assets/images/icons/logout.svg';
import IoasysLogo from 'assets/images/ioasys/logo-black.png';
import * as S from './Navbar.styles';

export type NavbarProps = {
  children?: React.ReactChild;
  userName: string;
  logout: () => void;
};

const getUserName = () => {
  const { user_name } = getUserInfo();
  return user_name;
};

export const Navbar = () => {
  const navigate = useNavigate();
  const userName = getUserName();

  const handleLogout = () => {
    removeClaims();
    navigate('/login');
  };

  return (
    <S.Wrapper>
      <S.LogoContent>
        <S.Img src={IoasysLogo} alt="logo ioasys books" />{' '}
        <S.TextContent>Books</S.TextContent>
      </S.LogoContent>
      <S.ContentActions>
        <S.WelcomeUser>
          Welcome, <strong>{userName}!</strong>
        </S.WelcomeUser>{' '}
        <S.LogoutButton type="button" id="btn__logout" onClick={handleLogout}>
          <S.LogoutIcon src={logoutIcon} alt="Click here to logout!" />{' '}
        </S.LogoutButton>
      </S.ContentActions>
    </S.Wrapper>
  );
};
