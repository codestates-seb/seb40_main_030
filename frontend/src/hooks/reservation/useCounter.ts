import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCounter = (
  type: string,
  min: number,
  max: string | number,
  range: number,
  time: number,
) => {
  const [currentTime, setTime] = useState<number>(time);
  const [timeline, setTimeline] = useRecoilState(reservationState);

  const handleTime = (CalculateType: string) => {
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
  }, [currentTime, setTimeline]);

  return { handleTime, currentTime };
};

export default useCounter;
