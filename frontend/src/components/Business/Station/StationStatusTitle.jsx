import * as S from './Station.style';

const StationStatusTitle = ({ batteryCount }) => {
  return (
    <S.StationStatusTitleContainer batteryCount={batteryCount}>
      <h3>{batteryCount > 0 ? `보유중` : `미보유`}</h3>
    </S.StationStatusTitleContainer>
  );
};

export default StationStatusTitle;
