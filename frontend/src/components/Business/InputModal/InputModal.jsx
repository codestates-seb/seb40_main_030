import { useRecoilState } from 'recoil';

import useGetStationList from '@/hooks/Business/useGetStationList';
import { batteryAddModeState, stationAddModeState } from '@/recoil/business';

import BatteryInputForm from './BatteryInputForm';
import * as S from './InputModal.style';
const InputModal = ({ name, children }) => {
  let recoilKeyName;
  if (name === 'battery') {
    recoilKeyName = batteryAddModeState;
  } else if (name === 'station') {
    recoilKeyName = stationAddModeState;
  }
  const [isAddMode, setIsAddMode] = useRecoilState(recoilKeyName);

  return (
    <S.ModalWrapper isAddMode={isAddMode}>
      <S.ModalBackground onClick={() => setIsAddMode(false)} />
      <S.InputModalContainer>{children}</S.InputModalContainer>
    </S.ModalWrapper>
  );
};

export default InputModal;
