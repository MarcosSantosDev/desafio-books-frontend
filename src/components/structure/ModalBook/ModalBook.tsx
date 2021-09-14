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
              Páginas <span>{book.pageCount} páginas</span>
            </S.Li>
            <S.Li>
              Editora <span>Editora {book.publisher}</span>
            </S.Li>
            <S.Li>
              Publicação <span>{book.published}</span>
            </S.Li>
            <S.Li>
              Idioma <span>{book.language}</span>
            </S.Li>
            <S.Li>
              Título Original <span>{book.title}</span>
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
          <S.H3>RESENHA DA EDITORA</S.H3>
          <p>
            <img src={quotesSvg} alt="quotes" /> {book.description}
          </p>
        </S.ContentPublisher>
      </S.ContentInformation>
    </S.Container>
  </S.Wrapper>
);
