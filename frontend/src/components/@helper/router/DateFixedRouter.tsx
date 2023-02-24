import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { MESSAGE, ROUTES } from '@/constants';
import { useBottomSheet, useCheckDateFixed, useSnackBar } from '@/hooks';

function DateFixedRouter() {
  const { openSnackBar } = useSnackBar();
  const { isDateFixed } = useCheckDateFixed();
  const { setIsOpen } = useBottomSheet();

  useEffect(() => {
    if (!isDateFixed) {
      openSnackBar(MESSAGE.RESERVATION_NOT_SUCCEED);
      setIsOpen(true);
    }
  }, [isDateFixed]);

  return isDateFixed ? <Outlet /> : <Navigate to={ROUTES.HOME.PATH} replace />;
}

export default DateFixedRouter;