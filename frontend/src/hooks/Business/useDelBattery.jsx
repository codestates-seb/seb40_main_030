import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { deleteBattery } from '@/apis/admin';
import { batteryDeleteModeState } from '@/recoil/business';

const useDelBattery = () => {
  const isDeleteMode = useRecoilValue(batteryDeleteModeState);
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation(
    (batteryId) => deleteBattery(batteryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['adminInfo']);
      },
    },
  );

  return { deleteMutate, isDeleteMode };
};

export default useDelBattery;
