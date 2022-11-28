import useDelStation from '../../../hooks/Business/useDelStation';
import * as S from './Station.style';

const StationDeleteButton = ({ batteryCount, stationId }) => {
  const { deleteMutate, isDeleteMode } = useDelStation('stationInfo');
  const deleteHandler = () => {
    console.log('stationId', stationId);
    deleteMutate(stationId);
  };

  return (
    <S.DeleteButtonWrapper>
      <S.StationDeleteButtonContainer
        status={batteryCount}
        onClick={(stationId) => deleteHandler(stationId)}
        deleteState={isDeleteMode}
      >
        <div>삭제</div>
      </S.StationDeleteButtonContainer>
    </S.DeleteButtonWrapper>
  );
};

export default StationDeleteButton;
