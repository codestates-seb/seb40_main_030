import * as S from './Battery.style';

const BatteryStatusTitle = ({ status }) => {
  return (
    <S.BatteryStatusTitleWrapper>
      {status.map((el, idx) => {
        return (
          <S.BatteryStatusTitleContainer key={idx} status={el}>
            {typeof el === 'boolean' && (el ? `대기중` : `대여중`)}
            {typeof el === 'number' && (el > 0 ? `예약중` : '')}
          </S.BatteryStatusTitleContainer>
        );
      })}
    </S.BatteryStatusTitleWrapper>
  );
};

export default BatteryStatusTitle;
