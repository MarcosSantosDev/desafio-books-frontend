import { Helmet } from 'react-helmet-async';
import * as CC from 'components/contexts';

export const Books = () => (
  <>
    <Helmet title="Books - Ioasys books" />
    <CC.BookList />
  </>
);
