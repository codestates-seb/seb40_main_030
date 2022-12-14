import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchReturnBattery } from '@/apis/payments';

import { useSnackBar } from '..';

const useReturnBattery = () => {
  // 반납 요청에 대한 응답은 정상적으로 오나
  // 페이먼츠에서 상태값이 바뀌지 않음
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    (id) => patchReturnBattery(id),
    {
      onSuccess: () => {
        openSnackBar('반납이 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['order-inUse']);
      },
      onError: (err) => {
        openSnackBar(`반납이 실패하였습니다. ${err.response.status}`);
        return;
      },
    },
  );

  const handleReturnBattery = (id) => {
    mutate(id);
  };

  return { handleReturnBattery };
};

export default useReturnBattery;
