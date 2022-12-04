import { CartIcon } from '@/assets';
import { DEFAULT_STATION_IMAGE } from '@/constants/admin';

import * as S from './Station.style';
import StationDetails from './StationDetails';
import StationStatusTitle from './StationStatusTitle';

const StationCard = ({ openModalHandler, imgUrl, details, batteryCount }) => {
  const errorHandler = (e) => {
    e.target.src = DEFAULT_STATION_IMAGE;
  };
  return (
    <S.StationContainer onClick={openModalHandler}>
      <S.LeftAlignWrapper>
        <S.StationImgContainer>
          <img
            src={imgUrl || DEFAULT_STATION_IMAGE}
            onError={errorHandler}
          ></img>
        </S.StationImgContainer>
        <StationDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <StationStatusTitle batteryCount={batteryCount} />
        <S.StationLocation>
          <CartIcon width='15px' height='15px' />
          <div>{`${batteryCount}개`}</div>
          {/* <StationStatus batteryCount={batteryCount} /> */}
        </S.StationLocation>
      </S.RightAlignWrapper>
    </S.StationContainer>
  );
};

export default StationCard;
