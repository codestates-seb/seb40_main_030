import { useRecoilValue } from 'recoil';

import { ROUTES } from '@/constants';
import { useCheckValidReserveTable, useGetAllStations } from '@/hooks';
import useGetFilteredStationsBySetTime from '@/hooks/stations/useGetFilteredStationsBySetTime';
import { reservationState } from '@/recoil/pagesState';

import { PageWrapper } from '../../components/@commons';
import SearchPage from '../../components/Search/SearchPage';

const Search = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { dateFixed } = useRecoilValue(reservationState);

  const { stations } = useGetAllStations();
  const { filteredStations } = useGetFilteredStationsBySetTime({
    startTime: startPoint.replace(' ', 'T'),
    endTime: endPoint.replace(' ', 'T'),
  });

  return (
    <PageWrapper title='대여장소 검색하기' path={ROUTES.HOME.PATH}>
      {dateFixed.date && dateFixed.time && filteredStations ? (
        <SearchPage stations={filteredStations} />
      ) : (
        <SearchPage stations={stations} />
      )}
    </PageWrapper>
  );
};

export default Search;
