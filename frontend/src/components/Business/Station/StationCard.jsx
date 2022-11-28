import * as S from './Station.style';
import StationDeleteButton from './StationDeleteButton';
import StationDetails from './StationDetails';
import StationStatus from './StationStatus';

const StationCard = ({ imgUrl, details, batteryCount, stationId }) => {
  return (
    <S.StationContainer>
      <S.LeftAlignWrapper>
        <S.StationImgContainer>
          <img src={imgUrl}></img>
        </S.StationImgContainer>
        <StationDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <StationStatus batteryCount={batteryCount} />
        <StationDeleteButton
          batteryCount={batteryCount}
          stationId={stationId}
        />
      </S.RightAlignWrapper>
    </S.StationContainer>
  );
};

export default StationCard;
