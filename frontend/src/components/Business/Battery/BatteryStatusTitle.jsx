import * as S from './Battery.style';

const BatteryStatusTitle = ({ status }) => {
  return (
    <S.BatteryStatusTitleContainer status={status}>
      <h3>{status ? `대기중` : `대여중`}</h3>
    </S.BatteryStatusTitleContainer>
  );
};

export default BatteryStatusTitle;
