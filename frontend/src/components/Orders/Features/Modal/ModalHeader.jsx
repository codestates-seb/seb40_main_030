import * as S from './Modal.style';

const ModalHeader = ({ title }) => {
  return (
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.Header>
  );
};

export default ModalHeader;
