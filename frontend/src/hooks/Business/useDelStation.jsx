import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { deleteStation } from '@/apis/admin';
import { stationDeleteModeState } from '@/recoil/business';

const useDelStation = () => {
  const isDeleteMode = useRecoilValue(stationDeleteModeState);
  const queryClient = useQueryClient();
  const { mutate: deleteMutate } = useMutation(
    (batteryId) => deleteStation(batteryId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['stationInfo']);
      },
    },
  );

  return { deleteMutate, isDeleteMode };
};

export default useDelStation;
