import * as S from './Station.style';

const StationDetails = ({ details }) => {
  return (
    <S.StationDetailsContainer>
      <h1>{details.stationName && `${details.stationName}`}</h1>
      <h2>{details.details && `${details.details}`}</h2>
      <h3>{details.phone && `${details.phone}`}</h3>
    </S.StationDetailsContainer>
  );
};

export default StationDetails;
