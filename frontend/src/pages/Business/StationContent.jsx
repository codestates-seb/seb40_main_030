import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { LogoutIcon } from '@/assets';
import BatteryTitle from '@/components/Business/Battery/BatteryTitle';
import InputModal from '@/components/Business/InputModal/InputModal';
import StationInputForm from '@/components/Business/InputModal/StationInputForm';
import StationList from '@/components/Business/Station/StationList';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import StationFilter from '../../components/Business/Filter/StationFilter';
import useGetStationList from '../../hooks/Business/useGetStationList';
import * as S from './Business.style';

const StationContent = ({
  isSelectedStation,
  setIsSelectedStation,
  openSnackBar,
  clickPage,
}) => {
  const navigate = useNavigate();
  const { stationInfo } = useGetStationList();
  let recoilKeyName;
  if (clickPage === 'battery') {
    recoilKeyName = batteryAddModeState;
  } else if (clickPage === 'station') {
    recoilKeyName = stationAddModeState;
  }
  const [isAddMode, setIsAddMode] = useRecoilState(recoilKeyName);
  const logoutHandler = () => {
    localStorage.removeItem('accesstoken');
    sessionStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    localStorage.removeItem('userType');
    navigate('/');
  };
  return (
    <>
      {isAddMode && (
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
      )}
      <S.BodyWrapper>
        <S.HeaderContainer>
          <BatteryTitle title={'My Station'} />
          <LogoutIcon onClick={logoutHandler} width='23px' height='23px' />
        </S.HeaderContainer>
        <StationFilter
          isSelectedStation={isSelectedStation}
          setIsSelectedStation={setIsSelectedStation}
          countList={stationInfo.countList}
        />
        <StationList
          openSnackBar={openSnackBar}
          stationList={stationInfo.stationList}
        />
      </S.BodyWrapper>
    </>
  );
};

export default StationContent;
