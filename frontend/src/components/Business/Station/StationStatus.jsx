import { useSetRecoilState } from 'recoil';

import { stationFilterState } from '@/recoil/business';

import * as S from './Station.style';

const StationStatus = ({ batteryCount, status, textState }) => {
  const setSelectedFilter = useSetRecoilState(stationFilterState);

  const clickHandler = () => {
    setSelectedFilter(status);
  };

  return (
    <>
      <S.StationStatusContainer
        onClick={
          status === 'total' || typeof status === 'boolean'
            ? clickHandler
            : null
        }
        batteryCount={batteryCount}
        status={status}
      >
        <div className='status-color' />
        <div className='status-title'>
          {textState && status === 'total'
            ? `전체`
            : status === true
            ? '배터리 유'
            : status === false
            ? '배터리 무'
            : null}
        </div>
      </S.StationStatusContainer>
    </>
  );
};

export default StationStatus;
