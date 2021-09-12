import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 'bookImage bookInformation';
    justify-content: center;
    align-items: center;
    grid-column-gap: 21px;
    padding: 16px;
    max-width: 272px;
    min-height: 160px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
    border-radius: 4px;
  `}
`;

export const ContentBookImage = styled.div`
  grid-area: bookImage;
  width: 81px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookImage = styled.img`
  max-width: 81px;
  max-height: 122px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));

  ${Wrapper}:hover & {
    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  }
`;

export const WrapperMainInformation = styled.div`
  min-height: 68px;
  margin-bottom: 8px;
`;

export const ContentBookInformation = styled.div`
  grid-area: bookInformation;
`;

export const BookTitle = styled.h1`
  word-break: break-all;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`;

export const Ul = styled.ul`
  ${() => css`
    max-width: 138px;
    & > li {
      list-style: none;
      color: #999999;
      font-size: 12px;
      line-height: 20px;
    }

    & > #authorName {
      list-style-position: inside;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      color: #ab2680;
    }
  `}
`;
