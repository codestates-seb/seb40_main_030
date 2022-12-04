import * as S from './BatteryManagement.style';
const BatteryCount = ({ batteryCount }) => {
  return <S.CounterContainer>{`${batteryCount}개`}</S.CounterContainer>;
};

export default BatteryCount;
