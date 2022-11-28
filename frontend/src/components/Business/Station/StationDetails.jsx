import * as S from './Station.style';

const StationDetails = ({ details }) => {
  return (
    <S.StationDetailsContainer>
      <li>{`명 칭 : ${details.stationName}`}</li>
      <li>{`정 보 : ${details.details}`}</li>
      <li>{`번 호 : ${details.phone}`}</li>
    </S.StationDetailsContainer>
  );
};

export default StationDetails;
