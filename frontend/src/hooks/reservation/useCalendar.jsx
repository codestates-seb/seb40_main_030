import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '@/recoil/pagesState';

const useCalendar = () => {
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const [date, setDate] = useState({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const currentDate = {
    month: new Date().getMonth(),
    date: new Date().getDate(),
  };

  const currentTime = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };

  const year = new Date().getFullYear();
  const startMonth = new Date(date.startValue).getMonth();
  const endMonth = new Date(date.endValue).getMonth();

  const startDate = new Date(date.startValue).getDate();
  const endDate = new Date(date.endValue).getDate();

  const handleChange = (d) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  useEffect(() => {
    if (date.startValue !== null && date.endValue !== null) {
      setReservationStatus({
        ...reservationStatus,
        startDate: { year, month: startMonth, date: startDate },
        endDate: { year, month: endMonth, date: endDate },
        dateFixed: { ...reservationStatus.dateFixed, date: true },
      });
    }
  }, [date]);

  return { reservationStatus, date, currentDate, currentTime, handleChange };
};

export default useCalendar;
