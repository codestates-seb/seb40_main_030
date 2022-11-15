import { useRef, useState } from 'react';

const useCounter = (min, max, range) => {
  const inputRef = useRef(null);
  const [currentTime, setTime] = useState(min);

  const handleTime = (type) => {
    if (type === 'down' && currentTime > min) {
      setTime(currentTime - range);
    }

    if (type === 'up' && currentTime < max) {
      setTime(currentTime + range);
    }

    if (currentTime === max) {
      setTime(min);
    }
  };

  return { inputRef, handleTime, currentTime };
};

export default useCounter;
