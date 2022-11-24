import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/components/@commons';
import { PrivateRouter } from '@/components/@helper';
import RentalStatus from '@/components/Rental/RentalStatus';
import { ROUTES } from '@/constants';
import { useCheckDateFixed } from '@/hooks';

const Rental = () => {
  const { stationId } = useParams();
  const { isDateFixed } = useCheckDateFixed();

  return (
    <PrivateRouter
      when={isDateFixed}
      message='예약시간 설정을 해주세요'
      path={ROUTES.HOME.PATH}
    >
      <PageWrapper title='배터리 보유 현황' path={-1}>
        <RentalStatus id={stationId} />
      </PageWrapper>
    </PrivateRouter>
  );
};

export default Rental;
