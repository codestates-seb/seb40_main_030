import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { snackBarState } from '@/recoil/pagesState';

const useSnackBar = () => {
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);

  useEffect(() => {
    if (snackBar.isActive) {
      setTimeout(() => {
        setSnackBar({ ...snackBar, isActive: false });
      }, 3000);
    }
  }, [snackBar.isActive]);

  const openSnackBar = useCallback(
    (message: string) => {
      console.log(message);
      setSnackBar({ message, isActive: true });
    },
    [snackBar.isActive],
  );

  return {
    isActive: snackBar.isActive,
    message: snackBar.message,
    openSnackBar,
  };
};

export default useSnackBar;
