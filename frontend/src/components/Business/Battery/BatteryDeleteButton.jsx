import useDelBattery from '../../../hooks/Business/useDelBattery';
import * as S from './Battery.style';

const BatteryDeleteButton = ({ status, batteryId }) => {
  const { deleteMutate, isDeleteMode } = useDelBattery();
  const deleteHandler = () => {
    deleteMutate(batteryId);
  };

  return (
    <S.deleteButtonContainer
      status={status}
      onClick={(batteryId) => deleteHandler(batteryId)}
      deleteState={isDeleteMode}
    >
      X
    </S.deleteButtonContainer>
  );
};

export default BatteryDeleteButton;
