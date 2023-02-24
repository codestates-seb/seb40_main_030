import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

import useCheckValidReserveTable from './useCheckValidReserveTable';

const useCheckDateFixed = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  const { dateFixed } = useRecoilValue(reservationState);

  const isDateFixed = startPoint !== undefined && endPoint !== undefined;
  const isReservationCompleted = dateFixed.date && dateFixed.time;

  return { isDateFixed, isReservationCompleted };
};

export default useCheckDateFixed;
