import * as S from './StationManagement.style';

const StationManagementButton = ({ onClick, action }) => {
  return (
    <S.ButtonContainer onClick={onClick} action={action}>
      {action === 'add'
        ? '대여소 등록'
        : action === 'remove'
        ? '대여소 삭제'
        : null}
    </S.ButtonContainer>
  );
};

export default StationManagementButton;
