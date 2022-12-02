import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { addBattery } from '@/apis/admin';
import { batteryDeleteModeState, batteryAddModeState } from '@/recoil/business';

const useAddBattery = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(
    batteryDeleteModeState,
  );
  const [isAddMode, setIsAddMode] = useRecoilState(batteryAddModeState);
  const queryClient = useQueryClient();

  const {
    mutate: addMutate,
    isError,
    error,
  } = useMutation((body) => addBattery(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminInfo']);
    },
  });

  return {
    addMutate,
    isError,
    error,
    isAddMode,
    setIsAddMode,
    isDeleteMode,
    setIsDeleteMode,
  };
};

export default useAddBattery;
