import { useRecoilState } from 'recoil';

import BatteryInputForm from '@/components/Business/InputModal/BatteryInputForm';
import InputModal from '@/components/Business/InputModal/InputModal';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import BatteryList from '../../components/Business/Battery/BatteryList';
import BatteryFilter from '../../components/Business/Filter/BatteryFilter';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const BatteryContent = ({ clickPage }) => {
  const { batteryInfo } = useGetBatteryList();
  const { stationInfo } = useGetStationList();

  let recoilKeyName;
  if (clickPage === 'battery') {
    recoilKeyName = batteryAddModeState;
  } else if (clickPage === 'station') {
    recoilKeyName = stationAddModeState;
  }
  const [isAddMode, setIsAddMode] = useRecoilState(recoilKeyName);

  return (
    <>
      <InputModal isActive={isAddMode} closeModalHandler={setIsAddMode}>
        <BatteryInputForm
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </InputModal>
      <S.BodyWrapper>
        <BatteryFilter countList={batteryInfo.countList} />
        <BatteryList
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </S.BodyWrapper>
    </>
  );
};

export default BatteryContent;
