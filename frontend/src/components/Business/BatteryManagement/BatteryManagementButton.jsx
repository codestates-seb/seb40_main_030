import * as S from './BatteryManagement.style';

const BatteryManagementButton = ({ onClick, action }) => {
  return (
    <S.ButtonContainer onClick={onClick} action={action}>
      {action === 'add'
        ? '배터리 등록'
        : action === 'remove'
        ? '배터리 삭제'
        : null}
    </S.ButtonContainer>
  );
};

export default BatteryManagementButton;
