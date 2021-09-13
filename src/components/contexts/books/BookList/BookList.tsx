import { Card, CardProps } from 'components/structure/Card/Card';
import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

const books: CardProps[] = [];

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
