import { useSetRecoilState } from 'recoil';

import { stationFilterState } from '@/recoil/business';

import * as S from './Station.style';

const StationStatus = ({ batteryCount, totalStateCnt, status }) => {
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
        <div className='station-state-text'>
          {status === 'total'
            ? `전체`
            : status === true
            ? '배터리있는'
            : status === false
            ? '배터리없는'
            : null}
          {typeof batteryCount === 'number' &&
            (batteryCount === 0 ? '배터리없음' : `배터리 ${batteryCount}개`)}
        </div>
        {totalStateCnt >= 0 && `${totalStateCnt}곳`}
      </S.StationStatusContainer>
    </>
  );
};

export default StationStatus;
