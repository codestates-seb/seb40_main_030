import * as S from './Battery.style';

const BatteryStatus = ({ status }) => {
  return (
    <S.BatteryStatusContainer status={status}>
      {status ? '대여가능' : '사용중'}
    </S.BatteryStatusContainer>
  );
};

export default BatteryStatus;
