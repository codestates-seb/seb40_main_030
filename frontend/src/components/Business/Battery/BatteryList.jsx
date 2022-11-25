import * as S from './Battery.style';
import BatteryCard from './BatteryCard';

const BatteryList = ({ batteryList }) => {
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
              status={battery.status}
              batteryId={battery.batteryId}
            />
          </li>
        );
      })}
    </S.BatteryListContainer>
  );
};

export default BatteryList;
