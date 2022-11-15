import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '../../recoil/pagesState';

const useCalendar = () => {
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const [date, setDate] = useState({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  const year = new Date().getFullYear();
  const month = new Date(date.startValue).getMonth();

  const startDate = new Date(date.startValue).getDate();
  const endDate = new Date(date.endValue).getDate();

  useEffect(() => {
    if (date.startValue !== null && date.endValue !== null) {
      setReservationStatus({
        ...reservationStatus,
        startDate: { year, month, date: startDate },
        endDate: { year, month, date: endDate },
        dateFixed: { ...reservationStatus.dateFixed, date: true },
      });
    }
  }, [date]);

  return { reservationStatus, date, handleChange };
};

export default useCalendar;
