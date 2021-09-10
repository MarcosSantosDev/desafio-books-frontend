import styled, { css } from 'styled-components';

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
  `}
`;
