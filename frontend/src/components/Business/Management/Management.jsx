import useAddBattery from '../../../hooks/Business/useAddBattery';
import * as S from './Management.style';
import ManagementButton from './ManagementButton';

const Management = () => {
  const { addMutate, isDeleteMode, setIsDeleteMode } = useAddBattery();

  const batteryInfo = {
    //임시 데이터
    batteryId: Math.random(),
    capacity: '99999mA',
    status: Math.random() > 0.5 ? true : false,
    price: 123124,
    photoURL: '',
    stationId: 1,
  };
  const addHandler = (batteryInfo) => {
    if (isDeleteMode) setIsDeleteMode(false);
    addMutate(batteryInfo);
  };
  const deleteHandler = () => {
    setIsDeleteMode((preState) => !preState);
  };
  return (
    <S.ButtonWrapper>
      <ManagementButton
        onClick={() => addHandler(batteryInfo)}
        action={'add'}
      />
      <ManagementButton onClick={deleteHandler} action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default Management;
