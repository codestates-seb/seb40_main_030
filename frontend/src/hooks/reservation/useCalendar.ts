import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCalendar = () => {
  const [reservationStatus, setReservationStatus] =
    useRecoilState<any>(reservationState);
  const [date, setDate] = useState<any>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const currentDate = {
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };

  const currentTime = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };

  const addMonths = (numOfMonths: number, date = new Date()) => {
    date.setMonth(date.getMonth() + numOfMonths);

    return date;
  };

  const year = new Date().getFullYear();
  const startMonth = new Date(date.startValue).getMonth() + 1;
  const endMonth = new Date(date.endValue).getMonth() + 1;

  const startDate = new Date(date.startValue).getDate();
  const endDate = new Date(date.endValue).getDate();

  const handleChange = (date: any) => {
    const [startValue, endValue, rangeDates] = date;
    setDate((prev: any) => ({ ...prev, endValue, startValue, rangeDates }));
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

  return {
    date,
    currentDate,
    currentTime,
    handleChange,
    addMonths,
  };
};

export default useCalendar;
