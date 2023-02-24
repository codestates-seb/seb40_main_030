import { useEffect, useRef } from 'react';

const usePreviousValue = (value: any) => {
  const previousValueRef = useRef();

  useEffect(() => {
    if (previousValueRef.current) {
      previousValueRef.current = value;
    }
  }, [value]);

  return previousValueRef.current;
};

export default usePreviousValue;
