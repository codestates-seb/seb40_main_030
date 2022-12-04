import * as S from './Battery.style';

const BatteryStatus = ({ isSelectedBattery, clickHandler, idx, status }) => {
  return (
    <>
      <S.BatteryStatusContainer
        onClick={() => clickHandler(idx, status)}
        status={status}
        isSelectedBattery={isSelectedBattery}
      >
        <div className='status-title'>
          {status === 'total'
            ? '전체'
            : status === true
            ? '대기중'
            : status === false
            ? '대여중'
            : status === 'reservation'
            ? '예약중'
            : null}
        </div>
      </S.BatteryStatusContainer>
    </>
  );
};

export default BatteryStatus;
