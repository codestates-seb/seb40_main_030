import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useCurrentAddress, useCheckValidReserveTable } from '../../hooks';
import { reservationState } from '../../recoil/pagesState';
import BatteryInfo from './Features/BatteryInfo';

const RentalStatus = ({ data }) => {
  // hooks 로 분리
  const navigate = useNavigate();
  const { location, batteries } = data;
  const { dateFixed } = useRecoilValue(reservationState);
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { addressDetail } = useCurrentAddress(location);
  // 추후 적용될 부분
  startPoint, endPoint, addressDetail;

  useEffect(() => {
    if (!dateFixed.date || !dateFixed.time) {
      navigate('/');
      alert('예약시간 설정을 먼저 해주세요.');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
