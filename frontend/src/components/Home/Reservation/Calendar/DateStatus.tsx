import * as S from './Calendar.style';

type Props = {
  content: string;
  date: any;
  time: any;
};

const DateStatus = ({ content, date, time }: Props) => {
  return (
    <S.ReservationBox>
      <S.DateStatus>{content}</S.DateStatus>
      <span>{`${date.month} 월 ${date.date} 일 ${
        time?.hours !== null ? time.hours : new Date().getHours()
      } 시 ${
        time?.minutes !== null ? time.minutes : new Date().getMinutes()
      } 분 ${content === '대여' ? '부터' : '까지'}`}</span>
    </S.ReservationBox>
  );
};

export default DateStatus;
