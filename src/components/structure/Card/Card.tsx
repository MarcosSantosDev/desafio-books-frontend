import * as S from './Card.styles';

export type CardProps = {
  id: number;
  cardImage: string;
  cardTitle: string;
  cardCaptions: string[];
  itemOne: string;
  itemTwo: string;
  itemThree: string;
};

export const Card = ({
  cardImage,
  cardTitle,
  itemOne,
  itemTwo,
  itemThree,
  cardCaptions = [],
}: CardProps) => (
  <S.Wrapper>
    <S.ContentCardImage>
      <S.CardImage src={cardImage} alt="ilustration" />
    </S.ContentCardImage>
    <S.ContentCardInformation>
      <S.WrapperMainInformation>
        <S.CardTitle>{cardTitle}</S.CardTitle>
        <S.Ul>
          {cardCaptions.map((captionItem) => (
            <li id="captionItem" key={`${cardTitle}-${captionItem}`}>
              {captionItem}
            </li>
          ))}
        </S.Ul>
      </S.WrapperMainInformation>
      <S.Ul>
        <li key={`item-one-${cardTitle}`}>{itemOne} </li>
        <li key={`item-two-${cardTitle}`}>{itemTwo}</li>
        <li key={`item-three-${cardTitle}`}>{itemThree}</li>
      </S.Ul>
    </S.ContentCardInformation>
  </S.Wrapper>
);
