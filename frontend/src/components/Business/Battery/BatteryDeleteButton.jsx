import * as S from './Battery.style';

const BatteryDeleteButton = ({ deleteState, status }) => {
  return (
    <S.deleteButtonContainer deleteState={deleteState} status={status}>
      X
    </S.deleteButtonContainer>
  );
};

export default BatteryDeleteButton;
