import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCheckDateFixed = () => {
  const { dateFixed } = useRecoilValue(reservationState);
  const isDateFixed = dateFixed.date || dateFixed.time;
  const isReservationCompleted = dateFixed.date && dateFixed.time;

  return { isDateFixed, isReservationCompleted };
};

export default useCheckDateFixed;
