import { useModalContext } from 'contexts';
import {
  CardBook,
  CardBookProps,
  ModalBook,
  BookProps,
} from 'components/structure';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

export const BookList = () => {
  const { showModal, setShowModal } = useModalContext();
  const books: CardBookProps[] = [];
  const book: BookProps | undefined = undefined;

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Wrapper>
      {book && (
        <ModalBook
          showModal={showModal}
          toggleModal={handleOpenModal}
          book={book}
        />
      )}
      {books.map((book) => (
        <CardBook
          key={book.id}
          id={book.id}
          imageUrl={book.imageUrl}
          title={book.title}
          authors={book.authors}
          pageCount={book.pageCount}
          publisher={book.publisher}
          published={book.published}
          onClick={handleOpenModal}
        />
      ))}
    </S.Wrapper>
  );
};
