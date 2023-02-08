import * as S from './InputModal.style';

const InputModal = ({
  children,
  isModalOpen,
  closeModalHandler,
  matches,
}: any) => {
  return (
    <S.ModalWrapper matches={matches} isActiveMode={isModalOpen}>
      <S.ModalBackground onClick={() => closeModalHandler(false)} />
      {children}
    </S.ModalWrapper>
  );
};

export default InputModal;
