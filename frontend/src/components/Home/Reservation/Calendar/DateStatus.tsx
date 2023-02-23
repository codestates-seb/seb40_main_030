import { ReservationDate, ReservationTime } from '@/@types';

import * as S from './Calendar.style';

type DateStatusProps = {
  type: string;
  date: ReservationDate;
  time: ReservationTime;
};

function DateStatus({ type, date, time }: DateStatusProps) {
  return (
    <S.ReservationBox>
      <S.DateStatus>{type}</S.DateStatus>
      <span>{`${date.month} 월 ${date.date} 일 ${
        time?.hours !== null ? time.hours : new Date().getHours()
      } 시 ${
        time?.minutes !== null ? time.minutes : new Date().getMinutes()
      } 분 ${type === '대여' ? '부터' : '까지'}`}</span>
    </S.ReservationBox>
  );
}

export default DateStatus;
