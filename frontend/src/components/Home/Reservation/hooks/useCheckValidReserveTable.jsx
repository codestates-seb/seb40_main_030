import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';

const useCheckValidReserveTable = () => {
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const { startTime, startDate, endTime, endDate } = reservationStatus;
  const currentTime = new Date();
  const startPoint = new Date(
    `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`
  );
  const endPoint = new Date(
    `${endDate.year}-${endDate.month}-${endDate.date} ${endTime.hours}:${endTime.minutes}`
  );

  const timeDifference = parseInt(
    (endPoint.getTime() - startPoint.getTime()) / 1000 / 60 / 1440
  );

  // useEffect(() => {
  //   console.log(startPoint < currentTime);
  //   // 예약시간 설정이 되어있는지 확인
  //   if (!isNaN(startPoint) && startPoint < currentTime) {
  //     console.log(
  //       '대여시간이 유효하지 않아 현재시간으로 설정을 초기화 합니다.'
  //     );
  //   }
  // }, []);

  return { startPoint, endPoint, timeDifference };
};

export default useCheckValidReserveTable;
