import * as S from './Station.style';

const StationStatus = ({
  idx,
  isSelectedStation,
  clickHandler,
  batteryCount,
  status,
}) => {
  return (
    <>
      <S.StationStatusContainer
        onClick={() => clickHandler(idx, status)}
        batteryCount={batteryCount}
        status={status}
        isSelectedStation={isSelectedStation}
      >
        <div className='status-title'>
          {status === 'total'
            ? `전체`
            : status === true
            ? '보유중'
            : status === false
            ? '미보유'
            : null}
        </div>
      </S.StationStatusContainer>
    </>
  );
};

export default StationStatus;
