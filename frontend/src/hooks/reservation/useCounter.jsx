import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCounter = (type, min, max, range) => {
  const inputRef = useRef(null);
  const [currentTime, setTime] = useState(min);
  const [timeline, setTimeline] = useRecoilState(reservationState);

  // 시간에 대한 검증이 new Date이 24시 이후를 인식못함
  // 시간 차이 계산시에 일 월도 계산 같이 해야함

  const handleTime = (CalculateType) => {
    if (CalculateType === 'down' && currentTime > min) {
      setTime(currentTime - range);
    }

    if (CalculateType === 'up' && currentTime < max) {
      setTime(currentTime + range);
    }

    if (currentTime === max) {
      setTime(min);
    }
  };

  useEffect(() => {
    if (type === 'hours') setTimeline({ ...timeline, hours: currentTime });

    if (type === 'minutes') setTimeline({ ...timeline, minutes: currentTime });
  }, [currentTime]);

  return { inputRef, handleTime, currentTime };
};

export default useCounter;
