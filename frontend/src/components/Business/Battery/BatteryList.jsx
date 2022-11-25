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
                station: battery.station,
                price: battery.price,
                capacity: battery.capacity,
                //배터리 이름 추가
                batteryName: battery.batteryName,
              }}
              status={battery.status}
            />
          </li>
        );
      })}
    </S.BatteryListContainer>
  );
};

export default BatteryList;
