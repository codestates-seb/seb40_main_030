import { SyntheticEvent, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { Content } from '@/@types/index';
import { FuelTankImg } from '@/assets';
import { currentLocationState } from '@/recoil/pagesState';

import * as S from './Cards.style';

interface Props {
  content: Content;
  setIsOpen: (arg: boolean) => void;
}

type ImageErrorEvent = SyntheticEvent<HTMLImageElement, Event>;

function Cards({ content, setIsOpen }: Props): ReactElement {
  const setCurrentLocation = useSetRecoilState(currentLocationState);
  const { name, details, photoURL, batteries, id, location } = content;

  const imageOnErrorHandler = (event: ImageErrorEvent) => {
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
              width='100%'
              src={photoURL}
              alt={name}
              onError={imageOnErrorHandler}
              style={{
                borderRadius: '20px 20px 0 0',
              }}
            />
          </S.Container>
        </Link>
        <S.Details>
          <h3>{name}</h3>
          <p>{details}</p>
          <p>
            배터리 보유 현황 <span>{batteries?.length}</span>
          </p>
          <button
            type='button'
            className='close'
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </S.Details>
      </S.Card>
    </S.CardWrapper>
  );
}

export default Cards;
