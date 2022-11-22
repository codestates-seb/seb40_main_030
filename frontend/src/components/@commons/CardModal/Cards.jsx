import { Link } from 'react-router-dom';

import * as S from './Cards.style';

const Cards = ({ content, setIsOpen }) => {
  const { name, details, photoURL, batteries, id } = content;

  // 예약시간을 주소값에 포함?

  return (
    <S.Cards>
      <S.Card>
        <Link to={`/rental/${id}`}>
          <S.Container>
            <S.Image src={photoURL} alt={name} />
          </S.Container>
        </Link>
        <S.Details>
          <h3>{name}</h3>
          <p>{details}</p>
          <p>
            배터리 보유 현황 <span>{batteries?.length}</span>
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
