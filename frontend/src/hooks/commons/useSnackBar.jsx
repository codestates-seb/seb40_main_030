import { useEffect, useState } from 'react';

const useSnackBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [isActive]);

  const openSnackBar = (message = '에러 메시지') => {
    setMessage(message);
    setIsActive(true);
  };

  return { isActive, message, openSnackBar };
};

export default useSnackBar;
