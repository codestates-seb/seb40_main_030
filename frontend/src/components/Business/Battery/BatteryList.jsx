import * as S from './Battery.style';
import BatteryCard from './BatteryCard';

const BatteryList = ({ batteryList, deleteState }) => {
  return (
    <S.BatteryListContainer>
      {batteryList.map((battery) => {
        return (
          <li key={battery.batteryId}>
            <BatteryCard
              imgUrl={battery.photoURL}
              details={{
                stationId: battery.stationId,
                price: battery.price,
                capacity: battery.capacity,
              }}
              deleteState={deleteState}
              status={battery.status}
            />
          </li>
        );
      })}
    </S.BatteryListContainer>
  );
};

export default BatteryList;
