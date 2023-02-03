import { useEffect, useRef } from 'react';

const usePreviousValue = (value: any) => {
  const previousValueRef = useRef();

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return previousValueRef.current;
};

export default usePreviousValue;
