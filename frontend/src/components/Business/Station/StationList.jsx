import * as S from './Station.style';
import StationCard from './StationCard';

const StationList = ({ stationList }) => {
  return (
    <S.StationListContainer>
      {stationList.map((station) => {
        return (
          <li key={station.stationId}>
            <StationCard
              imgUrl={station.photoURL}
              details={{
                stationName: station.stationName,
                phone: station.phone,
                photoURL: station.photoURL,
                details: station.details,
              }}
              batteryCount={station.batteryCount}
              stationId={station.stationId}
            />
          </li>
        );
      })}
    </S.StationListContainer>
  );
};

export default StationList;
