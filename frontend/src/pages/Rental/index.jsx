import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/components/@commons';
import RentalStatus from '@/components/Rental/RentalStatus';
import { useGetStationById } from '@/hooks';

const Rental = () => {
  const { stationId } = useParams();
  const { data, status } = useGetStationById(stationId);

  if (status === 'success') {
    return (
      <PageWrapper title='배터리 보유 현황' path={-1}>
        <RentalStatus data={data} />
      </PageWrapper>
    );
  }
};

export default Rental;
