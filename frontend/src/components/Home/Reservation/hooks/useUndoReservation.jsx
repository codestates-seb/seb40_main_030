import { useSetRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';
import { initialReservationValue } from '../../../../recoil/pagesState';

const useUndoReservation = () => {
  const setReservationStatus = useSetRecoilState(reservationState);

  const undoReservation = () => {
    setReservationStatus(initialReservationValue);
  };

  return { undoReservation };
};

export default useUndoReservation;
