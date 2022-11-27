import * as S from './Station.style';

const StationDetails = ({ details }) => {
  console.log('안에서', details);
  return (
    <S.StationDetailsContainer>
      <li>{`명 칭 : ${details.stationName}`}</li>
      <li>{`정 보 : ${'두번째 대여소'}`}</li>
      <li>{`번 호 : ${details.phone}`}</li>
    </S.StationDetailsContainer>
  );
};

export default StationDetails;
