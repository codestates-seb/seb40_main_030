import { CartIcon } from '@/assets';

import * as S from './Station.style';
import StationDeleteButton from './StationDeleteButton';
import StationDetails from './StationDetails';
import StationStatus from './StationStatus';
import StationStatusTitle from './StationStatusTitle';

const StationCard = ({
  openModalHandler,
  imgUrl,
  details,
  batteryCount,
  stationId,
}) => {
  return (
    <S.StationContainer onClick={openModalHandler}>
      <S.LeftAlignWrapper>
        <S.StationImgContainer>
          <img src={imgUrl}></img>
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
