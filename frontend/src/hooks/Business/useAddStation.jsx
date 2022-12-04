import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';

import { addStation } from '@/apis/admin';
import { stationAddModeState } from '@/recoil/business';

const useAddStation = () => {
  const [isDeleteMode, setIsDeleteMode] = useRecoilState(stationAddModeState);
  const [isAddMode, setIsAddMode] = useRecoilState(stationAddModeState);
  const queryClient = useQueryClient();

  const {
    mutate: addMutate,
    isError,
    error,
  } = useMutation((body) => addStation(body), {
    onSuccess: () => {
      queryClient.invalidateQueries(['stationInfo']);
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

export default useAddStation;
