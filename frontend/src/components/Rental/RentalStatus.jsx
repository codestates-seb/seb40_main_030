import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { reservationState } from '../../recoil/pagesState';
import useCurrentAddress from '../Home/KakaoMap/hooks/useCurrentAddress';
import { useCheckValidReserveTable } from '../Home/Reservation/hooks';

import BatteryInfo from './Features/BatteryInfo';

const RentalStatus = ({ data }) => {
  // hooks 로 분리
  const navigate = useNavigate();
  const { location, batteries } = data;
  const { dateFixed } = useRecoilValue(reservationState);
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { addressDetail } = useCurrentAddress(location);

  useEffect(() => {
    if (!dateFixed.date || !dateFixed.time) {
      navigate('/');
      alert('예약시간 설정을 먼저 해주세요.');
    }
  }, []);

  return (
    <>
      {batteries.map((content) => (
        <BatteryInfo key={content.batteryId} content={content} />
      ))}
    </>
  );
};

export default RentalStatus;
