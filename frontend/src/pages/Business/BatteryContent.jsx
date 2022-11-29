import BatteryInputForm from '@/components/Business/InputModal/BatteryInputForm';
import InputModal from '@/components/Business/InputModal/InputModal';

import BatteryList from '../../components/Business/Battery/BatteryList';
import BatteryManagement from '../../components/Business/BatteryManagement/BatteryManagement';
import BatteryFilter from '../../components/Business/Filter/BatteryFilter';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const BatteryContent = () => {
  const { batteryInfo } = useGetBatteryList();
  const { stationInfo } = useGetStationList();

  return (
    <>
      <InputModal name={'battery'}>
        <BatteryInputForm
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </InputModal>
      <S.BodyWrapper>
        <BatteryManagement />
        <BatteryFilter countList={batteryInfo.countList} />
        <BatteryList batteryList={batteryInfo.batteryList} />
      </S.BodyWrapper>
    </>
  );
};

export default BatteryContent;
