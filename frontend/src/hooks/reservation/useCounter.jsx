import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '../../recoil/pagesState';

const useCounter = (type, min, max, range) => {
  const inputRef = useRef(null);
  const [currentTime, setTime] = useState(min);
  const [timeline, setTimeline] = useRecoilState(reservationState);

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
