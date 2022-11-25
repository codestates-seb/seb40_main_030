import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { addBattery } from '@/apis/admin';
import { deleteModeState } from '@/recoil/business';

const useAddBattery = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(deleteModeState);
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
    isDeleteMode,
    setIsDeleteMode,
  };
};

export default useAddBattery;
