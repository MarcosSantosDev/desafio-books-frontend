import styled, { css } from 'styled-components';
import { ModalBookProps } from './ModalBook';

type WrapperProps = Pick<ModalBookProps, 'showModal'>;

const modalModifiers = {
  showModal: () => css`
    opacity: 1;
    visibility: visible;
    transition: opacity 0.2s linear, visibility 0s 0s;
  `,
  scrollModal: () => css`
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 1em;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px transparent;
    }
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 30px;
      background-color: #ab2680;
      outline: 0px;
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ showModal }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;
    z-index: 100;
    ${showModal && modalModifiers.showModal()};
  `}
`;

export const CloseButton = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 8px;
    height: 8px;
  }
`;

export const Container = styled.div`
  position: fixed;
  display: grid;
  grid-template-areas: 'image information';
  grid-template-columns: repeat(2, minmax(0px, 349px));
  grid-column-gap: 48px;
  justify-content: center;
  align-items: flex-start;
  padding: 46px;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  max-width: 900px;
  max-height: 630px;
  width: calc(100vw - 20%);
  height: 100%;
  ${modalModifiers.scrollModal()};

  @media (max-width: 600px) {
    top: 65px;
    grid-template-areas:
      'image image'
      'information information';
    max-height: calc(100vh - 10%);
    padding: 24px;
  }
`;

export const ContentImage = styled.div`
  grid-area: image;
  position: sticky;
  top: 10px;

  @media (max-width: 600px) {
    position: static;
  }
`;

export const ModalImage = styled.img`
  max-width: 349px;
  max-height: 513px;
  height: 100%;
  width: 100%;
  object-fit: fill;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`;

export const ContentInformation = styled.div`
  grid-area: information;
`;

export const ContentHead = styled.div`
  ${({ theme }) => css`
    & > h1 {
      font-family: ${theme.typography.family.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 40px;
      color: #333333;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    & > p {
      font-family: ${theme.typography.family.primary};
      font-size: 12px;
      line-height: 20px;
      color: #ab2680;
    }
  `};
`;

export const ContentDetails = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-row-gap: 15px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const H3 = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: #333333;
  `}
`;

export const Ul = styled.div`
  list-style: none;
  max-width: 100%;
`;

export const Li = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    font-family: ${theme.typography.family.primary};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    color: #333333;

    & span {
      text-transform: none;
      font-weight: normal;
      text-align: right;
      color: #999999;
    }
  `}
`;

export const ContentPublisher = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px auto;

  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    color: #999999;

    img {
      margin-right: 5px;
    }
  }
`;
