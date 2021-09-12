import styled, { css } from 'styled-components';
import background1 from 'assets/images/home/background-one.png';
import background2 from 'assets/images/home/background-two.png';

const backgroundStyled = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const backgrounRotate = css`
  transform: rotate(0deg);
`;

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    width: 100vw;
    height: 100vh;
  `}
`;

export const BackgroundOne = styled.div`
  ${() => css`
    ${backgroundStyled}
    background-image: url(${background1});

    @media (max-width: 600px) {
      ${backgrounRotate}
    }
  `}
`;

export const BackgroundTwo = styled.div`
  ${() => css`
    ${backgroundStyled}
    background-image: url(${background2});
    opacity: 0.5;

    @media (max-width: 600px) {
      ${backgrounRotate}
    }
  `}
`;

export const Comtainer = styled.div`
  ${() => css`
    position: relative;
    width: calc(100vw - 230px);
    height: 100vh;
    margin: 0 auto;

    @media (max-width: 600px) {
      width: 100%;
      padding: 0 20px;
    }
  `}
`;
