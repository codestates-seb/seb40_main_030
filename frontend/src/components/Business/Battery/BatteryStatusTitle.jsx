import * as S from './Battery.style';

const BatteryStatusTitle = ({ status }) => {
  return (
    <S.BatteryStatusTitleWrapper>
      {status.map((el, idx) => {
        console.log('el', el);
        return (
          <S.BatteryStatusTitleContainer key={idx} status={el}>
            <h3>{typeof el === 'boolean' && (el ? `대기중` : `대여중`)}</h3>
            <h3>{typeof el === 'number' && (el > 0 ? `예약중` : '')}</h3>
          </S.BatteryStatusTitleContainer>
        );
      })}
    </S.BatteryStatusTitleWrapper>
  );
};

export default BatteryStatusTitle;
