import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { FuelTankImg } from '@/assets';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './Cards.style';

type Props = {
  content: {
    name?: string;
    details: string;
    photoURL: string;
    batteries: string;
    id: number | string;
    location: number | string;
  };
  setIsOpen: (arg: boolean) => void;
};

const Cards = ({ content, setIsOpen }: Props) => {
  const setCurrentLocation: (location: any) => void =
    useSetRecoilState(currentLocationState);
  const { name, details, photoURL, batteries, id, location } = content;

  return (
    <S.CardWrapper>
      <S.Card
        onClick={() => {
          setIsOpen(false);
          setCurrentLocation(location);
        }}
      >
        <Link to={`/rental/${id}`}>
          <S.Container>
            <S.Image
              src={photoURL}
              alt={name}
              onError={(e: any) => (e.target.src = FuelTankImg)}
            />
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
