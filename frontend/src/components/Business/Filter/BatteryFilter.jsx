import { useSetRecoilState } from 'recoil';

import { batteryFilterState } from '@/recoil/business';

import BatteryStatus from '../Battery/BatteryStatus';
import * as S from './BatteryFilter.style';

const BatteryFilter = ({
  isSelectedBattery,
  setIsSelectedBattery,
  countList,
}) => {
  const setSelectedFilter = useSetRecoilState(batteryFilterState);
  const clickHandler = (idx, status) => {
    const stateArr = [false, false, false, false];
    stateArr[idx] = true;
    setSelectedFilter(status);
    setIsSelectedBattery([...stateArr]);
  };

  return (
    <>
      <S.BatteryFilterContainer>
        {countList.map((eachCount, idx) => {
          const state =
            idx === 0
              ? 'total'
              : idx === 1
              ? true
              : idx === 2
              ? false
              : idx === 3
              ? 'reservation'
              : null;
          return (
            <BatteryStatus
              key={idx}
              isSelectedBattery={isSelectedBattery[idx]}
              clickHandler={clickHandler}
              idx={idx}
              status={state}
              textState={true}
            />
          );
        })}
      </S.BatteryFilterContainer>
    </>
  );
};

export default BatteryFilter;
