import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants';
import { useBottomSheet, useCheckDateFixed, useSnackBar } from '@/hooks';

const DateFixedRouter = () => {
  const { openSnackBar } = useSnackBar();
  const { isDateFixed } = useCheckDateFixed();
  const { setIsOpen } = useBottomSheet();

  useEffect(() => {
    if (!isDateFixed) {
      openSnackBar('예약시간 설정을 해주세요.');
      setIsOpen(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDateFixed]);

  return isDateFixed ? <Outlet /> : <Navigate to={ROUTES.HOME.PATH} replace />;
};

export default DateFixedRouter;
