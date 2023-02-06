import * as S from './Modal.style';

const ModalHeader = ({ title }: { title: string }) => {
  return (
    <S.Header>
      <S.HeaderTitle>{title}</S.HeaderTitle>
    </S.Header>
  );
};

export default ModalHeader;
