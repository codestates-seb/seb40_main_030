import * as S from './Cards.style';

const Cards = ({ content, setIsOpen }) => {
  const { name, details, image, status } = content;

  return (
    <S.Cards>
      <S.Card>
        <S.Container>
          <S.Image src={image} alt={name} />
        </S.Container>
        <S.Details>
          <h3>{name}</h3>
          <p>{details}</p>
          <p>
            배터리 보유 현황 <span>{status}</span>
          </p>
          <div className='close' onClick={() => setIsOpen(false)}>
            &times;
          </div>
        </S.Details>
      </S.Card>
    </S.Cards>
  );
};

export default Cards;
