import * as S from './Stepper.style';

const StepperItem = ({ reservations }) => {
  let timeArray = [];

  reservations?.map((reservation) => timeArray.push(reservation.startTime));
  reservations?.map((reservation) => timeArray.push(reservation.endTime));

  timeArray = timeArray.sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  );

  return [...new Set(timeArray)]?.map((time, i) => {
    return (
      <S.Item key={i}>
        <S.Description>{`${new Date(time).getMonth() + 1}/${new Date(
          time,
        ).getDate()}`}</S.Description>
      </S.Item>
    );
  });
};

export default StepperItem;
