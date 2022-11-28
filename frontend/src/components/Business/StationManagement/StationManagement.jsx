import { useRecoilState, useSetRecoilState } from 'recoil';

import { stationDeleteModeState, stationAddModeState } from '@/recoil/business';

import * as S from './StationManagement.style';
import StationManagementButton from './StationManagementButton';

const StationManagement = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(
    stationDeleteModeState,
  );
  const setIsAddMode = useSetRecoilState(stationAddModeState);

  const addHandler = () => {
    console.log('주유소 등록');
    if (isDeleteMode) setIsDeleteMode(false);
    setIsAddMode((preState) => !preState);
  };
  const deleteHandler = () => {
    setIsDeleteMode((preState) => !preState);
  };
  return (
    <S.ButtonWrapper>
      <StationManagementButton onClick={() => addHandler()} action={'add'} />
      <StationManagementButton
        onClick={() => deleteHandler()}
        action={'remove'}
      />
    </S.ButtonWrapper>
  );
};

export default StationManagement;
