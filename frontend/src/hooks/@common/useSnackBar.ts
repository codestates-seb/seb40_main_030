import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { snackBarState } from '@/recoil/pagesState';

const useSnackBar = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);

  useEffect(() => {
    if (snackBar.isActive) {
      setTimeout(() => {
        setSnackBar({ ...snackBar, isActive: false });
      }, 4000);
    }
  }, [snackBar.isActive]);

  const openSnackBar = (message: string) => {
    setSnackBar({ message, isActive: true });
  };

  return {
    setIsCanceled,
    setIsConfirmed,
    isConfirmed,
    isCanceled,
    isActive: snackBar.isActive,
    message: snackBar.message,
    openSnackBar,
  };
};

export default useSnackBar;
