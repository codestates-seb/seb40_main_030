import { Content } from '@/@types/index';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { currentLocationState } from '@/recoil/pagesState';
import { FuelTankImg } from '@/assets';

import * as S from './Cards.style';
import { SyntheticEvent } from 'react';

const Cards = ({
  content,
  setIsOpen,
}: {
  content: Content;
  setIsOpen: (arg: boolean) => void;
}) => {
  const setCurrentLocation = useSetRecoilState(currentLocationState);
  const { name, details, photoURL, batteries, id, location } = content;

  const imageOnErrorHandler = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = FuelTankImg;
    event.currentTarget.className = 'error';
  };

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
              width={'100%'}
              src={photoURL}
              alt={name}
              onError={imageOnErrorHandler}
              style={{ borderRadius: '20px 20px 0 0' }}
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
