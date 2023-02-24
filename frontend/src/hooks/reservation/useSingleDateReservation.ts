import {
  useQueryClient,
  useMutation,
  MutationFunction,
} from '@tanstack/react-query';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { ReservationDate } from '@/@types';
import { reservationState } from '@/recoil/pagesState';

const useSingleDateReservation = (currentDate: ReservationDate) => {
  const currentYear = new Date().getFullYear();
  const queryClient = useQueryClient();
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);

  const { mutate } = useMutation(
    ['reservation-status'],
    (status: MutationFunction<unknown, void> | any) => {
      setReservationStatus(status);
    },
    {
      retry: 1,
      onSuccess: () => queryClient.invalidateQueries(['reservation-status']),
    },
  );

  const handleSingleDateReservation = useCallback(
    () =>
      mutate({
        ...reservationStatus,
        startDate: {
          year: currentYear,
          month: currentDate?.month,
          date: currentDate?.date,
        },
        endDate: {
          year:
            currentDate?.month === 12 &&
            currentDate?.date === 31 &&
            new Date().getHours() === 11
              ? currentYear + 1
              : currentYear,
          month: currentDate?.month,
          date: currentDate?.date,
        },
        dateFixed: { ...reservationStatus.dateFixed, date: true },
      }),
    [reservationStatus],
  );

  return { handleSingleDateReservation, reservationStatus };
};

export default useSingleDateReservation;
