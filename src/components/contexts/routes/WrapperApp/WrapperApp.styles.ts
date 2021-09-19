import styled, { css } from 'styled-components';
import background from 'assets/images/home/background.png';

const backgroundImage = css`
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${background});
`;

const backgroundRotate = css`
  transform: rotate(0deg);
`;

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    max-height: 100%;
    ${backgroundImage}

    @media (max-width: 600px) {
      ${backgroundRotate}
    }
  `}
`;

export const Container = styled.div`
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
