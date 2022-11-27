import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { currentLocationState } from '@/recoil/pagesState';

import * as S from './Cards.style';

const Cards = ({ content, setIsOpen }) => {
  const setCurrentLocation = useSetRecoilState(currentLocationState);
  const { name, details, photoURL, batteries, id, location } = content;

  return (
    <S.CardWrapper>
      <S.Card>
        <Link to={`/rental/${id}`}>
          <S.Container
            onClick={() => {
              setIsOpen(false);
              setCurrentLocation(location);
            }}
          >
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
    </S.CardWrapper>
  );
};

export default Cards;
