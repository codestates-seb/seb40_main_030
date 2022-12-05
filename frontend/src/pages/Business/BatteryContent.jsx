import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { axiosAdminInstance } from '@/apis/admin';
import { LogoutIcon } from '@/assets';
import BatteryTitle from '@/components/Business/Battery/BatteryTitle';
import BatteryInputForm from '@/components/Business/InputModal/BatteryInputForm';
import InputModal from '@/components/Business/InputModal/InputModal';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import BatteryList from '../../components/Business/Battery/BatteryList';
import BatteryFilter from '../../components/Business/Filter/BatteryFilter';
import useGetBatteryList from '../../hooks/Business/useGetBatteryList';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const BatteryContent = ({
  isSelectedBattery,
  setIsSelectedBattery,
  openSnackBar,
  clickPage,
}) => {
  const navigate = useNavigate();
  const { batteryInfo } = useGetBatteryList();
  const { stationInfo } = useGetStationList();
  let recoilKeyName;
  if (clickPage === 'battery') {
    recoilKeyName = batteryAddModeState;
  } else if (clickPage === 'station') {
    recoilKeyName = stationAddModeState;
  }
  const [isAddMode, setIsAddMode] = useRecoilState(recoilKeyName);

  const logoutHandler = () => {
    axiosAdminInstance.defaults.headers.common['Authorization'] = ``;
    localStorage.removeItem('accesstoken');
    sessionStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    localStorage.removeItem('userType');
    navigate('/');
  };
  return (
    <>
      {isAddMode && (
        <InputModal isModalOpen={isAddMode} closeModalHandler={setIsAddMode}>
          <BatteryInputForm
            openSnackBar={openSnackBar}
            batteryList={batteryInfo.batteryList}
            stationList={stationInfo.stationList}
          />
        </InputModal>
      )}
      <S.BodyWrapper>
        <S.HeaderContainer>
          <BatteryTitle title={'My Battery'} />
          <LogoutIcon onClick={logoutHandler} width='23px' height='23px' />
        </S.HeaderContainer>
        <BatteryFilter
          isSelectedBattery={isSelectedBattery}
          setIsSelectedBattery={setIsSelectedBattery}
          countList={batteryInfo.countList}
        />
        <BatteryList
          openSnackBar={openSnackBar}
          batteryList={batteryInfo.batteryList}
          stationList={stationInfo.stationList}
        />
      </S.BodyWrapper>
    </>
  );
};

export default BatteryContent;
