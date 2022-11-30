import * as S from './InputModal.style';

const InputModal = ({ children, isActive, closeModalHandler }) => {
  return (
    <S.ModalWrapper isActiveMode={isActive}>
      <S.ModalBackground onClick={() => closeModalHandler(false)} />
      {children}
    </S.ModalWrapper>
  );
};

export default InputModal;
