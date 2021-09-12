import * as S from './Card.styles';

export type CardProps = {
  cardImage: string;
  bookName: string;
  bookAuthors: string[];
  totalPages: string;
  bookPublisher: string;
  publicationDate: string;
};

export const Card = ({
  cardImage,
  bookName,
  totalPages,
  bookPublisher,
  publicationDate,
  bookAuthors = [],
}: CardProps) => (
  <S.Wrapper>
    <S.ContentBookImage>
      <S.BookImage src={cardImage} alt="book cover" />
    </S.ContentBookImage>
    <S.ContentBookInformation>
      <S.WrapperMainInformation>
        <S.BookTitle>{bookName}</S.BookTitle>
        <S.Ul>
          {bookAuthors.map((author) => (
            <li id="authorName" key={`${author}-${bookName}`}>
              {author}
            </li>
          ))}
        </S.Ul>
      </S.WrapperMainInformation>
      <S.Ul>
        <li key={`total-pages-${bookName}`}>{totalPages} </li>
        <li key={`book-publisher-${bookName}`}>{bookPublisher}</li>
        <li key={`publication-date-${bookName}`}>{publicationDate}</li>
      </S.Ul>
    </S.ContentBookInformation>
  </S.Wrapper>
);
