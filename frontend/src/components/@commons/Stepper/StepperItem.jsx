const StepperItem = ({ reservations }) => {
  let timeArray = [];

  reservations?.map((reservation) => timeArray.push(reservation.startTime));
  reservations?.map((reservation) => timeArray.push(reservation.returnTime));

  timeArray = timeArray.sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime(),
  );
  return <div></div>;

  // return [...new Set(timeArray)]?.map((time, i) => {
  //   return (
  //     <S.Item key={i}>
  //       <S.Description>{`${new Date(time).getMonth() + 1}/${new Date(
  //         time,
  //       ).getDate()}`}</S.Description>
  //     </S.Item>
  //   );
  // });
};

export default StepperItem;
