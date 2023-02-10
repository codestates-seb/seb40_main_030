import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/components/@common';
import { lazy } from 'react';

const RentalStatus = lazy(() => import('@/components/Rental/RentalStatus'));

const Rental = () => {
  const { stationId } = useParams();

  return (
    <PageWrapper title='배터리 보유 현황' path={-1}>
      <RentalStatus id={stationId} />
    </PageWrapper>
  );
};

export default Rental;
