import { useRecoilState } from 'recoil';

import BatteryTitle from '@/components/Business/Battery/BatteryTitle';
import InputModal from '@/components/Business/InputModal/InputModal';
import StationInputForm from '@/components/Business/InputModal/StationInputForm';
import StationList from '@/components/Business/Station/StationList';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import StationFilter from '../../components/Business/Filter/StationFilter';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const StationContent = ({ openSnackBar, clickPage }) => {
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
      <InputModal
        name={'station'}
        isActive={isAddMode}
        closeModalHandler={setIsAddMode}
      >
        <StationInputForm
          openSnackBar={openSnackBar}
          stationList={stationInfo.stationList}
        />
      </InputModal>
      <S.BodyWrapper>
        <BatteryTitle title={'My Station'} />
        <StationFilter countList={stationInfo.countList} />
        <StationList
          openSnackBar={openSnackBar}
          stationList={stationInfo.stationList}
        />
      </S.BodyWrapper>
    </>
  );
};

export default StationContent;
