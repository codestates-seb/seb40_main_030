import * as S from './Management.style';
import ManagementButton from './ManagementButton';
import { addBattery } from '../../../apis/admin';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Management = ({ deleteHandler, changeDelStateHandler }) => {
  const queryClient = useQueryClient();
  const { mutate: addMutate, data } = useMutation((body) => addBattery(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminInfo']);
    },
  });
  const addHandler = () => {
    changeDelStateHandler();
    const body = {
      batteryId: Math.random(),
      capacity: '99999mA',
      status: Math.random() > 0.5 ? true : false,
      price: 123124,
      photoURL: '',
      stationId: 1,
    };
    addMutate(body);
  };

  return (
    <S.ButtonWrapper>
      <ManagementButton onClick={addHandler} action={'add'} />
      <ManagementButton onClick={deleteHandler} action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default Management;
