import * as S from './InputModal.style';

const InputModal = ({ children, isModalOpen, closeModalHandler }) => {
  return (
    <S.ModalWrapper isActiveMode={isModalOpen}>
      <S.ModalBackground onClick={() => closeModalHandler(false)} />
      {children}
    </S.ModalWrapper>
  );
};

export default InputModal;
