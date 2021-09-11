import styled, { css } from 'styled-components';
import { Button } from 'components/structure';
import backgroundMobileLogin from 'assets/images/account/background_mobile-login.png';
import backgroundLogin from 'assets/images/account/background-login.png';

const wrapperBackgroundStyled = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
`;

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 115px 368px 1fr;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  padding: 0px 16px;
  background: url(${backgroundLogin});
  ${wrapperBackgroundStyled}

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto 1fr;
    background: url(${backgroundMobileLogin});
    ${wrapperBackgroundStyled}
  }
`;

export const FormContainer = styled.aside`
  position: relative;
  grid-column: 2 / 3;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: minmax(240px, 432px);
  justify-content: right;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Form = styled.form``;

export const HeadingContent = styled.div`
  display: flex;
  max-width: 100%;
  height: 86px;
`;

export const Img = styled.img`
  width: 104.04px;
  height: 36px;
`;

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 28px;
  line-height: 40px;
  font-weight: 300;
  margin-left: 16.6px;
`;

export const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
`;

export const BoxRelative = styled.div`
  position: relative;
`;

export const ButtonLogin = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
`;
