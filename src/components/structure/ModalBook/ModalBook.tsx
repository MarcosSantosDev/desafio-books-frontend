import quotesSvg from 'assets/images/icons/quotes.svg';
import vectorSvg from 'assets/images/icons/vector.svg';
import * as S from './ModalBook.styles';

export type BookProps = {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
};

export type ModalBookProps = {
  showModal: boolean;
  toggleModal: () => void;
  book: BookProps;
};

const getAuthors = (authors: string[] = []) => authors.join(', ');

export const ModalBook = ({ toggleModal, showModal, book }: ModalBookProps) => (
  <S.Wrapper showModal={showModal}>
    <S.CloseButton type="button" onClick={toggleModal}>
      <img src={vectorSvg} alt="close modal" />
    </S.CloseButton>
    <S.Container>
      <S.ContentImage>
        <S.ModalImage src={book.imageUrl} alt="book cover" />
      </S.ContentImage>
      <S.ContentInformation>
        <S.ContentHead>
          <h1>{book.title}</h1>
          <p>{getAuthors(book.authors)}</p>
        </S.ContentHead>
        <S.ContentDetails>
          <S.H3>Informações</S.H3>
          <S.Ul>
            <S.Li>
              Pages <span>{book.pageCount} pages</span>
            </S.Li>
            <S.Li>
              Publisher <span>publisher {book.publisher}</span>
            </S.Li>
            <S.Li>
              Publication <span>{book.published}</span>
            </S.Li>
            <S.Li>
              Language <span>{book.language}</span>
            </S.Li>
            <S.Li>
              Original title <span>{book.title}</span>
            </S.Li>
            <S.Li>
              ISBN-10 <span>{book.isbn10}</span>
            </S.Li>
            <S.Li>
              ISBN-13 <span>{book.isbn13}</span>
            </S.Li>
          </S.Ul>
        </S.ContentDetails>
        <S.ContentPublisher>
          <S.H3>{`PUBLISHER'S REVIEW`}</S.H3>
          <p>
            <img src={quotesSvg} alt="quotes" /> {book.description}
          </p>
        </S.ContentPublisher>
      </S.ContentInformation>
    </S.Container>
  </S.Wrapper>
);
