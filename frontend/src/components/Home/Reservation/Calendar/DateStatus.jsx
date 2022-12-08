import * as S from './Calendar.style';

const DateStatus = ({ content, date, time }) => {
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
