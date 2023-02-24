import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

import { InitialReservationStateType } from '../../@types/index';

const useCalendar = () => {
  const [reservationStatus, setReservationStatus] = useRecoilState<
    InitialReservationStateType | any
  >(reservationState);
  const [calendarDate, setCalendarDate] = useState<{
    startValue: any;
    endValue: any;
    rangeDates?: string[];
  }>({
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
  const startMonth = new Date(calendarDate.startValue).getMonth() + 1;
  const endMonth = new Date(calendarDate.endValue).getMonth() + 1;

  const startDate = new Date(calendarDate.startValue).getDate();
  const endDate = new Date(calendarDate.endValue).getDate();

  const handleChange = (date: any) => {
    const [startValue, endValue, rangeDates] = date;
    setCalendarDate((prev: any) => ({
      ...prev,
      endValue,
      startValue,
      rangeDates,
    }));
  };

  useEffect(() => {
    if (calendarDate.startValue !== null && calendarDate.endValue !== null) {
      setReservationStatus({
        ...reservationStatus,
        startDate: { year, month: startMonth, date: startDate },
        endDate: { year, month: endMonth, date: endDate },
        dateFixed: { ...reservationStatus.dateFixed, date: true },
      });
    }
  }, [calendarDate]);

  return {
    date: calendarDate,
    currentDate,
    currentTime,
    handleChange,
    addMonths,
  };
};

export default useCalendar;
