import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, 272px);
    grid-gap: 16px;
    justify-content: left;

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, 288px);
      justify-content: center;
    }
  `}
`;
