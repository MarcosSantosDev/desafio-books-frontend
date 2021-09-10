import * as S from './BookList.styles';

export type BookListProps = {
  children?: React.ReactChild;
};

export const BookList = () => (
  <S.Wrapper>
    <h2>Book List</h2>
  </S.Wrapper>
);
