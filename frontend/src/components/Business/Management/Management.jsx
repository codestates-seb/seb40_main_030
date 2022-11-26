import useAddBattery from '../../../hooks/Business/useAddBattery';
import * as S from './Management.style';
import ManagementButton from './ManagementButton';

const Management = () => {
  const { addMutate, isAddMode, setIsAddMode, isDeleteMode, setIsDeleteMode } =
    useAddBattery();

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
    // if (!isAddMode) setIsAddMode(true);
    setIsAddMode((pre) => !pre);
    // addMutate(batteryInfo); //모달창안만든 상태에서 바로 임의 값넣을때 사용
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
