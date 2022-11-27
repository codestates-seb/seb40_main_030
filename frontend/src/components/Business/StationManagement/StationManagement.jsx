import { useRecoilState, useSetRecoilState } from 'recoil';

import { addModeState, deleteModeState } from '@/recoil/business';

import * as S from './StationManagement.style';
import StationManagementButton from './StationManagementButton';

const StationManagement = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(deleteModeState);
  const setIsAddMode = useSetRecoilState(addModeState);

  const addHandler = () => {
    if (isDeleteMode) setIsDeleteMode(false);
    setIsAddMode((preState) => !preState);
  };
  const deleteHandler = () => {
    setIsDeleteMode((preState) => !preState);
  };
  return (
    <S.ButtonWrapper>
      <StationManagementButton onClick={() => addHandler()} action={'add'} />
      <StationManagementButton onClick={deleteHandler} action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default StationManagement;
