import BatteryDeleteButton from '../Battery/BatteryDeleteButton';
import * as S from './Station.style';
import StationDetails from './StationDetails';

const StationCard = ({ imgUrl, details, batteryCount, stationId }) => {
  return (
    <S.StationContainer>
      <S.LeftAlignWrapper>
        <S.StationImgContainer src={imgUrl} />
        <StationDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <BatteryDeleteButton
          batteryCount={batteryCount}
          stationId={stationId}
        />
      </S.RightAlignWrapper>
    </S.StationContainer>
  );
};

export default StationCard;
