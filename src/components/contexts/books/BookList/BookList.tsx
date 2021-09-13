import { Card } from 'components/structure/Card/Card';
import bookImageOne from 'assets/images/books/book01.png';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

const book = {
  cardImage: bookImageOne,
  bookName: 'Crossing the Chasm',
  bookAuthors: ['Geoffrey A. Moore'],
  totalPages: '150 pages',
  bookPublisher: 'Loyola publisher',
  publicationDate: 'Published in 2020',
};

const books = [
  book,
  book,
  book,
  book,
  book,
  book,
  book,
  book,
  book,
  book,
  book,
  book,
];

export const BookList = () => (
  <S.Wrapper>
    {books.map((book, index) => (
      <Card
        key={`${book.bookName}_${book.bookAuthors}_${index}`}
        cardImage={book.cardImage}
        bookName={book.bookName}
        bookAuthors={book.bookAuthors}
        totalPages={book.totalPages}
        bookPublisher={book.bookPublisher}
        publicationDate={book.publicationDate}
      />
    ))}
  </S.Wrapper>
);
