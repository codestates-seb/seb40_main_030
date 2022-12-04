import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { snackBarState } from '@/recoil/pagesState';

const useSnackBar = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);
  const { isActive, message } = snackBar;

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setSnackBar({ ...snackBar, isActive: false });
      }, 4000);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const openSnackBar = (message) => {
    setSnackBar({ message, isActive: true });
  };

  return {
    setIsCanceled,
    setIsConfirmed,
    isConfirmed,
    isCanceled,
    isActive,
    message,
    openSnackBar,
  };
};

export default useSnackBar;
