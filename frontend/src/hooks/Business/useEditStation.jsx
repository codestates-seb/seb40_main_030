import { useQueryClient, useMutation } from '@tanstack/react-query';

import { editStation } from '@/apis/admin';

const useEditStation = () => {
  const queryClient = useQueryClient();

  const {
    mutate: editMutate,
    isError,
    error,
  } = useMutation(
    //객체로 인자 넘기기
    ([id, editStationInfo]) => {
      editStation(id, editStationInfo);
    },
    {
      onSuccess: () => {
        //return 유뮤 확인
        setTimeout(() => queryClient.invalidateQueries(['stationInfo']), 500);
        //onsuccess이전에 값을 읽어옴. 이유 모름
      },
    },
  );

  return {
    editMutate,
    isError,
    error,
  };
};

export default useEditStation;
