import { Helmet } from 'react-helmet-async';
import { BookList } from 'components/contexts/books';

export const Books = () => (
  <>
    <Helmet title="Books - Ioasys books" />
    <BookList />
  </>
);
