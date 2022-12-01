import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { stationFilterState } from '@/recoil/business';

import StationStatus from '../Station/StationStatus';
import * as S from './StationFilter.style';

const StationFilter = ({ countList }) => {
  const [isSelected, setIsSelected] = useState([true, false, false]);
  const setSelectedFilter = useSetRecoilState(stationFilterState);
  const clickHandler = (idx, status) => {
    const stateArr = [false, false, false];
    stateArr[idx] = true;
    setSelectedFilter(status);
    setIsSelected([...stateArr]);
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
              isSelected={isSelected[idx]}
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
