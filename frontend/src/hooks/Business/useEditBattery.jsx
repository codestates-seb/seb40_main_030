import { useQueryClient, useMutation } from '@tanstack/react-query';

import { editBattery } from '@/apis/admin';

const useEditBattery = () => {
  const queryClient = useQueryClient();

  const {
    mutate: editMutate,
    isError,
    error,
  } = useMutation(([id, editBatteryInfo]) => editBattery(id, editBatteryInfo), {
    onSuccess: () => {
      queryClient.invalidateQueries(['adminInfo']);
    },
  });

  return {
    editMutate,
    isError,
    error,
  };
};

export default useEditBattery;
