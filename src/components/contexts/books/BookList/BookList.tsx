import { useModalContext } from 'contexts';
import { Card, CardProps, ModalBook, BookProps } from 'components/structure';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

export const BookList = () => {
  const { showModal, setShowModal } = useModalContext();
  const books: CardProps[] = [];
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
        <Card
          key={book.id}
          id={book.id}
          cardImage={book.cardImage}
          cardTitle={book.cardTitle}
          cardCaptions={book.cardCaptions}
          itemOne={book.itemOne}
          itemTwo={book.itemTwo}
          itemThree={book.itemThree}
          onClick={handleOpenModal}
        />
      ))}
    </S.Wrapper>
  );
};
