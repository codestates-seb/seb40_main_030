import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { snackBarState } from '@/recoil/pagesState';

const useSnackBar = () => {
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);
  const { isActive, message } = snackBar;

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setSnackBar({ ...snackBar, isActive: false });
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  const openSnackBar = (message) => {
    setSnackBar({ message, isActive: true });
  };

  return { isActive, message, openSnackBar };
};

export default useSnackBar;
