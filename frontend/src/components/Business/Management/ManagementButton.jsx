import * as S from './Management.style';

const ManagementButton = ({ action }) => {
  return (
    <S.ButtonContainer action={action}>
      {action === 'add'
        ? '배터리 등록'
        : action === 'remove'
        ? '배터리 삭제'
        : null}
    </S.ButtonContainer>
  );
};

export default ManagementButton;
