import { useModalContext } from 'contexts';
import * as CS from 'components/structure';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

export const BookList = () => {
  const { showModal, setShowModal } = useModalContext();
  const books: CS.CardBookProps[] = [];
  const book: CS.BookProps | undefined = undefined;

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  return (
    <S.Wrapper>
      {book && (
        <CS.ModalBook
          showModal={showModal}
          toggleModal={handleOpenModal}
          book={book}
        />
      )}
      {books.map((book) => (
        <CS.CardBook
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
