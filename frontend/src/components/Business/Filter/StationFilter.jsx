import { useSetRecoilState } from 'recoil';

import { stationFilterState } from '@/recoil/business';

import StationStatus from '../Station/StationStatus';
import * as S from './StationFilter.style';

const StationFilter = ({
  isSelectedStation,
  setIsSelectedStation,
  countList,
}) => {
  const setSelectedFilter = useSetRecoilState(stationFilterState);
  const clickHandler = (idx, status) => {
    const stateArr = [false, false, false];
    stateArr[idx] = true;
    setSelectedFilter(status);
    setIsSelectedStation([...stateArr]);
  };

  return (
    <>
      <S.StationFilterContainer>
        {countList.map((totalStateCnt, idx) => {
          const status =
            idx === 0 ? 'total' : idx === 1 ? true : idx === 2 ? false : null;
          return (
            <StationStatus
              key={idx}
              idx={idx}
              isSelectedStation={isSelectedStation[idx]}
              clickHandler={clickHandler}
              status={status}
              textState={true}
            />
          );
        })}
      </S.StationFilterContainer>
    </>
  );
};

export default StationFilter;
