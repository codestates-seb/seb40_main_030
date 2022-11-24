import * as S from './Management.style';
import ManagementButton from './ManagementButton';
import { useMutation } from '@tanstack/react-query';
import { addBattery } from '../../../apis/admin';
import { queryClient } from '../../../main';

const Management = () => {
  const { mutate: addMutate, data } = useMutation((body) => addBattery(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminInfo']);
    },
  });
  const addHandler = () => {
    console.log('클릭ㅇㅇ');
    const body = {
      batteryId: Math.random(),
      capacity: '99999mA',
      status: Math.random() > 0.5 ? true : false,
      price: 99999,
      photoURL: '',
      stationId: 1,
    };
    addMutate(body);
  };

  return (
    <S.ButtonWrapper>
      <ManagementButton onClick={addHandler} action={'add'} />
      <ManagementButton action={'remove'} />
    </S.ButtonWrapper>
  );
};

export default Management;
