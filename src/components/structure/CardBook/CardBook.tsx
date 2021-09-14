import { MouseEventHandler } from 'react';
import * as S from './CardBook.styles';

export type CardBookProps = {
  id: string;
  imageUrl: string;
  title: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export const CardBook = ({
  id,
  imageUrl,
  title,
  pageCount,
  publisher,
  published,
  authors = [],
  onClick,
}: CardBookProps) => (
  <S.Wrapper onClick={onClick}>
    <S.ContentCardImage>
      <S.CardImage src={imageUrl} alt="book cover" />
    </S.ContentCardImage>
    <S.ContentCardInformation>
      <S.WrapperMainInformation>
        <S.CardTitle>{title}</S.CardTitle>
        <S.Ul>
          {authors.map((author) => (
            <li id="author" key={`${author}-${id}`}>
              {author}
            </li>
          ))}
        </S.Ul>
      </S.WrapperMainInformation>
      <S.Ul>
        <li key={`page-count-${id}`}>{pageCount} pages</li>
        <li key={`publisher-${id}`}>{publisher} publisher</li>
        <li key={`published-${id}`}>Published in {published}</li>
      </S.Ul>
    </S.ContentCardInformation>
  </S.Wrapper>
);
