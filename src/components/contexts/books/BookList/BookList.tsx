import { Card, CardProps } from 'components/structure/Card/Card';
import bookImageOne from 'assets/images/books/book01.png';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

const book = {
  cardImage: bookImageOne,
  cardTitle: 'Crossing the Chasm',
  cardCaptions: ['Geoffrey A. Moore'],
  itemOne: '150 pages',
  itemTwo: 'Loyola publisher',
  itemThree: 'Published in 2020',
};

const books: CardProps[] = [
  { ...book, id: 1 },
  { ...book, id: 2 },
  { ...book, id: 3 },
  { ...book, id: 4 },
  { ...book, id: 5 },
  { ...book, id: 6 },
  { ...book, id: 7 },
  { ...book, id: 8 },
  { ...book, id: 9 },
  { ...book, id: 10 },
  { ...book, id: 11 },
  { ...book, id: 12 },
];

export const BookList = () => (
  <S.Wrapper>
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
      />
    ))}
  </S.Wrapper>
);
