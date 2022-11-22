import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useSingleDateReservation = (currentDate) => {
  const queryClient = useQueryClient();

  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);

  const { mutate } = useMutation(
    ['reservation-status'],
    (status) => setReservationStatus(status),
    {
      retry: 1,
      onSuccess: () => queryClient.invalidateQueries(['reservation-status']),
    },
  );

  // single date reservation 일시에 default date 현재 시점으로 업데이트
  const handleSingleDateReservation = useCallback(() => {
    mutate({
      ...reservationStatus,
      startDate: {
        year: 2022,
        month: currentDate?.month,
        date: currentDate?.date,
      },
      endDate: {
        year: 2022,
        month: currentDate?.month,
        date: currentDate?.date,
      },
      dateFixed: { ...reservationStatus.dateFixed, date: true },
    });
  }, []);

  return { handleSingleDateReservation, reservationStatus };
};

export default useSingleDateReservation;
