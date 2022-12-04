import { useSetRecoilState } from 'recoil';

import { reservationState, initialReservationValue } from '@/recoil/pagesState';

const useUndoReservation = () => {
  const setReservationStatus = useSetRecoilState(reservationState);

  const undoReservation = () => {
    setReservationStatus(initialReservationValue);
  };

  return { undoReservation };
};

export default useUndoReservation;
