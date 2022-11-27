import useDelBattery from '../../../hooks/Business/useDelBattery';
import * as S from './Station.style';

const StationDeleteButton = ({ batteryCount, stationId }) => {
  const { deleteMutate, isDeleteMode } = useDelBattery();
  const deleteHandler = () => {
    deleteMutate(stationId);
  };
  console.log(batteryCount, stationId);
  return (
    <S.StationDeleteButtonContainer
      status={batteryCount}
      onClick={(stationId) => deleteHandler(stationId)}
      deleteState={isDeleteMode}
    >
      X
    </S.StationDeleteButtonContainer>
  );
};

export default StationDeleteButton;
