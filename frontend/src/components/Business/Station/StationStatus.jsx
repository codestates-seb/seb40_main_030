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
            ? '수량있는 주유소'
            : status === false
            ? '수량없는 주유소'
            : null}
          {typeof batteryCount === 'number' &&
            (batteryCount === 0 ? '수량없음' : `수량 ${batteryCount}개`)}
        </div>
        {totalStateCnt && `${totalStateCnt}개`}
      </S.StationStatusContainer>
    </>
  );
};

export default StationStatus;
