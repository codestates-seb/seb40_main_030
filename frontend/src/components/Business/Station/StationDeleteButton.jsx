import useDelStation from '../../../hooks/Business/useDelStation';
import * as S from './Station.style';

const StationDeleteButton = ({ batteryCount, stationId }) => {
  const { deleteMutate, isDeleteMode } = useDelStation();
  const deleteHandler = () => {
    deleteMutate(stationId);
  };

  return (
    <p>
      <S.StationDeleteButtonContainer
        status={batteryCount}
        onClick={(stationId) => deleteHandler(stationId)}
        deleteState={isDeleteMode}
      >
        X
      </S.StationDeleteButtonContainer>
    </p>
  );
};

export default StationDeleteButton;
