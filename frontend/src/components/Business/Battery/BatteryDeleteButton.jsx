import useDelBattery from '../../../hooks/Business/useDelBattery';
import * as S from './Battery.style';

const BatteryDeleteButton = ({ status, batteryId }) => {
  const { deleteMutate, isDeleteMode } = useDelBattery('adminInfo');
  const deleteHandler = () => {
    deleteMutate(batteryId);
  };

  return (
    <S.DeleteButtonWrapper>
      <S.DeleteButtonContainer
        status={status}
        onClick={(batteryId) => deleteHandler(batteryId)}
        deleteState={isDeleteMode}
      >
        X
      </S.DeleteButtonContainer>
    </S.DeleteButtonWrapper>
  );
};

export default BatteryDeleteButton;
