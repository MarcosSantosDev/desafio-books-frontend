import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import * as S from './NotFound.styles';

export const NotFound = () => {
  const navigate = useNavigate();
  const goToBooks = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet title="404 | Not found" />
      <S.Wrapper>
        <S.Container>
          <S.Circle>!</S.Circle>
          <S.Heading>404 | Not found</S.Heading>
          <S.Button type="button" onClick={goToBooks}>
            Go Books
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
