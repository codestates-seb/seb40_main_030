import { useRecoilState, useSetRecoilState } from 'recoil';

import { addModeState, deleteModeState } from '@/recoil/business';

import * as S from './Management.style';
import ManagementButton from './ManagementButton';

const Management = () => {
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
      <ManagementButton onClick={() => addHandler()} action={'add'} />
      <ManagementButton onClick={deleteHandler} action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default Management;
