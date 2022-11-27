import { useRecoilState } from 'recoil';

import { addModeState } from '@/recoil/business';

import InputForm from './InputForm';
import * as S from './InputModal.style';
const InputModal = () => {
  const [isAddMode, setIsAddMode] = useRecoilState(addModeState);

  return (
    <S.ModalWrapper isAddMode={isAddMode}>
      <S.ModalBackground onClick={() => setIsAddMode(false)} />
      <S.InputModalContainer>
        <InputForm />
      </S.InputModalContainer>
    </S.ModalWrapper>
  );
};

export default InputModal;
